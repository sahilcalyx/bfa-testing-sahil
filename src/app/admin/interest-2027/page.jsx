"use client";

import React, { useEffect, useState } from "react";
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
} from "lucide-react";
import Swal from "sweetalert2";

export default function Interest2027AdminPage() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [pagination, setPagination] = useState({
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
    limit: 10,
  });

  const fetchRecords = async (page = 1) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: "10",
        search,
      });
      const response = await axios.get(`/api/interest-2027?${params}`);
      if (response.data.response) {
        setRecords(response.data.data);
        setPagination(response.data.pagination);
      }
    } catch (error) {
      console.error("Failed to fetch Interest 2027 records:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchRecords(1), 300);
    return () => clearTimeout(timer);
  }, [search]);

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
      setRecords((prev) => prev.filter((r) => r._id !== id));
      if (selected?._id === id) setSelected(null);
      Swal.fire("Deleted", "Record removed.", "success");
      fetchRecords(pagination.currentPage);
    } catch {
      Swal.fire("Error", "Failed to delete record.", "error");
    }
  };

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
        <div className="rounded-xl border border-[#e3e8ee] bg-white px-4 py-2.5">
          <div className="text-[11px] font-bold uppercase tracking-wide text-[#697386]">
            Total
          </div>
          <div className="text-xl font-extrabold text-[#1a1f36]">
            {pagination.totalCount}
          </div>
        </div>
      </div>

      <div className="mb-6 rounded-2xl border border-[#e3e8ee] bg-white p-4">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#697386]"
          />
          <input
            type="text"
            placeholder="Search name, email, company…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-[10px] border border-[#e3e8ee] bg-[#fcfcfd] py-3 pl-[42px] pr-3.5 text-sm outline-none focus:border-[#c8102e]"
          />
        </div>
      </div>

      <div className="flex items-start gap-6">
        <div className="flex-1 overflow-hidden rounded-2xl border border-[#e3e8ee] bg-white">
          {loading ? (
            <div className="p-10 text-center text-[#697386]">Loading…</div>
          ) : records.length === 0 ? (
            <div className="p-10 text-center text-[#697386]">
              No interest registrations yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f7f9fc] text-left">
                    {["Name", "Email", "Company", "Job title", "Date", ""].map(
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
                      className="cursor-pointer hover:bg-[#fafafa]"
                    >
                      <td className="border-b border-[#eef1f6] px-4 py-3.5 text-sm text-[#1a1f36]">
                        {row.firstName} {row.lastName}
                      </td>
                      <td className="border-b border-[#eef1f6] px-4 py-3.5 text-sm">
                        {row.email}
                      </td>
                      <td className="border-b border-[#eef1f6] px-4 py-3.5 text-sm">
                        {row.companyName || "—"}
                      </td>
                      <td className="border-b border-[#eef1f6] px-4 py-3.5 text-sm">
                        {row.jobTitle || "—"}
                      </td>
                      <td className="border-b border-[#eef1f6] px-4 py-3.5 text-sm">
                        {new Date(row.createdAt).toLocaleDateString()}
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
            <div className="flex justify-end gap-2 border-t border-[#e3e8ee] p-4">
              <button
                type="button"
                disabled={pagination.currentPage <= 1}
                onClick={() => fetchRecords(pagination.currentPage - 1)}
                className="rounded-lg border border-[#e3e8ee] bg-white p-2 disabled:opacity-40"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="self-center text-[13px] text-[#697386]">
                {pagination.currentPage} / {pagination.totalPages}
              </span>
              <button
                type="button"
                disabled={pagination.currentPage >= pagination.totalPages}
                onClick={() => fetchRecords(pagination.currentPage + 1)}
                className="rounded-lg border border-[#e3e8ee] bg-white p-2 disabled:opacity-40"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        {selected && (
          <aside className="sticky top-6 w-[340px] rounded-2xl border border-[#e3e8ee] bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="m-0 text-lg font-bold">Details</h2>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="border-0 bg-transparent"
              >
                <X size={18} />
              </button>
            </div>
            <p className="mb-2 text-base font-bold">
              {selected.firstName} {selected.lastName}
            </p>
            <p className="mb-2 flex items-center gap-2 text-sm text-[#4f566b]">
              <Mail size={14} /> {selected.email}
            </p>
            <p className="mb-2 flex items-center gap-2 text-sm text-[#4f566b]">
              <Phone size={14} /> {selected.phone}
            </p>
            <p className="mb-2 flex items-center gap-2 text-sm text-[#4f566b]">
              <Building2 size={14} /> {selected.companyName || "—"}
            </p>
            <p className="mb-2 flex items-center gap-2 text-sm text-[#4f566b]">
              <Briefcase size={14} /> {selected.jobTitle || "—"}
            </p>
            <p className="mb-0 flex items-center gap-2 text-sm text-[#4f566b]">
              <MapPin size={14} />{" "}
              {[selected.city, selected.country].filter(Boolean).join(", ") ||
                "—"}
            </p>
          </aside>
        )}
      </div>
    </div>
  );
}
