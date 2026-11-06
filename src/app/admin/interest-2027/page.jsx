"use client";

import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Trash2,
  X,
  Building2,
  Briefcase,
  MapPin,
  Download,
  Calendar,
  Tag,
  RefreshCw,
} from "lucide-react";
import Swal from "sweetalert2";
import {
  INTEREST_2027_OPTIONS,
  interest2027Label,
} from "@/lib/interest2027Options";

const SOURCE_LABELS = {
  page: "Landing page",
  "home-section": "Home section",
  "announcement-bar": "Announcement bar",
};

const formatDate = (value) =>
  value
    ? new Date(value).toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "—";

const displayName = (row) =>
  row.fullName || `${row.firstName || ""} ${row.lastName || ""}`.trim() || "—";

// Compact labels keep table chips on one line; full labels stay in the details panel and tooltips.
const SHORT_LABELS = {
  attending: "Attending",
  nominations: "Nominations",
  sponsorship: "Sponsorship",
  partnership: "Partnership",
  media: "Media & marketing",
  speaker: "Speaker",
  "discussion-panel": "Panel",
  other: "Other",
};
const TABLE_CHIP_LIMIT = 2;
const LEGACY_INTERESTS = ["partnership", "media"];

const InterestChip = ({ value, small }) => (
  <span
    title={interest2027Label(value)}
    className={`inline-flex items-center whitespace-nowrap rounded-full border border-[#f3c5cd] bg-[#fdecef] font-semibold leading-tight text-[#9b0c24] ${
      small ? "px-2 py-1 text-[11px]" : "px-2.5 py-1 text-xs"
    }`}
  >
    {small ? SHORT_LABELS[value] || interest2027Label(value) : interest2027Label(value)}
  </span>
);

