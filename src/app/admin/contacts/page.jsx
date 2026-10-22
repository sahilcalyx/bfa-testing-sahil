"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, Calendar, ChevronLeft, ChevronRight, Mail, Phone, MessageSquare, X, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

const TYPE_FILTERS = [
    { id: "all", label: "All Enquiries" },
    { id: "general", label: "General & Support" },
    { id: "marketing", label: "Marketing & Press" },
];

export default function ContactsPage() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");
    const [selectedContact, setSelectedContact] = useState(null);
    const [stats, setStats] = useState({ total: 0, newToday: 0, marketing: 0, general: 0 });
    const [pagination, setPagination] = useState({
        totalCount: 0,
        totalPages: 0,
        currentPage: 1,
        limit: 10
    });

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchContacts(1);
        }, 300);
        return () => clearTimeout(delayDebounceFn);
    }, [search, startDate, endDate, typeFilter]);

    const buildParams = (page, limit = 10) => {
        const params = new URLSearchParams({
            page: String(page),
            limit: String(limit),
            search,
            startDate,
            endDate
        });
        return params;
    };

    const tagContacts = (list, source) =>
        (list || []).map((item) => ({
            ...item,
            source,
            enquiryLabel: source === "marketing" ? "Marketing & Press" : "General & Support",
        }));

    const fetchContacts = async (page = 1) => {
        setLoading(true);
        try {
            const limit = typeFilter === "all" ? 500 : 10;
            const [generalRes, marketingRes] = await Promise.all([
                axios.get(`/api/contact?${buildParams(typeFilter === "general" ? page : 1, typeFilter === "all" ? limit : 10).toString()}`),
                axios.get(`/api/contact/marketing?${buildParams(typeFilter === "marketing" ? page : 1, typeFilter === "all" ? limit : 10).toString()}`),
            ]);

            const generalTotal = generalRes.data.pagination?.totalCount || 0;
            const marketingTotal = marketingRes.data.pagination?.totalCount || 0;

            if (typeFilter === "general" && generalRes.data.response) {
                const tagged = tagContacts(generalRes.data.data, "general");
                setContacts(tagged);
                setPagination(generalRes.data.pagination);
                setStats({
                    total: generalTotal + marketingTotal,
                    newToday: tagged.filter((c) =>
                        new Date(c.createdAt).toDateString() === new Date().toDateString()
                    ).length,
                    general: generalTotal,
                    marketing: marketingTotal,
                });
            } else if (typeFilter === "marketing" && marketingRes.data.response) {
                const tagged = tagContacts(marketingRes.data.data, "marketing");
                setContacts(tagged);
                setPagination(marketingRes.data.pagination);
                setStats({
                    total: generalTotal + marketingTotal,
                    newToday: tagged.filter((c) =>
                        new Date(c.createdAt).toDateString() === new Date().toDateString()
                    ).length,
                    general: generalTotal,
                    marketing: marketingTotal,
                });
            } else {
                const generalList = generalRes.data.response
                    ? tagContacts(generalRes.data.data, "general")
                    : [];
                const marketingList = marketingRes.data.response
                    ? tagContacts(marketingRes.data.data, "marketing")
                    : [];

                const merged = [...generalList, ...marketingList].sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );

                const pageSize = 10;
                const totalCount = merged.length;
                const totalPages = Math.max(1, Math.ceil(totalCount / pageSize) || 1);
                const currentPage = Math.min(page, totalPages);
                const start = (currentPage - 1) * pageSize;

                setContacts(merged.slice(start, start + pageSize));
                setPagination({
                    totalCount,
                    totalPages,
                    currentPage,
                    limit: pageSize,
                });
                setStats({
                    total: generalTotal + marketingTotal,
                    newToday: merged.filter((c) =>
                        new Date(c.createdAt).toDateString() === new Date().toDateString()
                    ).length,
                    general: generalTotal,
                    marketing: marketingTotal,
                });
            }
        } catch (error) {
            console.error("Error fetching contacts:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (contact) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This enquiry will be permanently deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#635bff",
            cancelButtonColor: "#ff4d4d",
            confirmButtonText: "Yes, delete it!",
            background: "#fff",
            borderRadius: "20px",
        });

        if (result.isConfirmed) {
            try {
                const endpoint =
                    contact.source === "marketing"
                        ? `/api/contact/marketing?id=${contact._id}`
                        : `/api/contact?id=${contact._id}`;
                const response = await axios.delete(endpoint);
                if (response.data.response) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Record has been removed.",
                        icon: "success",
                        confirmButtonColor: "#635bff",
                    });
                    setSelectedContact(null);
                    fetchContacts(pagination.currentPage);
                }
            } catch (error) {
                Swal.fire("Error", "Failed to delete record.", "error");
            }
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            fetchContacts(newPage);
        }
    };

    const getInitials = (first, last) => {
        return `${first?.charAt(0) || ""}${last?.charAt(0) || ""}`.toUpperCase();
    };

    const TypeBadge = ({ source }) => {
        const isMarketing = source === "marketing";
        return (
            <span
                style={{
                    padding: "5px 10px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    background: isMarketing ? "#eff6ff" : "#f0fdf4",
                    color: isMarketing ? "#1d4ed8" : "#166534",
                    border: isMarketing ? "1px solid #bfdbfe" : "1px solid #dcfce7",
                    whiteSpace: "nowrap",
                }}
            >
                {isMarketing ? "Marketing & Press" : "General"}
            </span>
        );
    };

    return (
        <div style={{ animation: "fadeIn 0.5s ease-out", position: "relative", minHeight: "80vh" }}>
            {/* Header Section */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px" }}>
                <div>
                    <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#1a1f36", letterSpacing: "-0.5px", marginBottom: "4px" }}>Enquiries</h1>
                    <p style={{ color: "#697386", fontSize: "15px" }}>
                        General support and marketing / press contact requests in one place.
                    </p>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                    <div style={{ background: "#fff", padding: "10px 16px", borderRadius: "12px", border: "1px solid #e3e8ee", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                        <div style={{ fontSize: "11px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "0.5px" }}>Total</div>
                        <div style={{ fontSize: "20px", fontWeight: "800", color: "#1a1f36" }}>{stats.total}</div>
                    </div>
                    <div style={{ background: "#f0fdf4", padding: "10px 16px", borderRadius: "12px", border: "1px solid #dcfce7" }}>
                        <div style={{ fontSize: "11px", fontWeight: "700", color: "#166534", textTransform: "uppercase", letterSpacing: "0.5px" }}>General</div>
                        <div style={{ fontSize: "20px", fontWeight: "800", color: "#166534" }}>{stats.general}</div>
                    </div>
                    <div style={{ background: "#eff6ff", padding: "10px 16px", borderRadius: "12px", border: "1px solid #bfdbfe" }}>
                        <div style={{ fontSize: "11px", fontWeight: "700", color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.5px" }}>Marketing</div>
                        <div style={{ fontSize: "20px", fontWeight: "800", color: "#1d4ed8" }}>{stats.marketing}</div>
                    </div>
                    <div style={{ background: "#635bff10", padding: "10px 16px", borderRadius: "12px", border: "1px solid #635bff30" }}>
                        <div style={{ fontSize: "11px", fontWeight: "700", color: "#635bff", textTransform: "uppercase", letterSpacing: "0.5px" }}>Today</div>
                        <div style={{ fontSize: "20px", fontWeight: "800", color: "#635bff" }}>{stats.newToday}</div>
                    </div>
                </div>
            </div>

            {/* Type Filter Tabs */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                {TYPE_FILTERS.map((tab) => {
                    const active = typeFilter === tab.id;
                    return (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setTypeFilter(tab.id)}
                            style={{
                                padding: "10px 16px",
                                borderRadius: "10px",
                                border: active ? "1px solid #635bff" : "1px solid #e3e8ee",
                                background: active ? "#635bff" : "#fff",
                                color: active ? "#fff" : "#4f566b",
                                fontSize: "13px",
                                fontWeight: "700",
                                cursor: "pointer",
                            }}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Filters & Control Bar */}
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "24px",
                background: "#ffffff",
                padding: "16px",
                borderRadius: "16px",
                border: "1px solid #e3e8ee",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
            }}>
                <div style={{ flex: "1", position: "relative" }}>
                    <Search size={18} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#697386" }} />
                    <input
                        type="text"
                        placeholder="Search by name, email or message..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "12px 14px 12px 44px",
                            borderRadius: "12px",
                            border: "1px solid #e3e8ee",
                            fontSize: "14px",
                            outline: "none",
                            background: "#fcfcfd",
                            transition: "all 0.2s"
                        }}
                        onFocus={(e) => { e.target.style.borderColor = "#635bff"; e.target.style.background = "#fff"; e.target.style.boxShadow = "0 0 0 4px #635bff10"; }}
                        onBlur={(e) => { e.target.style.borderColor = "#e3e8ee"; e.target.style.background = "#fcfcfd"; e.target.style.boxShadow = "none"; }}
                    />
                </div>

                <div style={{ display: "flex", gap: "8px", alignItems: "center", background: "#f7f9fc", padding: "6px", borderRadius: "12px", border: "1px solid #e3e8ee" }}>
                    <Calendar size={16} style={{ marginLeft: "8px", color: "#697386" }} />
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        style={{ padding: "6px 8px", borderRadius: "8px", border: "none", background: "transparent", fontSize: "13px", color: "#1a1f36", outline: "none" }}
                    />
                    <span style={{ color: "#c1c7d0" }}>—</span>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        style={{ padding: "6px 8px", borderRadius: "8px", border: "none", background: "transparent", fontSize: "13px", color: "#1a1f36", outline: "none" }}
                    />
                </div>

                {(search || startDate || endDate) && (
                    <button
                        onClick={() => { setSearch(""); setStartDate(""); setEndDate(""); }}
                        style={{ padding: "10px 16px", background: "#fef2f2", color: "#b91c1c", border: "none", borderRadius: "10px", fontSize: "13px", fontWeight: "700", cursor: "pointer", transition: "all 0.2s" }}
                    >
                        Clear
                    </button>
                )}
            </div>

            {/* Data Table */}
            <div style={{ background: "#ffffff", borderRadius: "20px", border: "1px solid #e3e8ee", overflow: "hidden", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.04)" }}>
                <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0" }}>
                    <thead>
                        <tr style={{ background: "#fcfcfd" }}>
                            <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #e3e8ee" }}>Identity</th>
                            <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #e3e8ee" }}>Contact Info</th>
                            <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #e3e8ee" }}>Type</th>
                            <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #e3e8ee" }}>Date</th>
                            <th style={{ padding: "16px 24px", textAlign: "right", borderBottom: "1px solid #e3e8ee" }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            Array.from({ length: 5 }).map((_, i) => (
                                <tr key={i}><td colSpan="5" style={{ padding: "24px", borderBottom: "1px solid #f7f9fc" }}><div style={{ height: "40px", width: "100%", background: "#f7f9fc", borderRadius: "8px", animation: "pulse 1.5s infinite" }} /></td></tr>
                            ))
                        ) : contacts.length === 0 ? (
                            <tr><td colSpan="5" style={{ padding: "100px 24px", textAlign: "center", color: "#697386", fontSize: "15px" }}>No results matching your filters.</td></tr>
                        ) : (
                            contacts.map((contact) => (
                                <tr
                                    key={`${contact.source}-${contact._id}`}
                                    style={{ cursor: "pointer", transition: "all 0.2s" }}
                                    onClick={() => setSelectedContact(contact)}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#fcfcfd"}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                                >
                                    <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                            <div style={{
                                                width: "42px", height: "42px", borderRadius: "12px", background: "#eff2f7",
                                                display: "flex", alignItems: "center", justifyContent: "center", color: "#635bff", fontWeight: "700", fontSize: "14px",
                                                border: "1px solid #e3e8ee"
                                            }}>
                                                {getInitials(contact.firstName, contact.lastName)}
                                            </div>
                                            <div>
                                                <div style={{ fontSize: "15px", fontWeight: "700", color: "#1a1f36" }}>{contact.title || "N/A"} {contact.firstName} {contact.lastName}</div>
                                                <div style={{ fontSize: "12px", color: "#697386" }}>ID: {contact._id?.substring(0, 8)}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc" }}>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#4f566b" }}>
                                                <Mail size={14} style={{ color: "#697386" }} /> {contact.email}
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#4f566b" }}>
                                                <Phone size={14} style={{ color: "#697386" }} /> {contact.phone}
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc" }}>
                                        <TypeBadge source={contact.source} />
                                    </td>
                                    <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc", color: "#697386", fontSize: "14px" }}>
                                        {new Date(contact.createdAt).toLocaleDateString()}
                                    </td>
                                    <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc", textAlign: "right" }}>
                                        <div style={{ display: "inline-flex", color: "#c1c7d0" }}><ChevronRight size={20} /></div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                {/* Pagination */}
                <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fcfcfd" }}>
                    <div style={{ fontSize: "14px", color: "#697386" }}>Showing page <span style={{ color: "#1a1f36", fontWeight: "700" }}>{pagination.currentPage}</span> of <span style={{ color: "#1a1f36", fontWeight: "700" }}>{pagination.totalPages || 1}</span></div>
                    <div style={{ display: "flex", gap: "8px" }}>
                        <button
                            disabled={pagination.currentPage === 1}
                            onClick={(e) => { e.stopPropagation(); handlePageChange(pagination.currentPage - 1); }}
                            style={{ padding: "8px", borderRadius: "10px", border: "1px solid #e3e8ee", background: "#fff", cursor: pagination.currentPage === 1 ? "not-allowed" : "pointer" }}
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            disabled={pagination.currentPage >= pagination.totalPages}
                            onClick={(e) => { e.stopPropagation(); handlePageChange(pagination.currentPage + 1); }}
                            style={{ padding: "8px", borderRadius: "10px", border: "1px solid #e3e8ee", background: "#fff", cursor: pagination.currentPage >= pagination.totalPages ? "not-allowed" : "pointer" }}
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Side Detail Panel */}
            {selectedContact && (
                <div style={{ position: "fixed", top: 0, right: 0, width: "450px", height: "100vh", background: "#fff", boxShadow: "-10px 0 30px rgba(0,0,0,0.1)", zIndex: 1000, padding: "0", display: "flex", flexDirection: "column", animation: "slideIn 0.3s ease-out" }}>
                    <div style={{ padding: "30px", borderBottom: "1px solid #f7f9fc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#1a1f36", margin: 0 }}>Enquiry Details</h2>
                        <button onClick={() => setSelectedContact(null)} style={{ background: "#f7f9fc", border: "none", padding: "8px", borderRadius: "50%", cursor: "pointer", color: "#697386" }}>
                            <X size={20} />
                        </button>
                    </div>
                    <div style={{ padding: "40px 30px", flex: 1, overflowY: "auto" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
                            <div style={{ width: "64px", height: "64px", borderRadius: "20px", background: "#635bff10", color: "#635bff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: "800" }}>
                                {getInitials(selectedContact.firstName, selectedContact.lastName)}
                            </div>
                            <div>
                                <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1f36", margin: "0 0 4px 0" }}>
                                    {selectedContact.title || "N/A"} {selectedContact.firstName || "Unknown"} {selectedContact.lastName || ""}
                                </h3>
                                <p style={{ color: "#697386", margin: "0 0 8px 0" }}>{new Date(selectedContact.createdAt).toLocaleString()}</p>
                                <TypeBadge source={selectedContact.source} />
                            </div>
                        </div>

                        <div style={{ display: "grid", gap: "24px" }}>
                            <div style={{ background: "#fcfcfd", padding: "16px", borderRadius: "16px", border: "1px solid #e3e8ee" }}>
                                <div style={{ fontSize: "11px", fontWeight: "700", color: "#697386", textTransform: "uppercase", marginBottom: "8px" }}>Enquiry Type</div>
                                <div style={{ fontSize: "15px", fontWeight: "600", color: "#1a1f36" }}>
                                    {selectedContact.enquiryLabel}
                                </div>
                            </div>
                            <div style={{ background: "#fcfcfd", padding: "16px", borderRadius: "16px", border: "1px solid #e3e8ee" }}>
                                <div style={{ fontSize: "11px", fontWeight: "700", color: "#697386", textTransform: "uppercase", marginBottom: "8px" }}>Email Address</div>
                                <div style={{ fontSize: "15px", fontWeight: "600", color: "#1a1f36", display: "flex", alignItems: "center", gap: "8px" }}>
                                    <Mail size={16} /> {selectedContact.email}
                                </div>
                            </div>
                            <div style={{ background: "#fcfcfd", padding: "16px", borderRadius: "16px", border: "1px solid #e3e8ee" }}>
                                <div style={{ fontSize: "11px", fontWeight: "700", color: "#697386", textTransform: "uppercase", marginBottom: "8px" }}>Phone Number</div>
                                <div style={{ fontSize: "15px", fontWeight: "600", color: "#1a1f36", display: "flex", alignItems: "center", gap: "8px" }}>
                                    <Phone size={16} /> {selectedContact.phone}
                                </div>
                            </div>
                            <div style={{ background: "#fcfcfd", padding: "16px", borderRadius: "16px", border: "1px solid #e3e8ee" }}>
                                <div style={{ fontSize: "11px", fontWeight: "700", color: "#697386", textTransform: "uppercase", marginBottom: "12px" }}>Message Body</div>
                                <div style={{ fontSize: "15px", lineHeight: "1.7", color: "#1a1f36", background: "#fff", padding: "16px", borderRadius: "12px", border: "1px solid #e3e8ee", whiteSpace: "pre-wrap" }}>
                                    {selectedContact.message || "No message provided."}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: "30px", borderTop: "1px solid #f7f9fc", display: "flex", gap: "12px" }}>
                        <button
                            onClick={() => {
                                const subject =
                                    selectedContact.source === "marketing"
                                        ? `Re: Marketing / Press enquiry from ${selectedContact.firstName}`
                                        : `Re: Enquiry from ${selectedContact.firstName}`;
                                window.location.href = `mailto:${selectedContact.email}?subject=${encodeURIComponent(subject)}`;
                            }}
                            style={{ flex: 1, padding: "14px", borderRadius: "12px", background: "#635bff", color: "#fff", border: "none", fontWeight: "700", cursor: "pointer" }}
                        >
                            Reply via Email
                        </button>
                        <button
                            onClick={() => handleDelete(selectedContact)}
                            style={{ padding: "14px", borderRadius: "12px", background: "#fee2e2", border: "1px solid #fecaca", color: "#dc2626", cursor: "pointer" }}
                        >
                            <Trash2 size={20} />
                        </button>
                        <button style={{ padding: "14px", borderRadius: "12px", background: "#f7f9fc", border: "1px solid #e3e8ee", color: "#697386", cursor: "pointer" }}>
                            <MessageSquare size={20} />
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
                @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
            `}</style>
        </div>
    );
}
