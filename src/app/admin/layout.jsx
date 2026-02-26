"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Users, CreditCard, Menu, LogOut, FileText } from "lucide-react";
import { SessionProvider, useSession, signOut } from "next-auth/react";

function AdminLayoutContent({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session, status } = useSession();
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

    const isLoginPage = pathname === "/admin/login";

    useEffect(() => {
        if (status === "unauthenticated" && !isLoginPage) {
            router.push("/admin/login");
        }
    }, [status, router, isLoginPage]);

    if (status === "loading") {
        return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>Loading...</div>;
    }

    if (isLoginPage) {
        return <>{children}</>;
    }

    if (!session) {
        return null;
    }

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Contacts", href: "/admin/contacts", icon: Users },
        { name: "Sponsors", href: "/admin/sponsors", icon: CreditCard },
        { name: "Brochure Requests", href: "/admin/brochures", icon: FileText },
    ];

    return (
        <div style={{
            display: "flex",
            minHeight: "100vh",
            backgroundColor: "#f7f9fc",
            color: "#1a1f36",
            fontFamily: "'Inter', sans-serif"
        }}>
            {/* Sidebar */}
            <aside
                style={{
                    width: isSidebarOpen ? "280px" : "80px",
                    backgroundColor: "#ffffff",
                    borderRight: "1px solid #e3e8ee",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    height: "100vh",
                    zIndex: 100,
                    boxShadow: "2px 0 10px rgba(0,0,0,0.02)"
                }}
            >
                <div style={{ padding: "32px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {isSidebarOpen && (
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div style={{ width: "32px", height: "32px", background: "#635bff", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <span style={{ fontWeight: "800", fontSize: "16px", color: "#fff" }}>B</span>
                            </div>
                            <span style={{ fontWeight: "700", fontSize: "19px", color: "#1a1f36", letterSpacing: "-0.5px" }}>BFA Admin</span>
                        </div>
                    )}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        style={{
                            background: "#f7f9fc",
                            border: "1px solid #e3e8ee",
                            cursor: "pointer",
                            color: "#4f566b",
                            width: "30px",
                            height: "30px",
                            borderRadius: "6px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Menu size={16} />
                    </button>
                </div>

                <nav style={{ flex: 1, padding: "10px" }}>
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "12px 14px",
                                    borderRadius: "8px",
                                    marginBottom: "4px",
                                    textDecoration: "none",
                                    color: isActive ? "#635bff" : "#4f566b",
                                    backgroundColor: isActive ? "#eff2f7" : "transparent",
                                    fontWeight: isActive ? "600" : "500",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                <item.icon size={18} style={{
                                    marginRight: isSidebarOpen ? "12px" : "0",
                                    color: isActive ? "#635bff" : "#697386"
                                }} />
                                {isSidebarOpen && <span>{item.name}</span>}
                            </Link>
                        );
                    })}
                </nav>

                <div style={{ padding: "20px", borderTop: "1px solid #f7f9fc" }}>
                    {isSidebarOpen && session?.user && (
                        <div style={{
                            padding: "12px",
                            background: "#f7f9fc",
                            borderRadius: "12px",
                            marginBottom: "16px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            border: "1px solid #e3e8ee"
                        }}>
                            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#635bff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px" }}>
                                {session.user.email?.charAt(0).toUpperCase()}
                            </div>
                            <div style={{ overflow: "hidden" }}>
                                <div style={{ fontSize: "13px", fontWeight: "700", color: "#1a1f36", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    Administrator
                                </div>
                                <div style={{ fontSize: "11px", color: "#697386", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {session.user.email}
                                </div>
                            </div>
                        </div>
                    )}
                    <button
                        onClick={() => signOut({ callbackUrl: "/admin/login" })}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "12px 14px",
                            borderRadius: "8px",
                            width: "100%",
                            background: "#fff5f5",
                            border: "1px solid #ffe3e3",
                            cursor: "pointer",
                            color: "#c53030",
                            fontSize: "14px",
                            fontWeight: "600",
                            transition: "all 0.2s"
                        }}
                    >
                        <LogOut size={18} style={{ marginRight: isSidebarOpen ? "12px" : "0" }} />
                        {isSidebarOpen && <span>Sign Out</span>}
                    </button>
                    {isSidebarOpen && (
                        <div style={{ marginTop: "16px", color: "#697386", fontSize: "11px", textAlign: "center" }}>
                            v2.1.0-pro-light
                        </div>
                    )}
                </div>
            </aside>

            {/* Main Content Area */}
            <div style={{
                flex: 1,
                marginLeft: isSidebarOpen ? "280px" : "80px",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
            }}>
                {/* Top Header */}
                <header style={{
                    height: "70px",
                    backgroundColor: "#ffffff",
                    borderBottom: "1px solid #e3e8ee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 40px",
                    position: "sticky",
                    top: 0,
                    zIndex: 90,
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: "#697386", fontSize: "14px" }}>Admin</span>
                        <span style={{ color: "#e3e8ee" }}>/</span>
                        <span style={{ color: "#1a1f36", fontSize: "14px", fontWeight: "600" }}>
                            {navItems.find(item => pathname === item.href)?.name || "Overview"}
                        </span>
                    </div>
                </header>

                <main
                    style={{
                        padding: "40px",
                        overflowY: "auto",
                    }}
                >
                    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default function AdminLayout({ children }) {
    return (
        <SessionProvider>
            <AdminLayoutContent>{children}</AdminLayoutContent>
        </SessionProvider>
    );
}
