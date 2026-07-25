"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Eye,
  FileText,
  Loader2,
  Lock,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

/**
 * Jury-only secure document viewer with large fullscreen popup.
 * Renders PDFs/images from blob data onto canvas/img — no download chrome.
 */
export default function JurySecureDocumentViewer({
  nominationId,
  type = "primary",
  label = "Supporting document",
  kind = "pdf",
}) {
  const src = `/api/nomination/document?id=${nominationId}&type=${type}&mode=view`;
  const [open, setOpen] = useState(true); // open large popup by default
  const [status, setStatus] = useState("idle"); // idle | loading | ready | error | office
  const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [mode, setMode] = useState(""); // image | pdf
  const [zoom, setZoom] = useState(1);
  const [mounted, setMounted] = useState(false);
  const canvasHostRef = useRef(null);
  const objectUrlRef = useRef(null);
  const pdfDataRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll while popup is open
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape closes popup
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      const key = e.key?.toLowerCase();
      if ((e.ctrlKey || e.metaKey) && ["s", "p", "u"].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [open]);

  const renderPdfPages = async (buffer, scaleMul = 1) => {
    const pdfjs = await import("pdfjs-dist");
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

    const pdf = await pdfjs.getDocument({ data: buffer }).promise;
    setPageCount(pdf.numPages);
    setMode("pdf");

    await new Promise((r) => setTimeout(r, 50));
    const host = canvasHostRef.current;
    if (!host) throw new Error("Preview surface unavailable");
    host.innerHTML = "";

    const maxWidth = Math.min(
      1200,
      Math.max(host.clientWidth || 960, 480)
    );

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum += 1) {
      const page = await pdf.getPage(pageNum);
      const base = page.getViewport({ scale: 1 });
      const fit = maxWidth / base.width;
      const scale = Math.min(Math.max(fit * scaleMul, 1.1), 2.4);
      const viewport = page.getViewport({ scale });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = "100%";
      canvas.style.maxWidth = `${viewport.width}px`;
      canvas.style.height = "auto";
      canvas.style.display = "block";
      canvas.style.margin = "0 auto 18px";
      canvas.style.background = "#fff";
      canvas.style.borderRadius = "10px";
      canvas.style.boxShadow = "0 8px 28px rgba(0,0,0,0.35)";
      host.appendChild(canvas);
      await page.render({ canvasContext: context, viewport }).promise;
    }
  };

  // Load document when popup opens
  useEffect(() => {
    if (!open) return undefined;
    let cancelled = false;

    async function load() {
      if (kind === "office") {
        setStatus("office");
        return;
      }

      setStatus("loading");
      setError("");
      setImageUrl("");
      setPageCount(0);
      setMode("");
      if (canvasHostRef.current) canvasHostRef.current.innerHTML = "";

      try {
        // Reuse cached PDF bytes on zoom re-render
        let buffer = pdfDataRef.current;
        if (!buffer) {
          const res = await fetch(src, {
            credentials: "include",
            cache: "no-store",
            headers: { Accept: "*/*" },
          });
          if (!res.ok) throw new Error("Unable to load document for viewing");
          const contentType = (res.headers.get("content-type") || "").toLowerCase();
          buffer = await res.arrayBuffer();
          if (cancelled) return;

          const isImage = kind === "image" || contentType.startsWith("image/");
          if (isImage) {
            const blob = new Blob([buffer], {
              type: contentType.startsWith("image/")
                ? contentType.split(";")[0]
                : "image/jpeg",
            });
            if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
            const url = URL.createObjectURL(blob);
            objectUrlRef.current = url;
            setImageUrl(url);
            setMode("image");
            setStatus("ready");
            return;
          }

          pdfDataRef.current = buffer.slice(0);
        }

        await renderPdfPages(pdfDataRef.current.slice(0), zoom);
        if (!cancelled) setStatus("ready");
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setError(err.message || "Failed to open document");
          setStatus("error");
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, src, kind, zoom]);

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = null;
      }
      pdfDataRef.current = null;
    };
  }, []);

  const popup =
    open && mounted
      ? createPortal(
          <div
            className="jr-doc-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={label}
            onClick={() => setOpen(false)}
          >
            <div
              className="jr-doc-modal"
              onClick={(e) => e.stopPropagation()}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
            >
              <header className="jr-doc-modal__head">
                <div className="jr-doc-modal__titles">
                  <div className="jr-doc-modal__badge">
                    <Lock size={13} /> View only · no download
                  </div>
                  <h2>
                    <Eye size={20} /> {label}
                  </h2>
                  {pageCount > 0 && mode === "pdf" && (
                    <p>
                      {pageCount} page{pageCount === 1 ? "" : "s"} · zoom{" "}
                      {Math.round(zoom * 100)}%
                    </p>
                  )}
                </div>
                <div className="jr-doc-modal__tools">
                  {mode === "pdf" && status === "ready" && (
                    <>
                      <button
                        type="button"
                        className="jr-doc-tool"
                        onClick={() => setZoom((z) => Math.max(0.8, +(z - 0.15).toFixed(2)))}
                        title="Zoom out"
                      >
                        <ZoomOut size={18} />
                      </button>
                      <button
                        type="button"
                        className="jr-doc-tool"
                        onClick={() => setZoom((z) => Math.min(1.8, +(z + 0.15).toFixed(2)))}
                        title="Zoom in"
                      >
                        <ZoomIn size={18} />
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    className="jr-doc-close"
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
              </header>

              <div className="jr-doc-modal__body">
                {status === "loading" && (
                  <div className="jr-doc-modal__state">
                    <Loader2 size={32} className="jr-spin" />
                    <span>Preparing large secure preview…</span>
                  </div>
                )}

                {status === "office" && (
                  <div className="jr-doc-modal__state">
                    <FileText size={42} />
                    <strong>Preview not available</strong>
                    <p>This file type cannot be opened in the jury viewer.</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="jr-doc-modal__state">
                    <FileText size={42} />
                    <strong>Unable to preview</strong>
                    <p>{error}</p>
                  </div>
                )}

                {status === "ready" && mode === "image" && imageUrl && (
                  <div className="jr-doc-modal__image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageUrl}
                      alt={label}
                      draggable={false}
                      style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
                    />
                  </div>
                )}

                <div
                  ref={canvasHostRef}
                  className="jr-doc-modal__pages"
                  style={{
                    display: mode === "pdf" ? "block" : "none",
                    padding: status === "ready" && mode === "pdf" ? "24px 20px 40px" : 0,
                  }}
                />
              </div>

              <footer className="jr-doc-modal__foot">
                Streamed for jury review only · saving, downloading & printing disabled · press Esc to close
              </footer>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <div className="jr-doc-launch">
      <div className="jr-doc-launch__card">
        <div className="jr-doc-launch__icon">
          <FileText size={28} />
        </div>
        <div className="jr-doc-launch__copy">
          <h4>{label}</h4>
          <p>Open in a large full-screen viewer for comfortable reading. View only — download disabled.</p>
        </div>
        <button
          type="button"
          className="jr-doc-launch__btn"
          onClick={() => {
            setZoom(1);
            setOpen(true);
          }}
        >
          <Maximize2 size={18} /> View large screen
        </button>
      </div>

      {popup}

      <style jsx global>{`
        .jr-doc-launch__card {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          padding: 20px;
          border-radius: 18px;
          border: 1px solid #f0c9cf;
          background: linear-gradient(180deg, #fff 0%, #fff7f8 100%);
        }

        .jr-doc-launch__icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(200, 16, 46, 0.1);
          color: #c8102e;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .jr-doc-launch__copy {
          flex: 1;
          min-width: 200px;
        }

        .jr-doc-launch__copy h4 {
          margin: 0 0 4px;
          font-size: 16px;
          font-weight: 800;
          color: #1a1412;
        }

        .jr-doc-launch__copy p {
          margin: 0;
          font-size: 13px;
          color: #6b625c;
          line-height: 1.5;
        }

        .jr-doc-launch__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: none;
          border-radius: 12px;
          padding: 12px 18px;
          font: inherit;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          color: #fff;
          background: linear-gradient(135deg, #c8102e, #7a0a1c);
          box-shadow: 0 10px 24px rgba(200, 16, 46, 0.25);
        }

        .jr-doc-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(15, 10, 12, 0.72);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: stretch;
          justify-content: center;
          padding: 16px;
          animation: jrDocFade 0.2s ease;
        }

        .jr-doc-modal {
          width: min(1280px, 100%);
          height: calc(100vh - 32px);
          max-height: 100%;
          background: #0f0c0b;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.08);
          animation: jrDocRise 0.28s ease;
        }

        .jr-doc-modal__head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          padding: 18px 22px;
          background: linear-gradient(135deg, #c8102e 0%, #7a0a1c 100%);
          color: #fff;
          flex-shrink: 0;
        }

        .jr-doc-modal__badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.18);
          padding: 4px 10px;
          border-radius: 999px;
          margin-bottom: 8px;
        }

        .jr-doc-modal__titles h2 {
          margin: 0;
          font-size: 22px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 10px;
          letter-spacing: -0.02em;
        }

        .jr-doc-modal__titles p {
          margin: 6px 0 0;
          font-size: 13px;
          opacity: 0.85;
        }

        .jr-doc-modal__tools {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .jr-doc-tool,
        .jr-doc-close {
          width: 42px;
          height: 42px;
          border: none;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.16);
          color: #fff;
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        .jr-doc-tool:hover,
        .jr-doc-close:hover {
          background: rgba(255, 255, 255, 0.28);
        }

        .jr-doc-modal__body {
          flex: 1;
          overflow: auto;
          background:
            radial-gradient(800px 300px at 50% 0%, rgba(200, 16, 46, 0.12), transparent 60%),
            #14110f;
          user-select: none;
          -webkit-user-select: none;
        }

        .jr-doc-modal__state {
          min-height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #cbbfb6;
          text-align: center;
          padding: 48px 24px;
        }

        .jr-doc-modal__state strong {
          color: #fff;
          font-size: 18px;
        }

        .jr-doc-modal__state p {
          margin: 0;
          max-width: 360px;
          line-height: 1.5;
          font-size: 14px;
        }

        .jr-doc-modal__image {
          display: flex;
          justify-content: center;
          padding: 28px 20px 40px;
        }

        .jr-doc-modal__image img {
          max-width: 100%;
          height: auto;
          object-fit: contain;
          pointer-events: none;
          border-radius: 10px;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
          background: #fff;
        }

        .jr-doc-modal__foot {
          flex-shrink: 0;
          padding: 12px 18px;
          background: #211c19;
          color: #a89a90;
          font-size: 12px;
          text-align: center;
        }

        .jr-spin {
          animation: jrSpin 0.9s linear infinite;
          color: #c8102e;
        }

        @keyframes jrSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes jrDocFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes jrDocRise {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        @media (max-width: 720px) {
          .jr-doc-overlay {
            padding: 0;
          }
          .jr-doc-modal {
            width: 100%;
            height: 100vh;
            border-radius: 0;
          }
          .jr-doc-modal__titles h2 {
            font-size: 17px;
          }
        }
      `}</style>
    </div>
  );
}
