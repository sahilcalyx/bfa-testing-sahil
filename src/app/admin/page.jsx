"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Users, CreditCard, Activity, ArrowUpRight } from "lucide-react";

export default function AdminPage() {
    const [stats, setStats] = useState({
        totalEnquiries: 0,
        totalSponsors: 0,
        enquiriesToday: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get("/api/admin/stats");
                if (response.data.response) {
                    setStats(response.data.data);
                }
            } catch (error) {
                console.error("Failed to fetch dashboard stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <div style={{ animation: "fadeIn 0.5s ease-out" }}>
            <div style={{ marginBottom: "40px" }}>
                <h1 style={{ fontSize: "30px", fontWeight: "700", color: "#1a1f36", letterSpacing: "-0.5px", marginBottom: "8px" }}>Dashboard Overview</h1>
                <p style={{ color: "#4f566b", fontSize: "16px" }}>Welcome to the Brit FinTech Awards administration panel.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
                {/* Stat Card 1 */}
                <div style={cardStyle}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                        <h3 style={labelStyle}>Total Enquiries</h3>
                        {stats.enquiriesToday > 0 && (
                            <div style={trendStyle}>
                                <ArrowUpRight size={12} /> +{stats.enquiriesToday} today
                            </div>
                        )}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ ...iconContainerStyle, backgroundColor: "#f0efff", color: "#635bff" }}>
                            <Users size={20} />
                        </div>
                        <p style={valueStyle}>{loading ? "..." : stats.totalEnquiries}</p>
                    </div>
                </div>

                {/* Stat Card 2 */}
                <div style={cardStyle}>
                    <h3 style={labelStyle}>Active Sponsors</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "16px" }}>
                        <div style={{ ...iconContainerStyle, backgroundColor: "#fff0f7", color: "#ff3e8d" }}>
                            <CreditCard size={20} />
                        </div>
                        <p style={valueStyle}>{loading ? "..." : stats.totalSponsors}</p>
                    </div>
                </div>

                {/* Activity Card */}
                <div style={cardStyle}>
                    <h3 style={labelStyle}>System Status</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "16px" }}>
                        <div style={{ ...iconContainerStyle, backgroundColor: "#e6f9ff", color: "#00d4ff" }}>
                            <Activity size={20} />
                        </div>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#00d4ff", boxShadow: "0 0 10px rgba(0,212,255,0.4)" }} />
                                <p style={{ fontSize: "15px", color: "#1a1f36", fontWeight: "600", margin: 0 }}>Live</p>
                            </div>
                            <p style={{ fontSize: "13px", color: "#697386", margin: "2px 0 0 0" }}>System operational</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

const cardStyle = {
    background: "#ffffff",
    padding: "32px",
    borderRadius: "16px",
    border: "1px solid #e3e8ee",
    boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
    transition: "all 0.2s ease",
};

const labelStyle = {
    fontSize: "12px",
    color: "#697386",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontWeight: "700",
    margin: 0
};

const valueStyle = {
    fontSize: "36px",
    fontWeight: "700",
    color: "#1a1f36",
    margin: 0
};

const iconContainerStyle = {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const trendStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "11px",
    fontWeight: "700",
    color: "#059669",
    backgroundColor: "#ecfdf5",
    padding: "4px 8px",
    borderRadius: "20px",
};
