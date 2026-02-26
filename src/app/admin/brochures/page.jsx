"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, Calendar, ChevronLeft, ChevronRight, Mail, Phone, X, Filter, User, Trash2, Building2, Briefcase, Award, Globe } from "lucide-react";
import Swal from "sweetalert2";

export default function BrochureRequestsPage() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [stats, setStats] = useState({ total: 0, newToday: 0 });
    const [pagination, setPagination] = useState({
        totalCount: 0,
        totalPages: 0,
        currentPage: 1,
        limit: 10
    });

    const fetchRequests = async (page = 1) => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                page,
                limit: 10,
                search,
                startDate,
                endDate
            });
            const response = await axios.get(`/api/brochure?${params.toString()}`);
            if (response.data.response) {
                setRequests(response.data.data.items);
                setPagination({
                    totalCount: response.data.data.total,
                    totalPages: response.data.data.totalPages,
                    currentPage: response.data.data.currentPage,
                    limit: 10
                });

                // Calculate today's stats if not provided by backend
                const today = new Date().toDateString();
                const todayCount = response.data.data.items.filter(item =>
                    new Date(item.createdAt).toDateString() === today
                ).length;

                setStats({
                    total: response.data.data.total,
                    newToday: todayCount // Note: This is only for the current page, backend should ideally provide this
                });
            }
        } catch (error) {
            console.error("Failed to fetch brochure requests:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchRequests(1);
        }, 300);
        return () => clearTimeout(delayDebounceFn);
    }, [search, startDate, endDate]);

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#635bff",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`/api/brochure?id=${id}`);
                setRequests(requests.filter(req => req._id !== id));
                if (selectedRequest?._id === id) setSelectedRequest(null);
                Swal.fire("Deleted!", "Request has been deleted.", "success");
            } catch (error) {
                Swal.fire("Error!", "Failed to delete request.", "error");
            }
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            fetchRequests(newPage);
        }
    };

    const getInitials = (firstName, lastName, name) => {
        if (firstName || lastName) {
            return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase();
        }
        if (name) {
            const parts = name.split(' ');
            if (parts.length > 1) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
            return name.substring(0, 2).toUpperCase();
        }
        return "U";
    };

    return (
        <div style={{ animation: "fadeIn 0.5s ease-out", position: "relative", minHeight: "80vh" }}>
            {/* Header section */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px" }}>
                <div>
                    <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#1a1f36", letterSpacing: "-0.5px", marginBottom: "4px" }}>Brochure Requests</h1>
                    <p style={{ color: "#697386", fontSize: "15px" }}>Manage and track visitor interest in the event brochure.</p>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                    <div style={{ background: "#fff", padding: "10px 16px", borderRadius: "12px", border: "1px solid #e3e8ee", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                        <div style={{ fontSize: "11px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "0.5px" }}>Total Downloads</div>
                        <div style={{ fontSize: "20px", fontWeight: "800", color: "#1a1f36" }}>{pagination.totalCount}</div>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", gap: "24px", position: "relative" }}>
                {/* Main Table Area */}
                <div style={{ flex: 1, transition: "all 0.3s ease" }}>

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
                                placeholder="Search by name, email or company..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                style={inputSearchStyle}
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
                                style={{ padding: "10px 16px", background: "#fef2f2", color: "#b91c1c", border: "none", borderRadius: "10px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    {/* Table Area */}
                    <div style={{ background: "#ffffff", borderRadius: "20px", border: "1px solid #e3e8ee", overflow: "hidden", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.04)" }}>
                        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0" }}>
                            <thead>
                                <tr style={{ background: "#fcfcfd" }}>
                                    <th style={thStyle}>Identity</th>
                                    <th style={thStyle}>Company & Role</th>
                                    <th style={thStyle}>Date</th>
                                    <th style={thStyle}>Status</th>
                                    <th style={{ ...thStyle, textAlign: "right" }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading && requests.length === 0 ? (
                                    Array.from({ length: 5 }).map((_, i) => (
                                        <tr key={i}><td colSpan="5" style={{ padding: "24px", borderBottom: "1px solid #f7f9fc" }}><div style={{ height: "40px", width: "100%", background: "#f7f9fc", borderRadius: "8px", animation: "pulse 1.5s infinite" }} /></td></tr>
                                    ))
                                ) : requests.length === 0 ? (
                                    <tr><td colSpan="5" style={{ padding: "100px 24px", textAlign: "center", color: "#697386", fontSize: "15px" }}>No brochure requests found.</td></tr>
                                ) : (
                                    requests.map((request) => (
                                        <tr
                                            key={request._id}
                                            onClick={() => setSelectedRequest(request)}
                                            style={{ cursor: "pointer", transition: "all 0.2s", backgroundColor: selectedRequest?._id === request._id ? "#fcfcfd" : "transparent" }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#fcfcfd"}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selectedRequest?._id === request._id ? "#fcfcfd" : "transparent"}
                                        >
                                            <td style={tdStyle}>
                                                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                                    <div style={avatarStyle}>
                                                        {getInitials(request.firstName, request.lastName, request.name)}
                                                    </div>
                                                    <div>
                                                        <div style={{ fontSize: "15px", fontWeight: "700", color: "#1a1f36" }}>
                                                            {request.name || `${request.title || ""} ${request.firstName || ""} ${request.lastName || ""}`.trim()}
                                                        </div>
                                                        <div style={{ fontSize: "12px", color: "#697386" }}>{request.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={tdStyle}>
                                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                                    <div style={{ fontSize: "14px", fontWeight: "600", color: "#1a1f36", display: "flex", alignItems: "center", gap: "6px" }}>
                                                        <Building2 size={14} color="#635bff" /> {request.companyName}
                                                    </div>
                                                    <div style={{ fontSize: "12px", color: "#697386", display: "flex", alignItems: "center", gap: "6px" }}>
                                                        <Briefcase size={13} /> {request.role || "N/A"}
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ ...tdStyle, color: "#697386", fontSize: "14px" }}>
                                                {new Date(request.createdAt).toLocaleDateString()}
                                            </td>
                                            <td style={tdStyle}>
                                                <span style={statusBadgeStyle}>Interested</span>
                                            </td>
                                            <td style={{ ...tdStyle, textAlign: "right" }}>
                                                <ChevronRight size={20} style={{ color: "#c1c7d0" }} />
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fcfcfd" }}>
                            <div style={{ fontSize: "14px", color: "#697386" }}>Showing page <span style={{ color: "#1a1f36", fontWeight: "700" }}>{pagination.currentPage}</span> of <span style={{ color: "#1a1f36", fontWeight: "700" }}>{pagination.totalPages}</span></div>
                            <div style={{ display: "flex", gap: "8px" }}>
                                <button
                                    disabled={pagination.currentPage === 1}
                                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                                    style={pagination.currentPage === 1 ? disabledNavButtonStyle : navButtonStyle}
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button
                                    disabled={pagination.currentPage === pagination.totalPages}
                                    onClick={() => handlePageChange(pagination.currentPage + 1)}
                                    style={pagination.currentPage === pagination.totalPages ? disabledNavButtonStyle : navButtonStyle}
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Side Detail Panel */}
                {selectedRequest && (
                    <div style={detailPanelStyle}>
                        <div style={{ padding: "30px", borderBottom: "1px solid #f7f9fc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#1a1f36", margin: 0 }}>Request Details</h2>
                            <button onClick={() => setSelectedRequest(null)} style={closeButtonStyle}>
                                <X size={20} />
                            </button>
                        </div>

                        <div style={{ padding: "40px 30px", flex: 1, overflowY: "auto" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "40px" }}>
                                <div style={panelAvatarStyle}>
                                    {getInitials(selectedRequest.firstName, selectedRequest.lastName, selectedRequest.name)}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1f36", margin: "0 0 4px 0" }}>
                                        {selectedRequest.name || `${selectedRequest.title || ""} ${selectedRequest.firstName || ""} ${selectedRequest.lastName || ""}`.trim()}
                                    </h3>
                                    <p style={{ color: "#697386", margin: 0 }}>{new Date(selectedRequest.createdAt).toLocaleString()}</p>
                                </div>
                            </div>

                            <div style={{ display: "grid", gap: "24px" }}>
                                <div style={detailBlockStyle}>
                                    <div style={detailLabelStyle}>Email Address</div>
                                    <div style={detailValueStyle}><Mail size={16} /> {selectedRequest.email}</div>
                                </div>
                                <div style={detailBlockStyle}>
                                    <div style={detailLabelStyle}>Phone Number</div>
                                    <div style={detailValueStyle}><Phone size={16} /> {selectedRequest.phone}</div>
                                </div>
                                <div style={detailBlockStyle}>
                                    <div style={detailLabelStyle}>Company & Country</div>
                                    <div style={detailValueStyle}>
                                        <Building2 size={16} /> {selectedRequest.companyName} {selectedRequest.country ? `(${selectedRequest.country})` : ""}
                                    </div>
                                </div>
                                <div style={detailBlockStyle}>
                                    <div style={detailLabelStyle}>Job Role</div>
                                    <div style={detailValueStyle}><Briefcase size={16} /> {selectedRequest.role || "N/A"}</div>
                                </div>
                                <div style={detailBlockStyle}>
                                    <div style={detailLabelStyle}>Record Information</div>
                                    <div style={{ fontSize: "14px", color: "#4f566b", display: "flex", flexDirection: "column", gap: "4px" }}>
                                        <div><strong>Internal ID:</strong> #{selectedRequest._id?.substring(0, 12)}</div>
                                        <div><strong>Source:</strong> Brochure Download Form</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: "30px", borderTop: "1px solid #f7f9fc", display: "flex", gap: "12px" }}>
                            <button
                                onClick={() => window.location.href = `mailto:${selectedRequest.email}?subject=BFA Sponsorship Brochure`}
                                style={primaryBtn}
                            >
                                Send Brochure
                            </button>
                            <button
                                onClick={() => handleDelete(selectedRequest._id)}
                                style={dangerBtn}
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideIn {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                @keyframes pulse {
                    0% { opacity: 1; }
                    50% { opacity: 0.5; }
                    100% { opacity: 1; }
                }
            `}</style>
        </div>
    );
}

// Reusing Premium CRM Styles
const thStyle = {
    padding: "16px 24px",
    textAlign: "left",
    fontSize: "12px",
    fontWeight: "700",
    color: "#697386",
    textTransform: "uppercase",
    letterSpacing: "1px",
    borderBottom: "1px solid #e3e8ee"
};

const tdStyle = {
    padding: "16px 24px",
    borderBottom: "1px solid #f7f9fc",
    verticalAlign: "middle"
};

const inputSearchStyle = {
    width: "100%",
    padding: "12px 14px 12px 44px",
    borderRadius: "12px",
    border: "1px solid #e3e8ee",
    fontSize: "14px",
    outline: "none",
    background: "#fcfcfd",
    transition: "all 0.2s"
};

const avatarStyle = {
    width: "42px",
    height: "42px",
    borderRadius: "12px",
    background: "#eff2f7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#635bff",
    fontWeight: "700",
    fontSize: "14px",
    border: "1px solid #e3e8ee"
};

const navButtonStyle = {
    padding: "8px",
    borderRadius: "10px",
    border: "1px solid #e3e8ee",
    background: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#4f566b"
};

const disabledNavButtonStyle = {
    ...navButtonStyle,
    opacity: 0.5,
    cursor: "not-allowed"
};

const statusBadgeStyle = {
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: "700",
    textTransform: "uppercase",
    background: "#f0fdf4",
    color: "#166534",
    border: "1px solid #dcfce7"
};

const detailPanelStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    width: "450px",
    height: "100vh",
    background: "#fff",
    boxShadow: "-10px 0 30px rgba(0,0,0,0.1)",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    animation: "slideIn 0.3s ease-out"
};

const panelAvatarStyle = {
    width: "64px",
    height: "64px",
    borderRadius: "20px",
    background: "#635bff10",
    color: "#635bff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "800"
};

const closeButtonStyle = {
    background: "#f7f9fc",
    border: "none",
    padding: "8px",
    borderRadius: "50%",
    cursor: "pointer",
    color: "#697386"
};

const detailBlockStyle = {
    background: "#fcfcfd",
    padding: "16px",
    borderRadius: "16px",
    border: "1px solid #e3e8ee"
};

const detailLabelStyle = {
    fontSize: "11px",
    fontWeight: "700",
    color: "#697386",
    textTransform: "uppercase",
    marginBottom: "8px"
};

const detailValueStyle = {
    fontSize: "15px",
    fontWeight: "600",
    color: "#1a1f36",
    display: "flex",
    alignItems: "center",
    gap: "8px"
};

const primaryBtn = {
    flex: 1,
    padding: "14px",
    borderRadius: "12px",
    background: "#635bff",
    color: "#fff",
    border: "none",
    fontWeight: "700",
    cursor: "pointer"
};

const dangerBtn = {
    padding: "14px",
    borderRadius: "12px",
    background: "#fee2e2",
    border: "1px solid #fecaca",
    color: "#dc2626",
    cursor: "pointer"
};
