"use client";

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  FileText,
  Globe,
  Mail,
  Phone,
  MapPin,
  Hash,
  Star,
  ListFilter,
} from "lucide-react";
import JurySecureDocumentViewer from "./JurySecureDocumentViewer";

const BFA_LOGO = "/assets/img/logo.svg";
const BFA_LOGO_WHITE = "/assets/img/logo-white.svg";

const display = (value) => {
  if (value === 0) return "0";
  if (value === false) return "No";
  if (value === true) return "Yes";
  if (value == null || String(value).trim() === "") return "—";
  return String(value);
};

/** Ensure website links open as external sites, not relative app routes. */
function toExternalUrl(url = "") {
  const raw = String(url || "").trim();
  if (!raw || raw === "—" || raw.toLowerCase() === "null") return "";
  if (/^https?:\/\//i.test(raw)) return raw;
  if (/^\/\//.test(raw)) return `https:${raw}`;
  return `https://${raw.replace(/^\/+/, "")}`;
}

function formatDate(value) {
  if (!value) return "—";
  try {
    return new Date(value).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "—";
  }
}

function Field({ label, children, full }) {
  return (
    <div className={`jr-field${full ? " jr-field--full" : ""}`}>
      <div className="jr-field__label">{label}</div>
      <div className="jr-field__value">{children ?? "—"}</div>
    </div>
  );
}

function Section({ title, children, tone }) {
  return (
    <section className={`jr-section${tone ? ` jr-section--${tone}` : ""}`}>
      <header className="jr-section__head">
        <span className="jr-section__mark" aria-hidden="true">
          <img src={BFA_LOGO} alt="" width={18} height={18} />
        </span>
        <h3>{title}</h3>
      </header>
      <div className="jr-section__body">{children}</div>
    </section>
  );
}

export default function JuryReviewView() {
  const [nominations, setNominations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
    limit: 10,
  });
  const [active, setActive] = useState(null);
  const [tab, setTab] = useState("overview");
  const [shortlists, setShortlists] = useState([]);
  const [assignedCategories, setAssignedCategories] = useState([]);
  const [listMode, setListMode] = useState("all"); // all | shortlisted
  const [categoryFilter, setCategoryFilter] = useState("");
  const [shortlistBusy, setShortlistBusy] = useState("");

  const shortlistKey = (nominationId, category) =>
    `${nominationId}::${category}`;

  const shortlistSet = useMemo(() => {
    const s = new Set();
    for (const row of shortlists) {
      s.add(shortlistKey(String(row.nominationId), row.category));
    }
    return s;
  }, [shortlists]);

  const isShortlisted = (nominationId, category) =>
    shortlistSet.has(shortlistKey(String(nominationId), category));

  const shortlistedCategoriesFor = (nominationId) =>
    shortlists
      .filter((r) => String(r.nominationId) === String(nominationId))
      .map((r) => r.category);

  const shortlistableCatsFor = (nomination) => {
    const cats = nomination?.awardcate || [];
    if (assignedCategories.length) {
      return cats.filter((c) => assignedCategories.includes(c));
    }
    return cats;
  };

  const fetchShortlists = async () => {
    try {
      const res = await axios.get("/api/jury/shortlist");
      if (res.data.response) {
        setShortlists(res.data.data || []);
        setAssignedCategories(res.data.assignedCategories || []);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchNominations = async (pageNum = 1) => {
    setLoading(true);
    try {
      if (listMode === "shortlisted") {
        // Build list from shortlist rows (includes nomination payloads)
        const byId = new Map();
        for (const row of shortlists) {
          if (categoryFilter && row.category !== categoryFilter) continue;
          const nom = row.nomination;
          if (!nom?._id) continue;
          const id = String(nom._id);
          if (!byId.has(id)) byId.set(id, nom);
        }
        let list = [...byId.values()];
        if (search.trim()) {
          const q = search.trim().toLowerCase();
          list = list.filter((n) =>
            [n.companynm, n.firstName, n.lastName, n.email, ...(n.awardcate || [])]
              .filter(Boolean)
              .join(" ")
              .toLowerCase()
              .includes(q)
          );
        }
        setNominations(list);
        setPagination({
          totalCount: list.length,
          totalPages: 1,
          currentPage: 1,
          limit: list.length || 10,
        });
        setPage(1);
        setActive((prev) => {
          if (!prev) return list[0] || null;
          const still = list.find((n) => String(n._id) === String(prev._id));
          return still || list[0] || null;
        });
        return;
      }

      const params = new URLSearchParams({
        page: String(pageNum),
        limit: "10",
        search,
      });
      const res = await axios.get(`/api/nomination?${params}`);
      if (res.data.response) {
        let list = res.data.data || [];
        if (categoryFilter) {
          list = list.filter((n) => (n.awardcate || []).includes(categoryFilter));
        }
        setNominations(list);
        setPagination(
          categoryFilter
            ? {
                ...res.data.pagination,
                totalCount: list.length,
                totalPages: 1,
                currentPage: 1,
              }
            : res.data.pagination
        );
        setPage(pageNum);
        setActive((prev) => {
          if (!prev) return list[0] || null;
          const still = list.find((n) => n._id === prev._id);
          return still || list[0] || null;
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShortlists();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => fetchNominations(1), 250);
    return () => clearTimeout(t);
    // shortlists only needed when building the Shortlisted view
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, listMode, categoryFilter, listMode === "shortlisted" ? shortlists : null]);

  useEffect(() => {
    setTab("overview");
  }, [active?._id]);

  useEffect(() => {
    if (tab === "documents" && !(active?.hasPrimaryDocument || active?.uploadfile)) {
      setTab("overview");
    }
  }, [tab, active]);

  const fullName = useMemo(() => {
    if (!active) return "";
    return [active.title, active.firstName, active.lastName].filter(Boolean).join(" ");
  }, [active]);

  const availableCategories = useMemo(() => {
    const set = new Set();
    for (const n of nominations) {
      for (const c of n.awardcate || []) set.add(c);
    }
    for (const r of shortlists) set.add(r.category);
    return [...set].sort();
  }, [nominations, shortlists]);

  const toggleShortlist = async (nominationId, category) => {
    const key = shortlistKey(nominationId, category);
    const currently = isShortlisted(nominationId, category);
    setShortlistBusy(key);
    try {
      const res = await axios.post("/api/jury/shortlist", {
        nominationId,
        category,
        shortlisted: !currently,
      });
      if (!res.data.response) throw new Error(res.data.data || "Failed");
      if (currently) {
        setShortlists((prev) =>
          prev.filter(
            (r) =>
              !(
                String(r.nominationId) === String(nominationId) &&
                r.category === category
              )
          )
        );
      } else {
        setShortlists((prev) => [
          ...prev.filter(
            (r) =>
              !(
                String(r.nominationId) === String(nominationId) &&
                r.category === category
              )
          ),
          {
            _id: res.data.data?._id,
            nominationId,
            category,
            note: "",
          },
        ]);
      }
    } catch (e) {
      console.error(e);
      alert(e.response?.data?.data || e.message || "Could not update shortlist");
    } finally {
      setShortlistBusy("");
    }
  };

  const activeShortlistCount = active
    ? shortlistedCategoriesFor(active._id).length
    : 0;

  return (
    <div className="jr">
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Outfit:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <header className="jr-hero">
        <div className="jr-hero__brand">
          <img src={BFA_LOGO_WHITE} alt="Brit FinTech Awards" className="jr-hero__logo" />
        </div>
        <div className="jr-hero__copy">
          <div className="jr-hero__badge">Protected jury access · shortlist enabled</div>
          <h1>Nomination Review</h1>
          <p>
            Review assigned entries and shortlist nominations per award
            category. Multi-category entries can be shortlisted separately for
            each category.
          </p>
        </div>
        <div className="jr-hero__stats">
          <div className="jr-hero__stat">
            <span>Assigned</span>
            <strong>{pagination.totalCount}</strong>
          </div>
          <div className="jr-hero__stat jr-hero__stat--accent">
            <span>My shortlists</span>
            <strong>{shortlists.length}</strong>
          </div>
        </div>
      </header>

      <div className="jr-workspace">
        {/* List pane */}
        <aside className="jr-list">
          <div className="jr-list__search">
            <Search size={17} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search company, name, email…"
            />
          </div>

          <div className="jr-list__filters">
            <button
              type="button"
              className={`jr-filter-btn${listMode === "all" ? " is-active" : ""}`}
              onClick={() => setListMode("all")}
            >
              <ListFilter size={14} /> All
            </button>
            <button
              type="button"
              className={`jr-filter-btn${listMode === "shortlisted" ? " is-active" : ""}`}
              onClick={() => setListMode("shortlisted")}
            >
              <Star size={14} /> Shortlisted
              {shortlists.length > 0 && (
                <em>{shortlists.length}</em>
              )}
            </button>
          </div>

          {availableCategories.length > 0 && (
            <div className="jr-list__cats-filter">
              <button
                type="button"
                className={`jr-cat-chip${!categoryFilter ? " is-active" : ""}`}
                onClick={() => setCategoryFilter("")}
              >
                All categories
              </button>
              {availableCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`jr-cat-chip${categoryFilter === cat ? " is-active" : ""}`}
                  onClick={() =>
                    setCategoryFilter((prev) => (prev === cat ? "" : cat))
                  }
                  title={cat}
                >
                  {cat.length > 28 ? `${cat.slice(0, 28)}…` : cat}
                </button>
              ))}
            </div>
          )}

          <div className="jr-list__scroll">
            {loading ? (
              <div className="jr-list__empty">Loading nominations…</div>
            ) : nominations.length === 0 ? (
              <div className="jr-list__empty">
                {listMode === "shortlisted"
                  ? "No shortlisted nominations yet."
                  : "No nominations assigned yet."}
              </div>
            ) : (
              nominations.map((n, idx) => {
                const selected = active?._id === n._id;
                const cats = shortlistedCategoriesFor(n._id);
                return (
                  <button
                    key={n._id}
                    type="button"
                    className={`jr-list__item${selected ? " is-active" : ""}${cats.length ? " is-shortlisted" : ""}`}
                    onClick={() => setActive(n)}
                  >
                    <div className="jr-list__index">{String(idx + 1 + (page - 1) * 10).padStart(2, "0")}</div>
                    <div className="jr-list__meta">
                      <div className="jr-list__company">
                        {display(n.companynm)}
                        {cats.length > 0 && (
                          <Star size={13} className="jr-list__star" fill="currentColor" />
                        )}
                      </div>
                      <div className="jr-list__name">
                        {display([n.title, n.firstName, n.lastName].filter(Boolean).join(" "))}
                      </div>
                      <div className="jr-list__cats">
                        {(n.awardcate || []).slice(0, 1).map((cat) => (
                          <span key={cat}>{cat}</span>
                        ))}
                        {(n.awardcate || []).length > 1 && (
                          <em>+{(n.awardcate || []).length - 1}</em>
                        )}
                      </div>
                      {cats.length > 0 && (
                        <div className="jr-list__short">
                          Shortlisted · {cats.length} categor{cats.length === 1 ? "y" : "ies"}
                        </div>
                      )}
                      <div className="jr-list__docs">
                        {(n.hasPrimaryDocument || n.uploadfile) && (
                          <span>
                            <FileText size={11} /> Doc
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {pagination.totalPages > 1 && listMode === "all" && !categoryFilter && (
            <div className="jr-pager">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => fetchNominations(page - 1)}
              >
                <ChevronLeft size={16} />
              </button>
              <span>
                {page} / {pagination.totalPages}
              </span>
              <button
                type="button"
                disabled={page >= pagination.totalPages}
                onClick={() => fetchNominations(page + 1)}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </aside>

        {/* Detail pane */}
        <main className="jr-detail">
          {!active ? (
            <div className="jr-detail__empty">
              <img src={BFA_LOGO} alt="Brit FinTech Awards" width={56} height={56} />
              <h2>Select a nomination</h2>
              <p>Choose an entry from the list to review and shortlist.</p>
            </div>
          ) : (
            <>
              <div className="jr-detail__banner">
                <div>
                  <div className="jr-detail__kicker">
                    Jury dossier
                    {activeShortlistCount > 0 && (
                      <span className="jr-detail__short-pill">
                        <Star size={12} fill="currentColor" /> Shortlisted in{" "}
                        {activeShortlistCount}
                      </span>
                    )}
                  </div>
                  <h2>{display(active.companynm)}</h2>
                  <p>{display(fullName)}</p>
                </div>
                <div className="jr-detail__chips">
                  {(active.awardcate || []).map((cat) => (
                    <span
                      key={cat}
                      className={isShortlisted(active._id, cat) ? "is-shortlisted" : ""}
                    >
                      {isShortlisted(active._id, cat) && (
                        <Star size={11} fill="currentColor" />
                      )}
                      {cat}
                    </span>
                  ))}
                  {!(active.awardcate || []).length && <span className="is-muted">No categories</span>}
                </div>
              </div>

              <div className="jr-tabs" role="tablist">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "shortlist", label: "Shortlist" },
                  { id: "narrative", label: "Narratives" },
                  ...(active.hasPrimaryDocument || active.uploadfile
                    ? [{ id: "documents", label: "Documents" }]
                    : []),
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={tab === t.id}
                    className={tab === t.id ? "is-active" : ""}
                    onClick={() => setTab(t.id)}
                  >
                    {t.label}
                    {t.id === "shortlist" && activeShortlistCount > 0 && (
                      <em className="jr-tab-count">{activeShortlistCount}</em>
                    )}
                  </button>
                ))}
              </div>

              <div className="jr-detail__scroll">
                {tab === "overview" && (
                  <div className="jr-grid">
                    <Section title="Entrant details">
                      <div className="jr-fields">
                        <Field label="Title">{display(active.title)}</Field>
                        <Field label="First name">{display(active.firstName)}</Field>
                        <Field label="Last name">{display(active.lastName)}</Field>
                        <Field label="Email">
                          <span className="jr-inline">
                            <Mail size={14} /> {display(active.email)}
                          </span>
                        </Field>
                        <Field label="Phone">
                          <span className="jr-inline">
                            <Phone size={14} /> {display(active.phoneNo)}
                          </span>
                        </Field>
                        <Field label="Submitted">{formatDate(active.createdAt)}</Field>
                      </div>
                    </Section>

                    <Section title="Company profile">
                      <div className="jr-fields">
                        <Field label="Company name" full>
                          {display(active.companynm)}
                        </Field>
                        <Field label="Sector">{display(active.companysector)}</Field>
                        <Field label="Registration no.">
                          <span className="jr-inline">
                            <Hash size={14} /> {display(active.companyregnumber)}
                          </span>
                        </Field>
                        <Field label="Turnover (GBP)">{display(active.amountingbp)}</Field>
                        <Field label="Business corridors" full>
                          {display(active.businesscorridors)}
                        </Field>
                        <Field label="Company address" full>
                          <span className="jr-inline jr-inline--top">
                            <MapPin size={14} /> {display(active.companyaddress)}
                          </span>
                        </Field>
                        <Field label="Website" full>
                          {toExternalUrl(active.websiteurl) ? (
                            <a
                              href={toExternalUrl(active.websiteurl)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="jr-link"
                            >
                              <Globe size={14} /> {display(active.websiteurl)}
                            </a>
                          ) : (
                            "—"
                          )}
                        </Field>
                      </div>
                    </Section>

                    <Section title="Award categories" tone="accent">
                      <div className="jr-cat-grid">
                        {(active.awardcate || []).length ? (
                          (active.awardcate || []).map((cat, i) => (
                            <div
                              key={cat}
                              className={`jr-cat${isShortlisted(active._id, cat) ? " is-shortlisted" : ""}`}
                            >
                              <span>{String(i + 1).padStart(2, "0")}</span>
                              <strong>{cat}</strong>
                              {isShortlisted(active._id, cat) && (
                                <Star size={14} fill="currentColor" className="jr-cat__star" />
                              )}
                            </div>
                          ))
                        ) : (
                          <div className="jr-cat is-empty">No categories listed</div>
                        )}
                      </div>
                    </Section>
                  </div>
                )}

                {tab === "shortlist" && (
                  <div className="jr-grid jr-grid--stack">
                    <Section title="Shortlist by award category" tone="accent">
                      <p className="jr-shortlist-help">
                        This nomination can be entered in multiple categories.
                        Shortlist it only for the categories you want to advance.
                      </p>
                      <div className="jr-shortlist-list">
                        {shortlistableCatsFor(active).length ? (
                          shortlistableCatsFor(active).map((cat) => {
                            const on = isShortlisted(active._id, cat);
                            const busy =
                              shortlistBusy === shortlistKey(active._id, cat);
                            return (
                              <div
                                key={cat}
                                className={`jr-shortlist-row${on ? " is-on" : ""}`}
                              >
                                <div className="jr-shortlist-row__text">
                                  <strong>{cat}</strong>
                                  <span>
                                    {on
                                      ? "On your shortlist for this category"
                                      : "Not shortlisted for this category"}
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  className={`jr-shortlist-btn${on ? " is-on" : ""}`}
                                  disabled={busy}
                                  onClick={() => toggleShortlist(active._id, cat)}
                                >
                                  <Star size={15} fill={on ? "currentColor" : "none"} />
                                  {busy
                                    ? "Saving…"
                                    : on
                                      ? "Remove shortlist"
                                      : "Shortlist"}
                                </button>
                              </div>
                            );
                          })
                        ) : (
                          <div className="jr-list__empty">
                            {(active.awardcate || []).length
                              ? "None of this nomination’s categories are in your assigned scope."
                              : "No award categories on this nomination."}
                          </div>
                        )}
                      </div>
                    </Section>
                  </div>
                )}

                {tab === "narrative" && (
                  <div className="jr-grid jr-grid--stack">
                    <Section title="Services offered">
                      <div className="jr-prose">{display(active.serviceyouOffer)}</div>
                    </Section>
                    <Section title="About entrant & company">
                      <div className="jr-prose">{display(active.aboutyourself)}</div>
                    </Section>
                    <Section title="Submission meta">
                      <div className="jr-fields">
                        <Field label="Created">{formatDate(active.createdAt)}</Field>
                        <Field label="Last updated">{formatDate(active.updatedAt)}</Field>
                        <Field label="Nomination ID">{display(active._id)}</Field>
                      </div>
                    </Section>
                  </div>
                )}

                {tab === "documents" && (
                  <div className="jr-grid jr-grid--stack">
                    <Section title="Supporting document (view only)">
                      <div className="jr-docs">
                        {active.hasPrimaryDocument || active.uploadfile ? (
                          <JurySecureDocumentViewer
                            nominationId={active._id}
                            type="primary"
                            label="Supporting document"
                            kind={active.primaryDocumentKind || "pdf"}
                          />
                        ) : null}
                      </div>
                    </Section>
                  </div>
                )}
              </div>
            </>
          )}
        </main>
      </div>

      <style jsx global>{`
        .jr {
          --jr-red: #c8102e;
          --jr-red-deep: #7a0a1c;
          --jr-ink: #1a1412;
          --jr-muted: #6b625c;
          --jr-line: #ebe3de;
          --jr-paper: #ffffff;
          --jr-panel: #ffffff;
          --jr-sand: #f7f5f4;
          font-family: "Outfit", system-ui, sans-serif;
          color: var(--jr-ink);
        }

        .jr-hero {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 22px;
          align-items: center;
          margin-bottom: 22px;
          padding: 26px 28px;
          border-radius: 22px;
          background:
            radial-gradient(700px 240px at 100% 0%, rgba(200, 16, 46, 0.45), transparent 55%),
            linear-gradient(135deg, #1a1412 0%, #3a0d16 45%, #c8102e 120%);
          color: #ffffff !important;
          position: relative;
          overflow: hidden;
        }

        .jr-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          opacity: 0.45;
        }

        .jr-hero__brand,
        .jr-hero__copy,
        .jr-hero__stat,
        .jr-hero__stats {
          position: relative;
          z-index: 1;
          color: #ffffff;
        }

        .jr-hero__logo {
          width: 64px;
          height: 64px;
          object-fit: contain;
          filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.25));
        }

        .jr-hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.02em;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.16);
          padding: 6px 12px;
          border-radius: 999px;
          margin-bottom: 14px;
          color: #ffffff;
        }

        .jr-hero h1 {
          font-family: "Fraunces", Georgia, serif;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          margin: 0 0 8px;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: #ffffff !important;
        }

        .jr-hero p {
          margin: 0;
          max-width: 520px;
          color: #ffffff !important;
          opacity: 0.9;
          line-height: 1.55;
          font-size: 15px;
        }

        .jr-hero__stat {
          min-width: 120px;
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 18px;
          padding: 16px 18px;
          backdrop-filter: blur(8px);
          color: #ffffff;
        }

        .jr-hero__stat span {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0.85;
          margin-bottom: 4px;
          color: #ffffff;
        }

        .jr-hero__stat strong {
          font-family: "Fraunces", Georgia, serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 1;
          color: #ffffff;
        }

        .jr-hero__stats {
          display: flex;
          gap: 10px;
        }

        .jr-hero__stat--accent {
          background: rgba(255, 215, 0, 0.16);
          border-color: rgba(255, 215, 0, 0.35);
        }

        .jr-workspace {
          display: grid;
          grid-template-columns: minmax(280px, 340px) 1fr;
          gap: 18px;
          min-height: calc(100vh - 260px);
          align-items: stretch;
        }

        .jr-list {
          background: var(--jr-panel);
          border: 1px solid var(--jr-line);
          border-radius: 22px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(26, 20, 18, 0.05);
        }

        .jr-list__search input {
          flex: 1;
          border: none;
          outline: none;
          font: inherit;
          font-size: 14px;
          background: #ffffff;
          color: var(--jr-ink);
        }

        .jr-list__search {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 16px;
          border-bottom: 1px solid var(--jr-line);
          color: var(--jr-muted);
          background: #ffffff;
        }

        .jr-list__filters {
          display: flex;
          gap: 8px;
          padding: 10px 12px;
          border-bottom: 1px solid var(--jr-line);
          background: #faf8f7;
        }

        .jr-filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid var(--jr-line);
          background: #fff;
          color: var(--jr-muted);
          font: inherit;
          font-size: 12px;
          font-weight: 700;
          padding: 7px 11px;
          border-radius: 999px;
          cursor: pointer;
        }

        .jr-filter-btn.is-active {
          background: var(--jr-red);
          border-color: var(--jr-red);
          color: #fff;
        }

        .jr-filter-btn em {
          font-style: normal;
          background: rgba(255, 255, 255, 0.22);
          padding: 1px 7px;
          border-radius: 999px;
          font-size: 11px;
        }

        .jr-list__cats-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 10px 12px;
          border-bottom: 1px solid var(--jr-line);
          max-height: 96px;
          overflow-y: auto;
        }

        .jr-cat-chip {
          border: 1px solid var(--jr-line);
          background: #fff;
          color: #3d342f;
          font: inherit;
          font-size: 10px;
          font-weight: 700;
          padding: 5px 9px;
          border-radius: 8px;
          cursor: pointer;
          max-width: 100%;
        }

        .jr-cat-chip.is-active {
          border-color: #f0c9cf;
          background: #fff7f8;
          color: var(--jr-red-deep);
        }

        .jr-list__scroll {
          flex: 1;
          overflow-y: auto;
          max-height: calc(100vh - 340px);
          min-height: 360px;
        }

        .jr-list__empty {
          padding: 40px 24px;
          text-align: center;
          color: var(--jr-muted);
          font-size: 14px;
        }

        .jr-list__item {
          width: 100%;
          text-align: left;
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 12px;
          padding: 14px 16px;
          border: none;
          border-bottom: 1px solid #f1ece7;
          background: transparent;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
          font: inherit;
          color: inherit;
        }

        .jr-list__item:hover {
          background: var(--jr-sand);
        }

        .jr-list__item.is-active {
          background: linear-gradient(90deg, rgba(200, 16, 46, 0.08), transparent 70%);
          box-shadow: inset 3px 0 0 var(--jr-red);
        }

        .jr-list__index {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: var(--jr-sand);
          color: var(--jr-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
        }

        .jr-list__item.is-active .jr-list__index {
          background: var(--jr-red);
          color: #fff;
        }

        .jr-list__company {
          font-weight: 700;
          font-size: 14px;
          line-height: 1.3;
          margin-bottom: 2px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .jr-list__star {
          color: #c9a227;
          flex-shrink: 0;
        }

        .jr-list__short {
          margin-top: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #8a6d12;
        }

        .jr-list__item.is-shortlisted {
          background: #fffdf5;
        }

        .jr-list__name {
          font-size: 12px;
          color: var(--jr-muted);
          margin-bottom: 8px;
        }

        .jr-list__cats {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          align-items: center;
        }

        .jr-list__cats span {
          font-size: 10px;
          font-weight: 700;
          background: #fff;
          border: 1px solid var(--jr-line);
          border-radius: 6px;
          padding: 3px 7px;
          color: #3d342f;
          max-width: 180px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .jr-list__cats em {
          font-style: normal;
          font-size: 11px;
          font-weight: 700;
          color: var(--jr-red);
        }

        .jr-list__docs {
          display: flex;
          gap: 8px;
          margin-top: 8px;
          color: var(--jr-muted);
          font-size: 11px;
          font-weight: 600;
        }

        .jr-list__docs span {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .jr-pager {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px;
          border-top: 1px solid var(--jr-line);
        }

        .jr-pager button {
          border: 1px solid var(--jr-line);
          background: #fff;
          border-radius: 10px;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        .jr-pager button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .jr-pager span {
          font-size: 13px;
          font-weight: 700;
          color: var(--jr-muted);
        }

        .jr-detail {
          background: #ffffff;
          border: 1px solid var(--jr-line);
          border-radius: 22px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 560px;
          box-shadow: 0 12px 40px rgba(26, 20, 18, 0.05);
        }

        .jr-detail__empty {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: var(--jr-muted);
          padding: 48px 24px;
          text-align: center;
        }

        .jr-detail__empty h2 {
          margin: 8px 0 0;
          font-family: "Fraunces", Georgia, serif;
          color: var(--jr-ink);
          font-size: 24px;
        }

        .jr-detail__empty p {
          margin: 0;
          max-width: 320px;
          line-height: 1.5;
        }

        .jr-detail__banner {
          padding: 24px 26px 18px;
          background: #ffffff;
          border-bottom: 1px solid var(--jr-line);
        }

        .jr-detail__kicker {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--jr-red);
          margin-bottom: 8px;
        }

        .jr-detail__banner h2 {
          margin: 0;
          font-family: "Fraunces", Georgia, serif;
          font-size: clamp(24px, 3vw, 34px);
          letter-spacing: -0.03em;
          line-height: 1.15;
        }

        .jr-detail__banner > div > p {
          margin: 6px 0 0;
          color: var(--jr-muted);
          font-size: 15px;
        }

        .jr-detail__chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }

        .jr-detail__chips span {
          background: #fff;
          border: 1px solid #f0c9cf;
          color: var(--jr-red-deep);
          font-size: 12px;
          font-weight: 700;
          padding: 7px 12px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .jr-detail__chips span.is-shortlisted {
          background: #fff8e1;
          border-color: #e6c76a;
          color: #7a5c00;
        }

        .jr-detail__chips span.is-muted {
          border-color: var(--jr-line);
          color: var(--jr-muted);
        }

        .jr-detail__short-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #fff8e1;
          color: #7a5c00;
          border: 1px solid #e6c76a;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 999px;
        }

        .jr-tab-count {
          font-style: normal;
          margin-left: 6px;
          background: #c8102e;
          color: #fff;
          font-size: 10px;
          padding: 1px 6px;
          border-radius: 999px;
        }

        .jr-shortlist-help {
          margin: 0 0 16px;
          color: var(--jr-muted);
          font-size: 14px;
          line-height: 1.5;
        }

        .jr-shortlist-list {
          display: grid;
          gap: 10px;
        }

        .jr-shortlist-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid var(--jr-line);
          background: #fff;
          flex-wrap: wrap;
        }

        .jr-shortlist-row.is-on {
          border-color: #e6c76a;
          background: #fffdf5;
        }

        .jr-shortlist-row__text {
          display: grid;
          gap: 4px;
          min-width: 0;
          flex: 1;
        }

        .jr-shortlist-row__text strong {
          font-size: 14px;
          line-height: 1.35;
        }

        .jr-shortlist-row__text span {
          font-size: 12px;
          color: var(--jr-muted);
        }

        .jr-shortlist-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 1px solid var(--jr-red);
          background: #fff;
          color: var(--jr-red);
          font: inherit;
          font-size: 13px;
          font-weight: 700;
          padding: 10px 14px;
          border-radius: 12px;
          cursor: pointer;
          white-space: nowrap;
        }

        .jr-shortlist-btn.is-on {
          background: linear-gradient(135deg, #c9a227, #8a6d12);
          border-color: transparent;
          color: #fff;
        }

        .jr-shortlist-btn:disabled {
          opacity: 0.65;
          cursor: wait;
        }

        .jr-cat.is-shortlisted {
          background: #fff8e1;
          border-color: #e6c76a;
          grid-template-columns: 42px 1fr auto;
        }

        .jr-cat__star {
          color: #c9a227;
        }

        .jr-tabs {
          display: flex;
          gap: 6px;
          padding: 12px 16px;
          background: #fff;
          border-bottom: 1px solid var(--jr-line);
        }

        .jr-tabs button {
          border: none;
          background: transparent;
          font: inherit;
          font-size: 13px;
          font-weight: 700;
          color: var(--jr-muted);
          padding: 10px 16px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .jr-tabs button.is-active {
          background: var(--jr-red);
          color: #fff;
        }

        .jr-detail__scroll {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          max-height: calc(100vh - 360px);
          background: #ffffff;
        }

        .jr-grid {
          display: grid;
          gap: 16px;
        }

        .jr-grid--stack {
          grid-template-columns: 1fr;
        }

        .jr-section {
          background: #fff;
          border: 1px solid var(--jr-line);
          border-radius: 18px;
          overflow: hidden;
        }

        .jr-section--accent {
          border-color: #f0c9cf;
        }

        .jr-section__head {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          background: #ffffff;
          border-bottom: 1px solid var(--jr-line);
        }

        .jr-section__mark {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: #fff5f6;
          border: 1px solid #f0c9cf;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .jr-section__mark img {
          width: 18px;
          height: 18px;
          object-fit: contain;
        }

        .jr-section__head h3 {
          margin: 0;
          font-size: 15px;
          font-weight: 700;
        }

        .jr-section__body {
          padding: 8px 18px 18px;
        }

        .jr-fields {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0;
        }

        .jr-field {
          padding: 14px 8px;
          border-bottom: 1px solid #f3ebe7;
        }

        .jr-field--full {
          grid-column: 1 / -1;
        }

        .jr-field__label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--jr-muted);
          margin-bottom: 6px;
        }

        .jr-field__value {
          font-size: 15px;
          font-weight: 500;
          line-height: 1.55;
          color: var(--jr-ink);
          word-break: break-word;
          white-space: pre-wrap;
        }

        .jr-inline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .jr-inline--top {
          align-items: flex-start;
        }

        .jr-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--jr-red);
          font-weight: 700;
          text-decoration: none;
          word-break: break-all;
        }

        .jr-link:hover {
          text-decoration: underline;
        }

        .jr-cat-grid {
          display: grid;
          gap: 10px;
          padding-top: 8px;
        }

        .jr-cat {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 12px;
          align-items: center;
          padding: 12px 14px;
          border-radius: 14px;
          background: #fff7f8;
          border: 1px solid #f7d4da;
        }

        .jr-cat span {
          font-family: "Fraunces", Georgia, serif;
          font-weight: 700;
          color: var(--jr-red);
          font-size: 16px;
        }

        .jr-cat strong {
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
        }

        .jr-cat.is-empty {
          display: block;
          color: var(--jr-muted);
          text-align: center;
        }

        .jr-prose {
          margin-top: 8px;
          font-size: 15px;
          line-height: 1.75;
          color: #1a1412;
          white-space: pre-wrap;
          word-break: break-word;
          background: #ffffff;
          border: 1px solid #e8e0d8;
          border-radius: 14px;
          padding: 18px 18px;
          min-height: 120px;
        }

        .jr-docs {
          display: grid;
          gap: 16px;
          padding-top: 8px;
        }

        .jr-doc-missing {
          padding: 22px;
          text-align: center;
          border: 1px dashed var(--jr-line);
          border-radius: 14px;
          color: var(--jr-muted);
          background: #fffdfb;
          font-size: 14px;
        }

        .jr-doc {
          border: 1px solid #f0c9cf;
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
        }

        .jr-doc__head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: linear-gradient(135deg, var(--jr-red), var(--jr-red-deep));
          color: #fff;
        }

        .jr-doc__title {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
        }

        .jr-doc__badge {
          font-size: 11px;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.2);
          padding: 4px 10px;
          border-radius: 999px;
        }

        .jr-doc__body {
          background: #14110f;
          min-height: 420px;
        }

        .jr-doc__frame {
          width: 100%;
          height: 560px;
          border: none;
          background: #14110f;
          display: block;
        }

        .jr-doc__image {
          display: flex;
          justify-content: center;
          padding: 16px;
        }

        .jr-doc__image img {
          max-width: 100%;
          max-height: 560px;
          object-fit: contain;
          user-select: none;
          pointer-events: none;
        }

        .jr-doc__empty {
          min-height: 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #cbbfb6;
          text-align: center;
          padding: 32px;
        }

        .jr-doc__empty strong {
          color: #fff;
          font-size: 16px;
        }

        .jr-doc__empty p {
          margin: 0;
          max-width: 320px;
          font-size: 13px;
          line-height: 1.5;
        }

        .jr-doc__foot {
          padding: 10px 14px;
          background: #211c19;
          color: #a89a90;
          font-size: 12px;
        }

        @media (max-width: 980px) {
          .jr-workspace {
            grid-template-columns: 1fr;
          }

          .jr-list__scroll {
            max-height: 280px;
            min-height: 220px;
          }

          .jr-detail__scroll {
            max-height: none;
          }

          .jr-fields {
            grid-template-columns: 1fr;
          }

          .jr-hero {
            grid-template-columns: 1fr;
            justify-items: start;
          }

          .jr-hero__stat {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
