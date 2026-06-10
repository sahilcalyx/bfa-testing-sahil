"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, Calendar, ChevronLeft, ChevronRight, Mail, Phone, Building2, X, Briefcase, Globe, Award, Trash2, FileDown, CheckCircle, AlertTriangle, HelpCircle } from "lucide-react";
import Swal from "sweetalert2";

export default function NominationsPage() {
    const [nominations, setNominations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");
    const [selectedNomination, setSelectedNomination] = useState(null);
    const [pagination, setPagination] = useState({
        totalCount: 0,
        totalPages: 0,
        currentPage: 1,
        limit: 10
    });
    const [sendingEmail, setSendingEmail] = useState(false);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchNominations(1);
        }, 300);
        return () => clearTimeout(delayDebounceFn);
    }, [search, startDate, endDate, paymentStatus]);

    const fetchNominations = async (page = 1) => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                page,
                limit: 10,
                search,
                startDate,
                endDate,
                paymentStatus
            });
            const response = await axios.get(`/api/nomination?${params.toString()}`);
            if (response.data.response) {
                setNominations(response.data.data);
                setPagination(response.data.pagination);
            }
        } catch (error) {
            console.error("Error fetching nominations:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "This nomination record will be permanently deleted.",
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
                const response = await axios.delete(`/api/nomination?id=${id}`);
                if (response.data.response) {
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Nomination record removed.',
                        icon: 'success',
                        confirmButtonColor: '#635bff'
                    });
                    setSelectedNomination(null);
                    fetchNominations(pagination.currentPage);
                }
            } catch (error) {
                Swal.fire('Error', 'Failed to delete nomination.', 'error');
            }
        }
    };

    const handleUpdateStatus = async (id, status) => {
        try {
            const response = await axios.patch("/api/nomination", {
                id,
                paymentStatus: status
            });
            if (response.data.response) {
                Swal.fire({
                    title: 'Updated!',
                    text: `Payment status updated to ${status}.`,
                    icon: 'success',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                });
                
                // Update selected nomination detail view dynamically
                if (selectedNomination && selectedNomination._id === id) {
                    setSelectedNomination({ ...selectedNomination, paymentStatus: status });
                }
                
                // Refresh list
                fetchNominations(pagination.currentPage);
            }
        } catch (error) {
            Swal.fire('Error', 'Failed to update payment status.', 'error');
        }
    };

    const handleSendEmail = async (id) => {
        setSendingEmail(true);
        try {
            const response = await axios.post("/api/nomination/email", { id });
            if (response.data.response) {
                Swal.fire({
                    title: 'Email Sent!',
                    text: 'The welcome confirmation email has been sent successfully.',
                    icon: 'success',
                    confirmButtonColor: '#635bff'
                });
            } else {
                Swal.fire('Error', response.data.data || 'Failed to send email.', 'error');
            }
        } catch (error) {
            Swal.fire('Error', error.response?.data?.data || 'Failed to send email.', 'error');
        } finally {
            setSendingEmail(false);
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            fetchNominations(newPage);
        }
    };

    const getStatusStyle = (status) => {
        const s = status?.toLowerCase() || "";
        if (s === "paid") {
            return { bg: "#ecfdf5", text: "#047857", border: "#a7f3d0", icon: CheckCircle };
        }
        if (s === "failed") {
            return { bg: "#fef2f2", text: "#b91c1c", border: "#fca5a5", icon: AlertTriangle };
        }
        return { bg: "#fffbeb", text: "#b45309", border: "#fde68a", icon: HelpCircle };
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
                    <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#1a1f36", letterSpacing: "-0.5px", marginBottom: "4px" }}>Award Nominations</h1>
                    <p style={{ color: "#697386", fontSize: "15px" }}>Manage and view submissions, documents, and payments for the Brit Fintech Awards.</p>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                    <div style={{ background: "#fff", padding: "10px 16px", borderRadius: "12px", border: "1px solid #e3e8ee", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                        <div style={{ fontSize: "11px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "0.5px" }}>Total Nominations</div>
                        <div style={{ fontSize: "20px", fontWeight: "800", color: "#1a1f36" }}>{pagination.totalCount}</div>
                    </div>
                </div>
            </div>

            {/* Filters & Control Bar */}
            <div style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "24px",
                background: "#ffffff",
                padding: "16px",
                borderRadius: "16px",
                border: "1px solid #e3e8ee",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
            }}>
                <div style={{ flex: "1", minWidth: "250px", position: "relative" }}>
                    <Search size={18} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#697386" }} />
                    <input
                        type="text"
                        placeholder="Search by company, representative, email or category..."
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

                <div>
                    <select
                        value={paymentStatus}
                        onChange={(e) => setPaymentStatus(e.target.value)}
                        style={{
                            padding: "12px 16px",
                            borderRadius: "12px",
                            border: "1px solid #e3e8ee",
                            fontSize: "13px",
                            color: "#1a1f36",
                            outline: "none",
                            background: "#f7f9fc",
                            cursor: "pointer",
                            fontWeight: "600"
                        }}
                    >
                        <option value="">All Statuses</option>
                        <option value="pending">Pending/Unpaid</option>
                        <option value="paid">Paid</option>
                        <option value="failed">Failed</option>
                    </select>
                </div>

                {(search || startDate || endDate || paymentStatus) && (
                    <button
                        onClick={() => { setSearch(""); setStartDate(""); setEndDate(""); setPaymentStatus(""); }}
                        style={{
                            padding: "12px 18px",
                            background: "#f7f9fc",
                            border: "1px solid #e3e8ee",
                            borderRadius: "12px",
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
                            <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #e3e8ee" }}>Company / Brand</th>
                            <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #e3e8ee" }}>Representative</th>
                            <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #e3e8ee" }}>Award Categories</th>
                            <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #e3e8ee" }}>Fee</th>
                            <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #e3e8ee" }}>Payment</th>
                            <th style={{ padding: "16px 24px", textAlign: "right", borderBottom: "1px solid #e3e8ee" }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            Array.from({ length: 5 }).map((_, i) => (
                                <tr key={i}><td colSpan="6" style={{ padding: "24px", borderBottom: "1px solid #f7f9fc" }}><div style={{ height: "40px", width: "100%", background: "#f7f9fc", borderRadius: "8px", animation: "pulse 1.5s infinite" }} /></td></tr>
                            ))
                        ) : nominations.length === 0 ? (
                            <tr><td colSpan="6" style={{ padding: "100px 24px", textAlign: "center", color: "#697386", fontSize: "15px" }}>No nominations found.</td></tr>
                        ) : (
                            nominations.map((nomination) => {
                                const statusStyle = getStatusStyle(nomination.paymentStatus);
                                const StatusIcon = statusStyle.icon;
                                return (
                                    <tr
                                        key={nomination._id}
                                        style={{ cursor: "pointer", transition: "all 0.2s" }}
                                        onClick={() => setSelectedNomination(nomination)}
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
                                                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#1a1f36" }}>{nomination.companynm}</div>
                                                    <div style={{ fontSize: "12px", color: "#697386" }}>Submitted: {new Date(nomination.createdAt).toLocaleDateString()}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc" }}>
                                            <div style={{ fontSize: "14px", fontWeight: "600", color: "#1a1f36" }}>{nomination.title || ""} {nomination.firstName} {nomination.lastName}</div>
                                            <div style={{ fontSize: "12px", color: "#697386" }}>{nomination.email}</div>
                                        </td>
                                        <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc" }}>
                                            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", maxWidth: "250px" }}>
                                                {nomination.awardcate?.map((cat, idx) => (
                                                    <span key={idx} style={{
                                                        padding: "4px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: "600",
                                                        backgroundColor: "#eff2f7", color: "#4f566b", border: "1px solid #e3e8ee"
                                                    }}>
                                                        {cat}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc", fontSize: "14px", fontWeight: "700", color: "#1a1f36" }}>
                                            {nomination.amountingbp}
                                        </td>
                                        <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc" }}>
                                            <span style={{
                                                padding: "6px 12px", borderRadius: "10px", fontSize: "11px", fontWeight: "800",
                                                textTransform: "uppercase", background: statusStyle.bg, color: statusStyle.text, border: `1px solid ${statusStyle.border}`,
                                                display: "inline-flex", alignItems: "center", gap: "6px"
                                            }}>
                                                <StatusIcon size={12} /> {nomination.paymentStatus || "pending"}
                                            </span>
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
                        {renderPaginationNumbers()}
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
            {selectedNomination && (
                <div style={{ position: "fixed", top: 0, right: 0, width: "550px", height: "100vh", background: "#fff", boxShadow: "-10px 0 30px rgba(0,0,0,0.1)", zIndex: 1000, display: "flex", flexDirection: "column", animation: "slideIn 0.3s ease-out" }}>
                    <div style={{ padding: "24px 30px", borderBottom: "1px solid #f7f9fc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#1a1f36", margin: 0 }}>Nomination Details</h2>
                        <button onClick={() => setSelectedNomination(null)} style={{ background: "#f7f9fc", border: "none", padding: "8px", borderRadius: "50%", cursor: "pointer", color: "#64748b" }}>
                            <X size={20} />
                        </button>
                    </div>
                    <div style={{ padding: "30px 40px", flex: 1, overflowY: "auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "32px" }}>
                            <div style={{ width: "80px", height: "80px", borderRadius: "24px", background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#64748b" }}>
                                <Building2 size={40} />
                            </div>
                            <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1f36", margin: "0 0 8px 0" }}>{selectedNomination.companynm}</h3>
                            <div style={{ display: "flex", justifyContent: "center", gap: "8px", alignItems: "center" }}>
                                <span style={{ padding: "6px 16px", borderRadius: "20px", fontSize: "11px", fontWeight: "800", background: getStatusStyle(selectedNomination.paymentStatus).bg, color: getStatusStyle(selectedNomination.paymentStatus).text, border: `1px solid ${getStatusStyle(selectedNomination.paymentStatus).border}` }}>
                                    {selectedNomination.paymentStatus || "PENDING"}
                                </span>
                                <span style={{ fontSize: "14px", fontWeight: "700", color: "#4f566b" }}>
                                    Fee: {selectedNomination.amountingbp}
                                </span>
                            </div>
                        </div>

                        <div style={{ display: "grid", gap: "20px" }}>
                            {/* Action Buttons to Update Status */}
                            <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
                                <div style={{ fontSize: "11px", fontWeight: "800", color: "#64748b", textTransform: "uppercase", marginBottom: "12px", letterSpacing: "1px" }}>Set Payment Status</div>
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <button 
                                        onClick={() => handleUpdateStatus(selectedNomination._id, "paid")}
                                        style={{ flex: 1, padding: "8px 12px", borderRadius: "8px", background: "#059669", color: "#fff", border: "none", fontSize: "12px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}
                                    >
                                        Mark Paid
                                    </button>
                                    <button 
                                        onClick={() => handleUpdateStatus(selectedNomination._id, "pending")}
                                        style={{ flex: 1, padding: "8px 12px", borderRadius: "8px", background: "#d97706", color: "#fff", border: "none", fontSize: "12px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}
                                    >
                                        Mark Pending
                                    </button>
                                    <button 
                                        onClick={() => handleUpdateStatus(selectedNomination._id, "failed")}
                                        style={{ flex: 1, padding: "8px 12px", borderRadius: "8px", background: "#dc2626", color: "#fff", border: "none", fontSize: "12px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}
                                    >
                                        Mark Failed
                                    </button>
                                </div>
                            </div>

                            {/* Communication Actions */}
                            <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
                                <div style={{ fontSize: "11px", fontWeight: "800", color: "#64748b", textTransform: "uppercase", marginBottom: "12px", letterSpacing: "1px" }}>Communications</div>
                                <button 
                                    onClick={() => handleSendEmail(selectedNomination._id)}
                                    disabled={sendingEmail}
                                    style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", background: "#635bff", color: "#fff", border: "none", fontSize: "13px", fontWeight: "700", cursor: sendingEmail ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", opacity: sendingEmail ? 0.7 : 1 }}
                                >
                                    <Mail size={16} /> {sendingEmail ? "Sending Welcome Email..." : "Send Welcome Email"}
                                </button>
                            </div>

                            {/* Entrant Details */}
                            <div style={{ background: "#fff", padding: "20px", borderRadius: "20px", border: "1px solid #e3e8ee" }}>
                                <div style={{ fontSize: "11px", fontWeight: "800", color: "#697386", textTransform: "uppercase", marginBottom: "16px", letterSpacing: "1px" }}>Primary Contact</div>
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                                    <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#eff2f7", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e2e8f0", color: "#635bff" }}>
                                        <Briefcase size={18} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "15px", fontWeight: "700", color: "#1a1f36" }}>{selectedNomination.title || ""} {selectedNomination.firstName} {selectedNomination.lastName}</div>
                                        <div style={{ fontSize: "13px", color: "#64748b" }}>Representative</div>
                                    </div>
                                </div>
                                <div style={{ display: "grid", gap: "8px", marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #e2e8f0" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#475569" }}><Mail size={16} /> {selectedNomination.email}</div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#475569" }}><Phone size={16} /> {selectedNomination.phoneNo}</div>
                                </div>
                            </div>

                            {/* Company Details */}
                            <div style={{ background: "#fff", padding: "20px", borderRadius: "20px", border: "1px solid #e3e8ee" }}>
                                <div style={{ fontSize: "11px", fontWeight: "800", color: "#697386", textTransform: "uppercase", marginBottom: "16px", letterSpacing: "1px" }}>Company Information</div>
                                <div style={{ display: "grid", gap: "12px", fontSize: "14px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <span style={{ color: "#697386" }}>Sector</span>
                                        <span style={{ fontWeight: "600", color: "#1a1f36" }}>{selectedNomination.companysector}</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <span style={{ color: "#697386" }}>Registration No</span>
                                        <span style={{ fontWeight: "600", color: "#1a1f36" }}>{selectedNomination.companyregnumber}</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <span style={{ color: "#697386" }}>Reg Country</span>
                                        <span style={{ fontWeight: "600", color: "#1a1f36" }}>{selectedNomination.businesscorridors || "N/A"}</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <span style={{ color: "#697386" }}>Seats/Attendees</span>
                                        <span style={{ fontWeight: "600", color: "#1a1f36" }}>{selectedNomination.howmanyperson || "0"}</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <span style={{ color: "#697386" }}>Website</span>
                                        <span>
                                            <a href={selectedNomination.websiteurl} target="_blank" style={{ color: "#635bff", textDecoration: "none", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px" }}>
                                                <Globe size={14} /> Visit Link
                                            </a>
                                        </span>
                                    </div>
                                    <div style={{ borderTop: "1px solid #eff2f7", paddingTop: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
                                        <span style={{ color: "#697386", fontSize: "12px" }}>Address</span>
                                        <span style={{ color: "#1a1f36", fontWeight: "500", lineHeight: "1.5" }}>{selectedNomination.companyaddress}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Award Categories */}
                            <div style={{ background: "#fff", padding: "20px", borderRadius: "20px", border: "1px solid #e3e8ee" }}>
                                <div style={{ fontSize: "11px", fontWeight: "800", color: "#697386", textTransform: "uppercase", marginBottom: "12px" }}>Nominated Categories</div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                    {selectedNomination.awardcate?.map((cat, idx) => (
                                        <span key={idx} style={{
                                            padding: "6px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: "700",
                                            backgroundColor: "#f0efff", color: "#635bff", border: "1px solid #e0deff"
                                        }}>
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Cloudinary Documents */}
                            <div style={{ background: "#fff", padding: "20px", borderRadius: "20px", border: "1px solid #e3e8ee" }}>
                                <div style={{ fontSize: "11px", fontWeight: "800", color: "#697386", textTransform: "uppercase", marginBottom: "12px" }}>Uploaded Files (Cloudinary)</div>
                                <div style={{ display: "grid", gap: "10px" }}>
                                    {selectedNomination.uploadfile ? (
                                        <a href={selectedNomination.uploadfile} target="_blank" style={{
                                            padding: "12px", borderRadius: "12px", border: "1px solid #e2e8f0", background: "#f8fafc",
                                            color: "#1a1f36", textDecoration: "none", fontSize: "13px", fontWeight: "600",
                                            display: "flex", alignItems: "center", justifyContent: "space-between", transition: "all 0.2s"
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.borderColor = "#cbd5e1"}
                                        onMouseLeave={(e) => e.currentTarget.style.borderColor = "#e2e8f0"}
                                        >
                                            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><FileDown size={18} style={{ color: "#635bff" }} /> Primary Supporting Document</span>
                                            <span style={{ color: "#635bff", fontSize: "11px" }}>Download/View</span>
                                        </a>
                                    ) : (
                                        <div style={{ padding: "12px", borderRadius: "12px", border: "1px dotted #e2e8f0", color: "#697386", fontSize: "13px", textAlign: "center" }}>
                                            No primary document uploaded.
                                        </div>
                                    )}

                                    {selectedNomination.uploadfileoptional ? (
                                        <a href={selectedNomination.uploadfileoptional} target="_blank" style={{
                                            padding: "12px", borderRadius: "12px", border: "1px solid #e2e8f0", background: "#f8fafc",
                                            color: "#1a1f36", textDecoration: "none", fontSize: "13px", fontWeight: "600",
                                            display: "flex", alignItems: "center", justifyContent: "space-between", transition: "all 0.2s"
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.borderColor = "#cbd5e1"}
                                        onMouseLeave={(e) => e.currentTarget.style.borderColor = "#e2e8f0"}
                                        >
                                            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><FileDown size={18} style={{ color: "#635bff" }} /> Optional Supporting Document</span>
                                            <span style={{ color: "#635bff", fontSize: "11px" }}>Download/View</span>
                                        </a>
                                    ) : (
                                        <div style={{ padding: "12px", borderRadius: "12px", border: "1px dotted #e2e8f0", color: "#697386", fontSize: "13px", textAlign: "center" }}>
                                            No optional document uploaded.
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Service Offered & Description */}
                            <div style={{ background: "#fcfcfd", padding: "20px", borderRadius: "20px", border: "1px solid #e3e8ee" }}>
                                <div style={{ fontSize: "11px", fontWeight: "800", color: "#697386", textTransform: "uppercase", marginBottom: "12px" }}>Services Offered & Pitch</div>
                                <div style={{ fontSize: "14px", lineHeight: "1.7", color: "#1a1f36", display: "grid", gap: "16px" }}>
                                    <div style={{ background: "#fff", padding: "16px", borderRadius: "12px", border: "1px solid #e3e8ee" }}>
                                        <div style={{ fontSize: "11px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", marginBottom: "6px" }}>Services Offered</div>
                                        <div style={{ whiteSpace: "pre-wrap" }}>{selectedNomination.serviceyouOffer}</div>
                                    </div>
                                    <div style={{ background: "#fff", padding: "16px", borderRadius: "12px", border: "1px solid #e3e8ee" }}>
                                        <div style={{ fontSize: "11px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", marginBottom: "6px" }}>About Entrant & Company</div>
                                        <div style={{ whiteSpace: "pre-wrap" }}>{selectedNomination.aboutyourself}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: "24px 30px", borderTop: "1px solid #f7f9fc", display: "flex", gap: "12px" }}>
                        <button
                            onClick={() => window.location.href = `mailto:${selectedNomination.email}?subject=Regarding Nomination: ${selectedNomination.companynm}`}
                            style={{ flex: 1, padding: "16px", borderRadius: "16px", background: "#635bff", color: "#fff", border: "none", fontWeight: "700", fontSize: "14px", cursor: "pointer", transition: "all 0.2s" }}
                            onMouseEnter={(e) => e.currentTarget.style.background = "#5249e0"}
                            onMouseLeave={(e) => e.currentTarget.style.background = "#635bff"}
                        >
                            Email Entrant
                        </button>
                        <button
                            onClick={() => handleDelete(selectedNomination._id)}
                            style={{ padding: "16px", borderRadius: "16px", background: "#fee2e2", border: "1px solid #fecaca", color: "#dc2626", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}
                        >
                            <Trash2 size={20} /> Delete Nomination
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