export default function Interest2027AdminPage() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [search, setSearch] = useState("");
  const [interest, setInterest] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selected, setSelected] = useState(null);
  const [interestCounts, setInterestCounts] = useState({});
  const [pagination, setPagination] = useState({
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
    limit: 10,
  });

  const buildParams = useCallback(
    (extra = {}) => {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      if (interest) params.set("interest", interest);
      if (startDate) params.set("startDate", startDate);
      if (endDate) params.set("endDate", endDate);
      Object.entries(extra).forEach(([k, v]) => params.set(k, String(v)));
      return params;
    },
    [search, interest, startDate, endDate]
  );

  const fetchRecords = useCallback(
    async (page = 1) => {
      setLoading(true);
      try {
        const params = buildParams({ page, limit: 10 });
        const response = await axios.get(`/api/interest-2027?${params}`);
        if (response.data.response) {
          setRecords(response.data.data);
          setPagination(response.data.pagination);
          setInterestCounts(response.data.interestCounts || {});
        }
      } catch (error) {
        console.error("Failed to fetch Interest 2027 records:", error);
      } finally {
        setLoading(false);
      }
    },
    [buildParams]
  );

  useEffect(() => {
    const timer = setTimeout(() => fetchRecords(1), 300);
    return () => clearTimeout(timer);
  }, [fetchRecords]);

  const handleExport = async () => {
    setExporting(true);
    try {
      const params = buildParams({ format: "csv" });
      const response = await axios.get(`/api/interest-2027?${params}`, {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(response.data);
      const link = document.createElement("a");
      const stamp = new Date().toISOString().slice(0, 10);
      link.href = url;
      link.download = `bfa-2027-interest-${stamp}.csv`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("CSV export failed:", error);
      Swal.fire("Error", "Could not export the CSV. Please try again.", "error");
    } finally {
      setExporting(false);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete this record?",
      text: "This cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#c8102e",
      cancelButtonColor: "#697386",
      confirmButtonText: "Yes, delete",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`/api/interest-2027?id=${id}`);
      if (selected?._id === id) setSelected(null);
      Swal.fire("Deleted", "Record removed.", "success");
      fetchRecords(pagination.currentPage);
    } catch {
      Swal.fire("Error", "Failed to delete record.", "error");
    }
  };

  const clearFilters = () => {
    setSearch("");
    setInterest("");
    setStartDate("");
    setEndDate("");
  };

  const hasFilters = search || interest || startDate || endDate;

  return (
    <div className="min-h-[80vh]">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="mb-1 text-[28px] font-extrabold tracking-tight text-[#1a1f36]">
            Interest 2027
          </h1>
          <p className="m-0 text-[15px] text-[#697386]">
            Early interest registrations for Brit FinTech Awards 2027.
          </p>
        </div>
        <div className="flex flex-wrap items-stretch gap-3">
          <div className="rounded-xl border border-[#e3e8ee] bg-white px-4 py-2.5">
            <div className="text-[11px] font-bold uppercase tracking-wide text-[#697386]">
              {hasFilters ? "Matching" : "Total"}
            </div>
            <div className="text-xl font-extrabold text-[#1a1f36]">
              {pagination.totalCount}
            </div>
          </div>
          <button
            type="button"
            onClick={handleExport}
            disabled={exporting || pagination.totalCount === 0}
            className="inline-flex items-center gap-2 rounded-xl border border-[#c8102e] bg-[#c8102e] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#a30d26] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {exporting ? (
              <RefreshCw size={16} className="animate-spin" />
            ) : (
              <Download size={16} />
            )}
            Export CSV
          </button>
        </div>
      </div>

      <div className="mb-6 rounded-2xl border border-[#e3e8ee] bg-white p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-[240px] flex-1">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#697386]"
            />
            <input
              type="text"
              placeholder="Search name, email, company, job title…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-[10px] border border-[#e3e8ee] bg-[#fcfcfd] py-3 pl-[42px] pr-3.5 text-sm outline-none focus:border-[#c8102e]"
            />
          </div>
          <div className="flex items-center gap-2 rounded-[10px] border border-[#e3e8ee] bg-[#fcfcfd] px-3 py-2">
            <Calendar size={16} className="text-[#697386]" />
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-transparent text-sm outline-none"
              aria-label="From date"
            />
            <span className="text-[#697386]">–</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-transparent text-sm outline-none"
              aria-label="To date"
            />
          </div>
          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1 rounded-[10px] border border-[#e3e8ee] bg-white px-3 py-2.5 text-sm font-semibold text-[#697386] hover:text-[#1a1f36]"
            >
              <X size={14} /> Clear
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-[#697386]">
            <Tag size={12} /> Interest
          </span>
          <button
            type="button"
            onClick={() => setInterest("")}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
              !interest
                ? "border-[#1a1f36] bg-[#1a1f36] text-white"
                : "border-[#e3e8ee] bg-white text-[#4f566b] hover:border-[#1a1f36]"
            }`}
          >
            All
          </button>
          {INTEREST_2027_OPTIONS.filter(
            // Retired options only appear once older submissions use them.
            (opt) => !LEGACY_INTERESTS.includes(opt.value) || interestCounts[opt.value] || interest === opt.value
          ).map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setInterest(interest === opt.value ? "" : opt.value)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition ${
                interest === opt.value
                  ? "border-[#c8102e] bg-[#c8102e] text-white"
                  : "border-[#e3e8ee] bg-white text-[#4f566b] hover:border-[#c8102e]"
              }`}
            >
              {opt.label}
              <span
                className={`rounded-full px-1.5 text-[10px] ${
                  interest === opt.value
                    ? "bg-white/20 text-white"
                    : "bg-[#f1f3f7] text-[#697386]"
                }`}
              >
                {interestCounts[opt.value] || 0}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-start gap-6">
        <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-[#e3e8ee] bg-white">
          {loading ? (
            <div className="p-10 text-center text-[#697386]">Loading…</div>
          ) : records.length === 0 ? (
            <div className="p-10 text-center text-[#697386]">
              {hasFilters
                ? "No registrations match these filters."
                : "No interest registrations yet."}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f7f9fc] text-left">
                    {["Name", "Company", "Email", "Interests", "Registered", ""].map(
                      (h) => (
                        <th
                          key={h || "actions"}
                          className="border-b border-[#e3e8ee] px-4 py-3.5 text-[11px] uppercase tracking-wide text-[#697386]"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {records.map((row) => (
                    <tr
                      key={row._id}
                      onClick={() => setSelected(row)}
                      className={`cursor-pointer hover:bg-[#fafafa] ${
                        selected?._id === row._id ? "bg-[#fdf6f7]" : ""
                      }`}
                    >
                      <td className="border-b border-[#eef1f6] px-4 py-3.5 text-sm">
                        <div className="font-semibold text-[#1a1f36]">
                          {displayName(row)}
                        </div>
                        <div className="text-xs text-[#697386]">
                          {row.jobTitle || "—"}
                        </div>
                      </td>
                      <td className="border-b border-[#eef1f6] px-4 py-3.5 text-sm text-[#1a1f36]">
                        {row.companyName || "—"}
                      </td>
                      <td className="border-b border-[#eef1f6] px-4 py-3.5 text-sm text-[#4f566b]">
                        {row.email}
                      </td>
                      <td className="border-b border-[#eef1f6] px-4 py-3.5">
                        <div className="flex min-w-[170px] max-w-[240px] flex-wrap items-center gap-1">
                          {(row.interests || []).length === 0 ? (
                            <span className="text-sm text-[#697386]">—</span>
                          ) : (
                            <>
                              {row.interests.slice(0, TABLE_CHIP_LIMIT).map((v) => (
                                <InterestChip key={v} value={v} small />
                              ))}
                              {row.interests.length > TABLE_CHIP_LIMIT && (
                                <span
                                  className="whitespace-nowrap rounded-full bg-[#f1f3f7] px-2 py-1 text-[11px] font-bold leading-tight text-[#697386]"
                                  title={row.interests.slice(TABLE_CHIP_LIMIT).map(interest2027Label).join(", ")}
                                >
                                  +{row.interests.length - TABLE_CHIP_LIMIT}
                                </span>
                              )}
                            </>
                          )}
                        </div>
                      </td>
                      <td className="whitespace-nowrap border-b border-[#eef1f6] px-4 py-3.5 text-sm text-[#4f566b]">
                        {new Date(row.createdAt).toLocaleDateString("en-GB")}
                        {row.submissionCount > 1 && (
                          <span
                            className="ml-2 rounded-full bg-[#f1f3f7] px-1.5 py-0.5 text-[10px] font-bold text-[#697386]"
                            title="Submitted more than once"
                          >
                            ×{row.submissionCount}
                          </span>
                        )}
                      </td>
                      <td className="border-b border-[#eef1f6] px-4 py-3.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(row._id);
                          }}
                          className="border-0 bg-transparent p-1.5 text-[#c8102e]"
                          aria-label="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-between gap-2 border-t border-[#e3e8ee] p-4">
              <span className="text-[13px] text-[#697386]">
                {pagination.totalCount} registrations
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={pagination.currentPage <= 1}
                  onClick={() => fetchRecords(pagination.currentPage - 1)}
                  className="rounded-lg border border-[#e3e8ee] bg-white p-2 disabled:opacity-40"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-[13px] text-[#697386]">
                  {pagination.currentPage} / {pagination.totalPages}
                </span>
                <button
                  type="button"
                  disabled={pagination.currentPage >= pagination.totalPages}
                  onClick={() => fetchRecords(pagination.currentPage + 1)}
                  className="rounded-lg border border-[#e3e8ee] bg-white p-2 disabled:opacity-40"
                  aria-label="Next page"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {selected && (
          <aside className="sticky top-6 w-[360px] shrink-0 rounded-2xl border border-[#e3e8ee] bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="m-0 text-lg font-bold">Details</h2>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="border-0 bg-transparent"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <p className="mb-1 text-base font-bold text-[#1a1f36]">
              {displayName(selected)}
            </p>
            <p className="mb-4 flex items-center gap-2 text-sm text-[#4f566b]">
              <Briefcase size={14} /> {selected.jobTitle || "—"}
            </p>
            <p className="mb-2 flex items-center gap-2 text-sm text-[#4f566b]">
              <Building2 size={14} /> {selected.companyName || "—"}
            </p>
            <p className="mb-2 flex items-center gap-2 text-sm text-[#4f566b]">
              <Mail size={14} />
              <a href={`mailto:${selected.email}`} className="text-[#1a1f36]">
                {selected.email}
              </a>
            </p>
            <p className="mb-2 flex items-center gap-2 text-sm text-[#4f566b]">
              <Phone size={14} />
              <a href={`tel:${selected.phone}`} className="text-[#1a1f36]">
                {selected.phone}
              </a>
            </p>
            <p className="mb-4 flex items-center gap-2 text-sm text-[#4f566b]">
              <MapPin size={14} />{" "}
              {[selected.city, selected.country].filter(Boolean).join(", ") ||
                "—"}
            </p>

            <div className="mb-4 border-t border-[#eef1f6] pt-4">
              <div className="mb-2 text-[11px] font-bold uppercase tracking-wide text-[#697386]">
                Interested in
              </div>
              <div className="flex flex-wrap gap-1.5">
                {(selected.interests || []).length === 0 ? (
                  <span className="text-sm text-[#697386]">—</span>
                ) : (
                  selected.interests.map((v) => <InterestChip key={v} value={v} />)
                )}
              </div>
              {selected.otherInterest && (
                <p className="mt-3 rounded-lg bg-[#f7f9fc] p-3 text-sm text-[#4f566b]">
                  “{selected.otherInterest}”
                </p>
              )}
            </div>

            <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-xs text-[#697386]">
              <dt className="font-semibold">Source</dt>
              <dd className="m-0 text-[#1a1f36]">
                {SOURCE_LABELS[selected.source] || selected.source || "—"}
              </dd>
              <dt className="font-semibold">Submissions</dt>
              <dd className="m-0 text-[#1a1f36]">{selected.submissionCount || 1}</dd>
              <dt className="font-semibold">Registered</dt>
              <dd className="m-0 text-[#1a1f36]">{formatDate(selected.createdAt)}</dd>
              <dt className="font-semibold">Last updated</dt>
              <dd className="m-0 text-[#1a1f36]">{formatDate(selected.updatedAt)}</dd>
            </dl>
          </aside>
        )}
      </div>
    </div>
  );
}
