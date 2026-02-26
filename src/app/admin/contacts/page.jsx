"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, Calendar, ChevronLeft, ChevronRight, Mail, Phone, MessageSquare, X, Filter, User, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

export default function ContactsPage() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selectedContact, setSelectedContact] = useState(null);
    const [stats, setStats] = useState({ total: 0, newToday: 0 });
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
    }, [search, startDate, endDate]);

    const fetchContacts = async (page = 1) => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                page,
                limit: 10,
                search,
                startDate,
                endDate
            });
            const response = await axios.get(`/api/contact?${params.toString()}`);
            if (response.data.response) {
                setContacts(response.data.data);
                setPagination(response.data.pagination);

                // Mock stats - in a real app these would come from the API
                setStats({
                    total: response.data.pagination.totalCount,
                    newToday: response.data.data.filter(c =>
                        new Date(c.createdAt).toDateString() === new Date().toDateString()
                    ).length
                });
            }
        } catch (error) {
            console.error("Error fetching contacts:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "This enquiry will be permanently deleted.",
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
                const response = await axios.delete(`/api/contact?id=${id}`);
                if (response.data.response) {
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Record has been removed.',
                        icon: 'success',
                        confirmButtonColor: '#635bff'
                    });
                    setSelectedContact(null);
                    fetchContacts(pagination.currentPage);
                }
            } catch (error) {
                Swal.fire('Error', 'Failed to delete record.', 'error');
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

    return (
        <div style={{ animation: "fadeIn 0.5s ease-out", position: "relative", minHeight: "80vh" }}>
            {/* Header Section */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px" }}>
                <div>
                    <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#1a1f36", letterSpacing: "-0.5px", marginBottom: "4px" }}>Enquiries</h1>
                    <p style={{ color: "#697386", fontSize: "15px" }}>Comprehensive view of incoming contact requests.</p>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                    <div style={{ background: "#fff", padding: "10px 16px", borderRadius: "12px", border: "1px solid #e3e8ee", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                        <div style={{ fontSize: "11px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "0.5px" }}>Total Enquiries</div>
                        <div style={{ fontSize: "20px", fontWeight: "800", color: "#1a1f36" }}>{pagination.totalCount}</div>
                    </div>
                    <div style={{ background: "#635bff10", padding: "10px 16px", borderRadius: "12px", border: "1px solid #635bff30" }}>
                        <div style={{ fontSize: "11px", fontWeight: "700", color: "#635bff", textTransform: "uppercase", letterSpacing: "0.5px" }}>Recent Today</div>
                        <div style={{ fontSize: "20px", fontWeight: "800", color: "#635bff" }}>{stats.newToday}</div>
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
                            <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #e3e8ee" }}>Date</th>
                            <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#697386", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #e3e8ee" }}>Status</th>
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
                                    key={contact._id}
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
                                    <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc", color: "#697386", fontSize: "14px" }}>
                                        {new Date(contact.createdAt).toLocaleDateString()}
                                    </td>
                                    <td style={{ padding: "16px 24px", borderBottom: "1px solid #f7f9fc" }}>
                                        <span style={{ padding: "5px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", background: "#f0fdf4", color: "#166534", border: "1px solid #dcfce7" }}>New</span>
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
            {selectedContact && (
                <div style={{ position: "fixed", top: 0, right: 0, width: "450px", height: "100vh", background: "#fff", boxShadow: "-10px 0 30px rgba(0,0,0,0.1)", zIndex: 1000, padding: "0", display: "flex", flexDirection: "column", animation: "slideIn 0.3s ease-out" }}>
                    <div style={{ padding: "30px", borderBottom: "1px solid #f7f9fc", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#1a1f36", margin: 0 }}>Enquiry Details</h2>
                        <button onClick={() => setSelectedContact(null)} style={{ background: "#f7f9fc", border: "none", padding: "8px", borderRadius: "50%", cursor: "pointer", color: "#697386" }}>
                            <X size={20} />
                        </button>
                    </div>
                    <div style={{ padding: "40px 30px", flex: 1, overflowY: "auto" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "40px" }}>
                            <div style={{ width: "64px", height: "64px", borderRadius: "20px", background: "#635bff10", color: "#635bff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: "800" }}>
                                {getInitials(selectedContact.firstName, selectedContact.lastName)}
                            </div>
                            <div>
                                <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1f36", margin: "0 0 4px 0" }}>
                                    {selectedContact.title || "N/A"} {selectedContact.firstName || "Unknown"} {selectedContact.lastName || ""}
                                </h3>
                                <p style={{ color: "#697386", margin: 0 }}>{new Date(selectedContact.createdAt).toLocaleString()}</p>
                            </div>
                        </div>

                        <div style={{ display: "grid", gap: "24px" }}>
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
                            onClick={() => window.location.href = `mailto:${selectedContact.email}?subject=Re: Enquiry from ${selectedContact.firstName}`}
                            style={{ flex: 1, padding: "14px", borderRadius: "12px", background: "#635bff", color: "#fff", border: "none", fontWeight: "700", cursor: "pointer" }}
                        >
                            Reply via Email
                        </button>
                        <button
                            onClick={() => handleDelete(selectedContact._id)}
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
