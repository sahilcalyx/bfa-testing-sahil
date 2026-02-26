"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, Calendar, ChevronLeft, ChevronRight, Mail, Phone, Building2, X, Briefcase, Globe, Award, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

export default function SponsorsPage() {
    const [sponsors, setSponsors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selectedSponsor, setSelectedSponsor] = useState(null);
    const [pagination, setPagination] = useState({
        totalCount: 0,
        totalPages: 0,
        currentPage: 1,
        limit: 10
    });

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchSponsors(1);
        }, 300);
        return () => clearTimeout(delayDebounceFn);
    }, [search, startDate, endDate]);

    const fetchSponsors = async (page = 1) => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                page,
                limit: 10,
                search,
                startDate,
                endDate
            });
            const response = await axios.get(`/api/sponsor?${params.toString()}`);
            if (response.data.response) {
                setSponsors(response.data.data);
                setPagination(response.data.pagination);
            }
        } catch (error) {
            console.error("Error fetching sponsors:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "This partner profile will be permanently deleted.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#635bff',
            cancelButtonColor: '#ff4d4d',
            confirmButtonText: 'Yes, delete it!',
            background: '#fff',
            borderRadius: '20px'
        });

        if (result.isConfirmed) {
            try {
                const response = await axios.delete(`/api/sponsor?id=${id}`);
                if (response.data.response) {
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Partner record removed.',
                        icon: 'success',
                        confirmButtonColor: '#635bff'
                    });
                    setSelectedSponsor(null);
                    fetchSponsors(pagination.currentPage);
                }
            } catch (error) {
                Swal.fire('Error', 'Failed to delete record.', 'error');
            }
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            fetchSponsors(newPage);
        }
    };

    const getTierColor = (tier) => {
        const t = tier?.toLowerCase() || "";
        if (t.includes("platinum")) return { bg: "#f8fafc", text: "#475569", border: "#e2e8f0", icon: "#94a3b8" };
        if (t.includes("gold")) return { bg: "#fffbeb", text: "#92400e", border: "#fef3c7", icon: "#f59e0b" };
        if (t.includes("silver")) return { bg: "#f1f5f9", text: "#334155", border: "#e2e8f0", icon: "#64748b" };
        return { bg: "#f0efff", text: "#635bff", border: "#e0deff", icon: "#635bff" };
    };

    const renderPaginationNumbers = () => {
        const pages = [];
        const maxVisible = 5;
        let start = Math.max(1, pagination.currentPage - 2);
        let end = Math.min(pagination.totalPages, start + maxVisible - 1);

        if (end - start < maxVisible - 1) {
            start = Math.max(1, end - maxVisible + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    style={{
                        padding: "8px 14px",
                        margin: "0 4px",
                        borderRadius: "8px",
                        border: "1px solid #e3e8ee",
                        backgroundColor: i === pagination.currentPage ? "#635bff" : "#fff",
                        color: i === pagination.currentPage ? "#fff" : "#4f566b",
                        fontWeight: "600",
                        fontSize: "14px",
                        cursor: "pointer",
                        transition: "all 0.2s"
                    }}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div style={{ animation: "fadeIn 0.5s ease-out", position: "relative", minHeight: "80vh" }}>
            {/* Header Section */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px" }}>
                <div>
                    <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#1a1f36", letterSpacing: "-0.5px", marginBottom: "4px" }}>Partners & Sponsors</h1>
                    <p style={{ color: "#697386", fontSize: "15px" }}>Manage your relationships with event partners and corporate sponsors.</p>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                    <div style={{ background: "#fff", padding: "10px 16px", borderRadius: "12px", border: "1px solid #e3e8ee", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                        <div style={{ fontSize: "11px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "0.5px" }}>Active Partners</div>
                        <div style={{ fontSize: "20px", fontWeight: "800", color: "#1a1f36" }}>{pagination.totalCount}</div>
                    </div>
                </div>
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
                        placeholder="Search by company, representative or email..."
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

                <div style={{ background: "#f7f9fc", padding: "6px", borderRadius: "12px", border: "1px solid #e3e8ee", display: "flex", alignItems: "center" }}>
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
                        style={{
                            padding: "8px 16px",
                            background: "#f7f9fc",
                            border: "1px solid #e3e8ee",
                            borderRadius: "10px",
                            color: "#4f566b",
                            fontSize: "13px",
                            fontWeight: "600",
                            cursor: "pointer"
                        }}
                    >
                        Clear Filters
                    </button>
                )}
            </div>

            {/* Data Table */}
            <div style={{ background: "#ffffff", borderRadius: "20px", border: "1px solid #e3e8ee", overflow: "hidden", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.04)" }}>
                <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0" }}>
                    <thead>
                        <tr style={{ background: "#fcfcfd" }}>
                            <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #e3e8ee" }}>Entity & Brand</th>
                            <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #e3e8ee" }}>Representative</th>
                            <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #e3e8ee" }}>Sponsorship Tier</th>
                            <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #e3e8ee" }}>Communication</th>
                            <th style={{ padding: "16px 24px", textAlign: "right", borderBottom: "1px solid #e3e8ee" }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            Array.from({ length: 5 }).map((_, i) => (
                                <tr key={i}><td colSpan="5" style={{ padding: "24px", borderBottom: "1px solid #f7f9fc" }}><div style={{ height: "40px", width: "100%", background: "#f7f9fc", borderRadius: "8px", animation: "pulse 1.5s infinite" }} /></td></tr>
                            ))
                        ) : sponsors.length === 0 ? (
                            <tr><td colSpan="5" style={{ padding: "100px 24px", textAlign: "center", color: "#697386", fontSize: "15px" }}>No sponsors found.</td></tr>
                        ) : (
                            sponsors.map((sponsor) => {
                                const tierStyle = getTierColor(sponsor.sponsorship);
                                return (
                                    <tr
                                        key={sponsor._id}
                                        style={{ cursor: "pointer", transition: "all 0.2s" }}
                                        onClick={() => setSelectedSponsor(sponsor)}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#fcfcfd"}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                                    >
                                        <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                                <div style={{
                                                    width: "42px", height: "42px", borderRadius: "12px", background: "#f8fafc",
                                                    display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b",
                                                    border: "1px solid #e2e8f0"
                                                }}>
                                                    <Building2 size={20} />
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#1a1f36" }}>{sponsor.companyName}</div>
                                                    <div style={{ fontSize: "12px", color: "#697386" }}>Registered: {new Date(sponsor.createdAt).toLocaleDateString()}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc" }}>
                                            <div style={{ fontSize: "14px", fontWeight: "600", color: "#1a1f36" }}>{sponsor.title || "N/A"} {sponsor.firstName} {sponsor.lastName}</div>
                                            <div style={{ fontSize: "12px", color: "#697386" }}>{sponsor.role}</div>
                                        </td>
                                        <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc" }}>
                                            <span style={{
                                                padding: "6px 12px", borderRadius: "10px", fontSize: "11px", fontWeight: "800",
                                                textTransform: "uppercase", background: tierStyle.bg, color: tierStyle.text, border: `1px solid ${tierStyle.border}`,
                                                display: "inline-flex", alignItems: "center", gap: "6px"
                                            }}>
                                                <Award size={12} /> {sponsor.sponsorship || "General"}
                                            </span>
                                        </td>
                                        <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc" }}>
                                            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#4f566b" }}>
                                                    <Mail size={14} style={{ color: "#94a3b8" }} /> {sponsor.email}
                                                </div>
                                                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#4f566b" }}>
                                                    <Phone size={14} style={{ color: "#94a3b8" }} /> {sponsor.phoneNo}
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc", textAlign: "right" }}>
                                            <ChevronRight size={20} style={{ color: "#cbd5e1" }} />
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>

                {/* Pagination */}
                <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fcfcfd" }}>
                    <div style={{ fontSize: "14px", color: "#697386" }}>Showing page <span style={{ color: "#1a1f36", fontWeight: "700" }}>{pagination.currentPage}</span> of <span style={{ color: "#1a1f36", fontWeight: "700" }}>{pagination.totalPages}</span></div>
                    <div style={{ display: "flex", gap: "8px" }}>
                        <button
                            disabled={pagination.currentPage === 1}
                            onClick={(e) => { e.stopPropagation(); handlePageChange(pagination.currentPage - 1); }}
                            style={{ padding: "8px", borderRadius: "10px", border: "1px solid #e3e8ee", background: "#fff", cursor: pagination.currentPage === 1 ? "not-allowed" : "pointer" }}
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            disabled={pagination.currentPage === pagination.totalPages}
                            onClick={(e) => { e.stopPropagation(); handlePageChange(pagination.currentPage + 1); }}
                            style={{ padding: "8px", borderRadius: "10px", border: "1px solid #e3e8ee", background: "#fff", cursor: pagination.currentPage === pagination.totalPages ? "not-allowed" : "pointer" }}
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Side Detail Panel */}
            {selectedSponsor && (
                <div style={{ position: "fixed", top: 0, right: 0, width: "500px", height: "100vh", background: "#fff", boxShadow: "-10px 0 30px rgba(0,0,0,0.1)", zIndex: 1000, display: "flex", flexDirection: "column", animation: "slideIn 0.3s ease-out" }}>
                    <div style={{ padding: "30px", borderBottom: "1px solid #f7f9fc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#1a1f36", margin: 0 }}>Partner Profile</h2>
                        <button onClick={() => setSelectedSponsor(null)} style={{ background: "#f7f9fc", border: "none", padding: "8px", borderRadius: "50%", cursor: "pointer", color: "#64748b" }}>
                            <X size={20} />
                        </button>
                    </div>
                    <div style={{ padding: "40px", flex: 1, overflowY: "auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "40px" }}>
                            <div style={{ width: "80px", height: "80px", borderRadius: "24px", background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#64748b" }}>
                                <Building2 size={40} />
                            </div>
                            <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#1a1f36", margin: "0 0 8px 0" }}>{selectedSponsor.companyName}</h3>
                            <span style={{ padding: "6px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: "800", background: getTierColor(selectedSponsor.sponsorship).bg, color: getTierColor(selectedSponsor.sponsorship).text, border: `1px solid ${getTierColor(selectedSponsor.sponsorship).border}` }}>
                                {selectedSponsor.sponsorship || "General Partner"}
                            </span>
                        </div>

                        <div style={{ display: "grid", gap: "20px" }}>
                            <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
                                <div style={{ fontSize: "11px", fontWeight: "800", color: "#64748b", textTransform: "uppercase", marginBottom: "16px", letterSpacing: "1px" }}>Primary Contact</div>
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                                    <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e2e8f0", color: "#635bff" }}>
                                        <Briefcase size={18} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "15px", fontWeight: "700", color: "#1a1f36" }}>{selectedSponsor.title || "N/A"} {selectedSponsor.firstName} {selectedSponsor.lastName}</div>
                                        <div style={{ fontSize: "13px", color: "#64748b" }}>{selectedSponsor.role || "No Role"}</div>
                                    </div>
                                </div>
                                <div style={{ display: "grid", gap: "8px", marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #e2e8f0" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#475569" }}><Mail size={16} /> {selectedSponsor.email}</div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#475569" }}><Phone size={16} /> {selectedSponsor.phoneNo}</div>
                                </div>
                            </div>

                            <div style={{ background: "#fff", padding: "20px", borderRadius: "20px", border: "1px solid #e3e8ee" }}>
                                <div style={{ fontSize: "11px", fontWeight: "800", color: "#697386", textTransform: "uppercase", marginBottom: "12px" }}>Internal Records</div>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", marginBottom: "8px" }}>
                                    <span style={{ color: "#697386" }}>Partner ID</span>
                                    <span style={{ fontWeight: "700", color: "#1a1f36" }}>#{selectedSponsor._id?.substring(0, 12)}</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                                    <span style={{ color: "#697386" }}>Joined Date</span>
                                    <span style={{ fontWeight: "700", color: "#1a1f36" }}>{new Date(selectedSponsor.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>

                            <div style={{ background: "#fcfcfd", padding: "16px", borderRadius: "16px", border: "1px solid #e3e8ee" }}>
                                <div style={{ fontSize: "11px", fontWeight: "700", color: "#697386", textTransform: "uppercase", marginBottom: "12px" }}>How can we help?</div>
                                <div style={{ fontSize: "14px", lineHeight: "1.7", color: "#1a1f36", background: "#fff", padding: "16px", borderRadius: "12px", border: "1px solid #e3e8ee" }}>
                                    {selectedSponsor.companyInfo || "No additional information provided."}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: "30px", borderTop: "1px solid #f7f9fc", display: "flex", gap: "12px" }}>
                        <button style={{ flex: 1, padding: "16px", borderRadius: "16px", background: "#1a1f36", color: "#fff", border: "none", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                            <Globe size={18} /> Visit Website
                        </button>
                        <button
                            onClick={() => window.location.href = `mailto:${selectedSponsor.email}?subject=Regarding Sponsorship: ${selectedSponsor.companyName}`}
                            style={{ flex: 1, padding: "16px", borderRadius: "16px", background: "#635bff", color: "#fff", border: "none", fontWeight: "700", cursor: "pointer" }}
                        >
                            Contact Partner
                        </button>
                        <button
                            onClick={() => handleDelete(selectedSponsor._id)}
                            style={{ padding: "16px", borderRadius: "16px", background: "#fee2e2", border: "1px solid #fecaca", color: "#dc2626", cursor: "pointer" }}
                        >
                            <Trash2 size={20} />
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
