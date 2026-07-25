"use client";

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Trash2,
  Save,
  X,
  Scale,
  UserPlus,
  Search,
  Mail,
  ShieldCheck,
  Award,
  FileText,
  Pencil,
  Users,
  Check,
  Sparkles,
  Star,
  ListChecks,
} from "lucide-react";
import { AWARD_CATEGORIES_2026 } from "@/lib/awardCategories";

function initials(name, email) {
  const src = (name || email || "?").trim();
  const parts = src.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return src.slice(0, 2).toUpperCase();
}

export default function JuryUsersPage() {
  const [juryUsers, setJuryUsers] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [query, setQuery] = useState("");
  const [nomQuery, setNomQuery] = useState("");
  const [catQuery, setCatQuery] = useState("");
  const [viewMode, setViewMode] = useState("users"); // users | shortlists
  const [shortlistCategory, setShortlistCategory] = useState("");
  const [shortlistData, setShortlistData] = useState(null);
  const [shortlistLoading, setShortlistLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    assignedCategories: [],
    assignedNominations: [],
    isActive: true,
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const [juryRes, nomRes] = await Promise.all([
        axios.get("/api/admin/jury"),
        axios.get("/api/nomination?listAll=1&limit=500"),
      ]);
      if (juryRes.data.response) setJuryUsers(juryRes.data.data || []);
      if (nomRes.data.response) setNominations(nomRes.data.data || []);
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to load jury users.", "error");
    } finally {
      setLoading(false);
    }
  };

  const fetchShortlists = async (category = shortlistCategory) => {
    setShortlistLoading(true);
    try {
      const params = new URLSearchParams();
      if (category) params.set("category", category);
      const res = await axios.get(`/api/admin/shortlist?${params}`);
      if (res.data.response) setShortlistData(res.data.data);
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to load shortlists.", "error");
    } finally {
      setShortlistLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (viewMode === "shortlists") fetchShortlists(shortlistCategory);
  }, [viewMode, shortlistCategory]);

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      assignedCategories: [],
      assignedNominations: [],
      isActive: true,
    });
    setEditingId(null);
    setShowForm(false);
    setNomQuery("");
    setCatQuery("");
  };

  const openCreate = () => {
    setForm({
      name: "",
      email: "",
      assignedCategories: [],
      assignedNominations: [],
      isActive: true,
    });
    setEditingId(null);
    setNomQuery("");
    setCatQuery("");
    setShowForm(true);
  };

  const openEdit = (user) => {
    setEditingId(user._id);
    setForm({
      name: user.name || "",
      email: user.email || "",
      assignedCategories: user.assignedCategories || [],
      assignedNominations: (user.assignedNominations || []).map((id) =>
        typeof id === "string" ? id : id.toString()
      ),
      isActive: user.isActive !== false,
    });
    setShowForm(true);
  };

  const toggleCategory = (cat) => {
    setForm((prev) => {
      const has = prev.assignedCategories.includes(cat);
      return {
        ...prev,
        assignedCategories: has
          ? prev.assignedCategories.filter((c) => c !== cat)
          : [...prev.assignedCategories, cat],
      };
    });
  };

  const toggleNomination = (id) => {
    setForm((prev) => {
      const has = prev.assignedNominations.includes(id);
      return {
        ...prev,
        assignedNominations: has
          ? prev.assignedNominations.filter((n) => n !== id)
          : [...prev.assignedNominations, id],
      };
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingId) {
        const res = await axios.patch("/api/admin/jury", {
          id: editingId,
          name: form.name,
          assignedCategories: form.assignedCategories,
          assignedNominations: form.assignedNominations,
          isActive: form.isActive,
        });
        if (!res.data.response) throw new Error(res.data.data);
        Swal.fire({
          icon: "success",
          title: "Updated",
          text: "Jury assignments saved.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2500,
        });
      } else {
        const res = await axios.post("/api/admin/jury", form);
        if (!res.data.response) throw new Error(res.data.data);
        Swal.fire({
          icon: "success",
          title: "Jury user created",
          text: "They can log in at /jury-login using email OTP.",
        });
      }
      resetForm();
      fetchData();
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.data || error.message || "Save failed",
        "error"
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete jury user?",
      text: "They will no longer be able to log in.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#c8102e",
      confirmButtonText: "Delete",
    });
    if (!result.isConfirmed) return;
    try {
      await axios.delete(`/api/admin/jury?id=${id}`);
      fetchData();
      Swal.fire({
        icon: "success",
        title: "Deleted",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch {
      Swal.fire("Error", "Failed to delete jury user.", "error");
    }
  };

  const filteredUsers = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return juryUsers;
    return juryUsers.filter(
      (u) =>
        (u.name || "").toLowerCase().includes(q) ||
        (u.email || "").toLowerCase().includes(q)
    );
  }, [juryUsers, query]);

  const filteredCategories = useMemo(() => {
    const q = catQuery.trim().toLowerCase();
    if (!q) return AWARD_CATEGORIES_2026;
    return AWARD_CATEGORIES_2026.filter((c) => c.toLowerCase().includes(q));
  }, [catQuery]);

  const filteredNominations = useMemo(() => {
    const q = nomQuery.trim().toLowerCase();
    if (!q) return nominations;
    return nominations.filter((n) => {
      const hay = [
        n.companynm,
        n.firstName,
        n.lastName,
        n.email,
        ...(n.awardcate || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [nominations, nomQuery]);

  const stats = useMemo(() => {
    const active = juryUsers.filter((u) => u.isActive !== false).length;
    const withCats = juryUsers.filter(
      (u) => (u.assignedCategories || []).length > 0
    ).length;
    const withNoms = juryUsers.filter(
      (u) => (u.assignedNominations || []).length > 0
    ).length;
    return { total: juryUsers.length, active, withCats, withNoms };
  }, [juryUsers]);

  return (
    <div className="jury-admin">
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Outfit:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <motion.header
        className="ja-hero"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="ja-hero__copy">
          <div className="ja-hero__badge">
            <Sparkles size={13} /> Jury access control
          </div>
          <h1>Jury Users</h1>
          <p>
            Create OTP logins, assign award categories and nominations. Track
            which jury members shortlisted entries per award category.
          </p>
        </div>
        <div className="ja-hero__actions">
          <div className="ja-view-toggle">
            <button
              type="button"
              className={viewMode === "users" ? "is-active" : ""}
              onClick={() => setViewMode("users")}
            >
              <Users size={15} /> Users
            </button>
            <button
              type="button"
              className={viewMode === "shortlists" ? "is-active" : ""}
              onClick={() => setViewMode("shortlists")}
            >
              <ListChecks size={15} /> Shortlists
            </button>
          </div>
          {viewMode === "users" && (
            <button type="button" className="ja-btn ja-btn--primary" onClick={openCreate}>
              <UserPlus size={18} /> Add Jury User
            </button>
          )}
        </div>
      </motion.header>

      <div className="ja-stats">
        {[
          { label: "Total jury", value: stats.total, icon: Users },
          { label: "Active", value: stats.active, icon: ShieldCheck },
          { label: "With categories", value: stats.withCats, icon: Award },
          { label: "With nominations", value: stats.withNoms, icon: FileText },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            className="ja-stat"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.35 }}
          >
            <span className="ja-stat__icon">
              <s.icon size={18} />
            </span>
            <div>
              <div className="ja-stat__label">{s.label}</div>
              <div className="ja-stat__value">{s.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="ja-toolbar">
        {viewMode === "users" ? (
          <>
            <div className="ja-search">
              <Search size={17} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search jury by name or email…"
              />
            </div>
            <div className="ja-toolbar__hint">
              {filteredUsers.length} member{filteredUsers.length === 1 ? "" : "s"}
            </div>
          </>
        ) : (
          <>
            <div className="ja-search ja-search--select">
              <Award size={17} />
              <select
                value={shortlistCategory}
                onChange={(e) => setShortlistCategory(e.target.value)}
              >
                <option value="">All award categories</option>
                {AWARD_CATEGORIES_2026.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                    {shortlistData?.categoryCounts?.[cat]
                      ? ` (${shortlistData.categoryCounts[cat]})`
                      : ""}
                  </option>
                ))}
              </select>
            </div>
            <div className="ja-toolbar__hint">
              {shortlistData?.totalShortlists ?? 0} shortlist
              {(shortlistData?.totalShortlists ?? 0) === 1 ? "" : "s"}
            </div>
          </>
        )}
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.form
            key="jury-form"
            onSubmit={handleSave}
            className="ja-form"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.28 }}
          >
            <div className="ja-form__head">
              <div>
                <div className="ja-form__kicker">
                  {editingId ? "Update assignment" : "New jury account"}
                </div>
                <h2>{editingId ? "Edit Jury User" : "Create Jury User"}</h2>
              </div>
              <button type="button" className="ja-icon-btn" onClick={resetForm} aria-label="Close">
                <X size={18} />
              </button>
            </div>

            <div className="ja-form__grid">
              <div className="ja-field">
                <label>Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jury member name"
                />
              </div>
              <div className="ja-field">
                <label>Email</label>
                <input
                  type="email"
                  required
                  disabled={Boolean(editingId)}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jury@example.com"
                />
              </div>
            </div>

            <button
              type="button"
              className={`ja-toggle${form.isActive ? " is-on" : ""}`}
              onClick={() => setForm({ ...form, isActive: !form.isActive })}
            >
              <span className="ja-toggle__track">
                <span className="ja-toggle__thumb" />
              </span>
              <span>
                <strong>{form.isActive ? "Active" : "Disabled"}</strong>
                <small>Can sign in with email OTP</small>
              </span>
            </button>

            <div className="ja-block">
              <div className="ja-block__head">
                <h3>
                  <Award size={16} /> Assign categories
                </h3>
                <span className="ja-chip-count">
                  {form.assignedCategories.length} selected
                </span>
              </div>
              <div className="ja-search ja-search--sm">
                <Search size={15} />
                <input
                  value={catQuery}
                  onChange={(e) => setCatQuery(e.target.value)}
                  placeholder="Filter categories…"
                />
              </div>
              <div className="ja-chips">
                {filteredCategories.map((cat) => {
                  const on = form.assignedCategories.includes(cat);
                  return (
                    <button
                      key={cat}
                      type="button"
                      className={`ja-chip${on ? " is-on" : ""}`}
                      onClick={() => toggleCategory(cat)}
                    >
                      {on && <Check size={14} />}
                      {cat}
                    </button>
                  );
                })}
                {filteredCategories.length === 0 && (
                  <div className="ja-empty-inline">No categories match.</div>
                )}
              </div>
            </div>

            <div className="ja-block">
              <div className="ja-block__head">
                <h3>
                  <FileText size={16} /> Assign nominations
                </h3>
                <span className="ja-chip-count">
                  {form.assignedNominations.length} selected
                </span>
              </div>
              <p className="ja-help">
                Select the exact nominations this jury member can review. If any
                nominations are selected, only those appear — not other entries
                from assigned categories. Leave nominations empty to allow all
                entries in the selected categories.
              </p>
              <div className="ja-search ja-search--sm">
                <Search size={15} />
                <input
                  value={nomQuery}
                  onChange={(e) => setNomQuery(e.target.value)}
                  placeholder="Search company, name, category…"
                />
              </div>
              <div className="ja-nom-list">
                {filteredNominations.length === 0 ? (
                  <div className="ja-empty-inline">No nominations found.</div>
                ) : (
                  filteredNominations.map((n) => {
                    const id = n._id;
                    const checked = form.assignedNominations.includes(id);
                    return (
                      <button
                        key={id}
                        type="button"
                        className={`ja-nom${checked ? " is-on" : ""}`}
                        onClick={() => toggleNomination(id)}
                      >
                        <span className={`ja-check${checked ? " is-on" : ""}`}>
                          {checked && <Check size={12} />}
                        </span>
                        <span className="ja-nom__meta">
                          <strong>
                            {n.companynm} — {n.firstName} {n.lastName}
                          </strong>
                          <small>
                            {(n.awardcate || []).join(" · ") || "No categories"}
                          </small>
                        </span>
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            <div className="ja-form__actions">
              <button type="button" className="ja-btn ja-btn--ghost" onClick={resetForm}>
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="ja-btn ja-btn--accent"
              >
                {editingId ? <Save size={18} /> : <Plus size={18} />}
                {saving
                  ? "Saving…"
                  : editingId
                    ? "Save Changes"
                    : "Create Jury User"}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {viewMode === "shortlists" ? (
        shortlistLoading ? (
          <div className="ja-loading">
            <div className="ja-skeleton" />
            <div className="ja-skeleton" />
          </div>
        ) : !(shortlistData?.matrix || []).length ||
          (shortlistData.matrix.every((m) => m.nominationCount === 0) &&
            !(shortlistData.totalShortlists > 0)) ? (
          <div className="ja-empty">
            <Star size={36} />
            <h3>No shortlists yet</h3>
            <p>
              When jury members shortlist nominations by category, results appear
              here so you can see who picked what.
            </p>
          </div>
        ) : (
          <div className="ja-shortlists">
            {(shortlistData.matrix || [])
              .filter((block) => block.nominationCount > 0)
              .map((block) => (
                <section key={block.category} className="ja-sl-block">
                  <header className="ja-sl-block__head">
                    <div>
                      <div className="ja-sl-block__kicker">Award category</div>
                      <h2>{block.category}</h2>
                    </div>
                    <div className="ja-sl-block__meta">
                      <span>
                        <FileText size={14} /> {block.nominationCount} nomination
                        {block.nominationCount === 1 ? "" : "s"}
                      </span>
                      <span>
                        <Star size={14} /> {block.totalShortlists} shortlist
                        {block.totalShortlists === 1 ? "" : "s"}
                      </span>
                    </div>
                  </header>

                  <div className="ja-sl-table-wrap">
                    <table className="ja-sl-table">
                      <thead>
                        <tr>
                          <th>Nomination</th>
                          <th>Shortlisted by jury</th>
                          <th>Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        {block.nominations.map((entry) => {
                          const n = entry.nomination || {};
                          const name = [n.title, n.firstName, n.lastName]
                            .filter(Boolean)
                            .join(" ");
                          return (
                            <tr key={String(n._id || Math.random())}>
                              <td>
                                <strong>{n.companynm || "—"}</strong>
                                <div className="ja-sl-sub">{name || n.email || "—"}</div>
                              </td>
                              <td>
                                <div className="ja-sl-jury">
                                  {(entry.shortlistedBy || []).map((pick) => (
                                    <span
                                      key={String(pick.shortlistId || pick.jury?._id)}
                                      className="ja-sl-chip"
                                      title={pick.jury?.email || ""}
                                    >
                                      <Check size={12} />
                                      {pick.jury?.name || pick.jury?.email || "Jury"}
                                    </span>
                                  ))}
                                </div>
                              </td>
                              <td>
                                <strong className="ja-sl-count">{entry.count}</strong>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </section>
              ))}
          </div>
        )
      ) : loading ? (
        <div className="ja-loading">
          <div className="ja-skeleton" />
          <div className="ja-skeleton" />
          <div className="ja-skeleton" />
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="ja-empty">
          <Scale size={36} />
          <h3>{query ? "No matches" : "No jury users yet"}</h3>
          <p>
            {query
              ? "Try another search."
              : "Create a jury account to assign categories and nominations."}
          </p>
          {!query && (
            <button type="button" className="ja-btn ja-btn--accent" onClick={openCreate}>
              <UserPlus size={18} /> Add Jury User
            </button>
          )}
        </div>
      ) : (
        <div className="ja-grid">
          {filteredUsers.map((user, i) => {
            const cats = user.assignedCategories || [];
            const noms = user.assignedNominations || [];
            const active = user.isActive !== false;
            return (
              <motion.article
                key={user._id}
                className="ja-card"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.04, 0.24), duration: 0.35 }}
              >
                <div className="ja-card__top">
                  <div className="ja-avatar">{initials(user.name, user.email)}</div>
                  <span className={`ja-status${active ? " is-active" : ""}`}>
                    {active ? "Active" : "Disabled"}
                  </span>
                </div>
                <h3>{user.name || "Unnamed jury"}</h3>
                <div className="ja-card__email">
                  <Mail size={14} /> {user.email}
                </div>
                <div className="ja-card__metrics">
                  <div>
                    <Award size={14} />
                    <strong>{cats.length}</strong>
                    <span>categories</span>
                  </div>
                  <div>
                    <FileText size={14} />
                    <strong>{noms.length}</strong>
                    <span>nominations</span>
                  </div>
                </div>
                {cats.length > 0 && (
                  <div className="ja-card__tags">
                    {cats.slice(0, 2).map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                    {cats.length > 2 && <em>+{cats.length - 2}</em>}
                  </div>
                )}
                <div className="ja-card__actions">
                  <button type="button" className="ja-btn ja-btn--ghost" onClick={() => openEdit(user)}>
                    <Pencil size={15} /> Edit
                  </button>
                  <button
                    type="button"
                    className="ja-btn ja-btn--danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      )}

      <style jsx global>{`
        .jury-admin {
          --ja-red: #c8102e;
          --ja-red-deep: #8a0b1f;
          --ja-ink: #171516;
          --ja-muted: #6b625c;
          --ja-line: #e8e0d8;
          --ja-paper: #fffaf6;
          --ja-panel: #ffffff;
          font-family: "Outfit", system-ui, sans-serif;
          color: var(--ja-ink);
        }

        .ja-hero {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 22px;
          padding: 28px;
          border-radius: 24px;
          background:
            radial-gradient(700px 200px at 100% 0%, rgba(200, 16, 46, 0.22), transparent 50%),
            linear-gradient(135deg, #171516 0%, #2a181c 50%, #5c0d1a 100%);
          color: #ffffff !important;
          position: relative;
          overflow: hidden;
        }

        .ja-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
          background-size: 26px 26px;
          pointer-events: none;
        }

        .ja-hero__copy,
        .ja-hero .ja-btn,
        .ja-hero__actions {
          position: relative;
          z-index: 1;
        }

        .ja-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }

        .ja-view-toggle {
          display: inline-flex;
          padding: 4px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        .ja-view-toggle button {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.78);
          font: inherit;
          font-size: 13px;
          font-weight: 700;
          padding: 9px 14px;
          border-radius: 11px;
          cursor: pointer;
        }

        .ja-view-toggle button.is-active {
          background: #fff;
          color: #1a1412;
        }

        .ja-hero__copy {
          color: #ffffff;
        }

        .ja-hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.14);
          padding: 6px 12px;
          border-radius: 999px;
          margin-bottom: 12px;
          color: #ffffff;
        }

        .ja-hero h1 {
          margin: 0 0 8px;
          font-family: "Fraunces", Georgia, serif;
          font-size: clamp(28px, 4vw, 38px);
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: #ffffff !important;
        }

        .ja-hero p {
          margin: 0;
          max-width: 520px;
          color: #ffffff !important;
          opacity: 0.9;
          line-height: 1.55;
          font-size: 15px;
        }

        .ja-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin-bottom: 18px;
        }

        .ja-stat {
          display: flex;
          gap: 14px;
          align-items: center;
          background: var(--ja-panel);
          border: 1px solid var(--ja-line);
          border-radius: 18px;
          padding: 16px 18px;
          box-shadow: 0 10px 30px rgba(23, 21, 22, 0.04);
        }

        .ja-stat__icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: rgba(200, 16, 46, 0.1);
          color: var(--ja-red);
          flex-shrink: 0;
        }

        .ja-stat__label {
          font-size: 12px;
          font-weight: 700;
          color: var(--ja-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .ja-stat__value {
          font-family: "Fraunces", Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          line-height: 1.1;
        }

        .ja-toolbar {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .ja-search {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          border: 1px solid var(--ja-line);
          border-radius: 14px;
          padding: 12px 14px;
          color: var(--ja-muted);
        }

        .ja-search--sm {
          margin-bottom: 12px;
          padding: 10px 12px;
          border-radius: 12px;
        }

        .ja-search input {
          flex: 1;
          border: none;
          outline: none;
          font: inherit;
          font-size: 14px;
          background: #fff;
          color: var(--ja-ink);
        }

        .ja-search select {
          flex: 1;
          border: none;
          outline: none;
          font: inherit;
          font-size: 14px;
          background: #fff;
          color: var(--ja-ink);
          cursor: pointer;
        }

        .ja-toolbar__hint {
          font-size: 13px;
          font-weight: 700;
          color: var(--ja-muted);
          white-space: nowrap;
        }

        .ja-shortlists {
          display: grid;
          gap: 18px;
        }

        .ja-sl-block {
          background: #fff;
          border: 1px solid var(--ja-line);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(26, 20, 18, 0.04);
        }

        .ja-sl-block__head {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          align-items: flex-end;
          padding: 20px 22px;
          background: linear-gradient(135deg, #fff7f8, #fff);
          border-bottom: 1px solid var(--ja-line);
        }

        .ja-sl-block__kicker {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ja-red, #c8102e);
          margin-bottom: 6px;
        }

        .ja-sl-block__head h2 {
          margin: 0;
          font-family: "Fraunces", Georgia, serif;
          font-size: 22px;
          letter-spacing: -0.02em;
          max-width: 720px;
          line-height: 1.25;
        }

        .ja-sl-block__meta {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          font-size: 13px;
          font-weight: 700;
          color: var(--ja-muted);
        }

        .ja-sl-block__meta span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .ja-sl-table-wrap {
          overflow-x: auto;
        }

        .ja-sl-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 640px;
        }

        .ja-sl-table th,
        .ja-sl-table td {
          text-align: left;
          padding: 14px 18px;
          border-bottom: 1px solid var(--ja-line);
          vertical-align: top;
        }

        .ja-sl-table th {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--ja-muted);
          background: #faf8f7;
        }

        .ja-sl-table tbody tr:last-child td {
          border-bottom: none;
        }

        .ja-sl-sub {
          margin-top: 4px;
          font-size: 13px;
          color: var(--ja-muted);
        }

        .ja-sl-jury {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .ja-sl-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #fff8e1;
          border: 1px solid #e6c76a;
          color: #7a5c00;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 10px;
          border-radius: 999px;
        }

        .ja-sl-count {
          font-family: "Fraunces", Georgia, serif;
          font-size: 22px;
          color: var(--ja-red, #c8102e);
        }

        .ja-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          border-radius: 12px;
          padding: 12px 18px;
          font: inherit;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .ja-btn:hover {
          transform: translateY(-1px);
        }

        .ja-btn--primary {
          background: #fff;
          color: var(--ja-ink);
        }

        .ja-btn--accent {
          background: linear-gradient(135deg, var(--ja-red), var(--ja-red-deep));
          color: #fff;
          box-shadow: 0 10px 24px rgba(200, 16, 46, 0.25);
        }

        .ja-btn--ghost {
          background: #fff;
          color: var(--ja-ink);
          border: 1px solid var(--ja-line);
        }

        .ja-btn--danger {
          background: #fff5f5;
          color: #b91c1c;
          border: 1px solid #fecaca;
          padding: 12px 14px;
        }

        .ja-icon-btn {
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 12px;
          background: #f3ebe3;
          color: var(--ja-ink);
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        .ja-form {
          background: var(--ja-paper);
          border: 1px solid var(--ja-line);
          border-radius: 22px;
          padding: 24px;
          margin-bottom: 22px;
          box-shadow: 0 18px 50px rgba(23, 21, 22, 0.08);
        }

        .ja-form__head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 20px;
        }

        .ja-form__kicker {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ja-red);
          margin-bottom: 4px;
        }

        .ja-form__head h2 {
          margin: 0;
          font-family: "Fraunces", Georgia, serif;
          font-size: 24px;
          letter-spacing: -0.02em;
        }

        .ja-form__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 16px;
        }

        .ja-field label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--ja-muted);
          margin-bottom: 6px;
        }

        .ja-field input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid var(--ja-line);
          font: inherit;
          font-size: 14px;
          outline: none;
          background: #fff;
          color: var(--ja-ink);
        }

        .ja-field input:focus {
          border-color: #f0c9cf;
          box-shadow: 0 0 0 4px rgba(200, 16, 46, 0.08);
        }

        .ja-field input:disabled {
          opacity: 0.7;
          background: #f7f3ef;
        }

        .ja-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
          text-align: left;
          border: 1px solid var(--ja-line);
          background: #fff;
          border-radius: 14px;
          padding: 14px 16px;
          margin-bottom: 20px;
          cursor: pointer;
          font: inherit;
        }

        .ja-toggle__track {
          width: 46px;
          height: 28px;
          border-radius: 999px;
          background: #ddd4cb;
          position: relative;
          flex-shrink: 0;
          transition: background 0.2s ease;
        }

        .ja-toggle__thumb {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #fff;
          transition: transform 0.2s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .ja-toggle.is-on .ja-toggle__track {
          background: var(--ja-red);
        }

        .ja-toggle.is-on .ja-toggle__thumb {
          transform: translateX(18px);
        }

        .ja-toggle strong {
          display: block;
          font-size: 14px;
        }

        .ja-toggle small {
          display: block;
          color: var(--ja-muted);
          font-size: 12px;
          margin-top: 2px;
        }

        .ja-block {
          margin-bottom: 20px;
        }

        .ja-block__head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .ja-block__head h3 {
          margin: 0;
          font-size: 15px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .ja-chip-count {
          font-size: 12px;
          font-weight: 700;
          color: var(--ja-red);
          background: #fff5f6;
          border: 1px solid #f7d4da;
          padding: 4px 10px;
          border-radius: 999px;
        }

        .ja-help {
          margin: 0 0 10px;
          font-size: 13px;
          color: var(--ja-muted);
        }

        .ja-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          max-height: 200px;
          overflow-y: auto;
          padding: 12px;
          border: 1px solid var(--ja-line);
          border-radius: 16px;
          background: #fff;
        }

        .ja-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid var(--ja-line);
          background: #fffaf6;
          color: var(--ja-ink);
          border-radius: 999px;
          padding: 8px 12px;
          font: inherit;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
          text-align: left;
        }

        .ja-chip.is-on {
          background: var(--ja-ink);
          border-color: var(--ja-ink);
          color: #fff;
        }

        .ja-nom-list {
          max-height: 260px;
          overflow-y: auto;
          border: 1px solid var(--ja-line);
          border-radius: 16px;
          background: #fff;
        }

        .ja-nom {
          width: 100%;
          display: flex;
          gap: 12px;
          align-items: flex-start;
          text-align: left;
          padding: 12px 14px;
          border: none;
          border-bottom: 1px solid #f1ece7;
          background: transparent;
          cursor: pointer;
          font: inherit;
          color: inherit;
        }

        .ja-nom:last-child {
          border-bottom: none;
        }

        .ja-nom.is-on {
          background: #fff7f8;
        }

        .ja-check {
          width: 22px;
          height: 22px;
          border-radius: 7px;
          border: 1.5px solid #d6cdc4;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          margin-top: 1px;
          color: #fff;
        }

        .ja-check.is-on {
          background: var(--ja-red);
          border-color: var(--ja-red);
        }

        .ja-nom__meta strong {
          display: block;
          font-size: 14px;
          margin-bottom: 2px;
        }

        .ja-nom__meta small {
          color: var(--ja-muted);
          font-size: 12px;
          line-height: 1.4;
        }

        .ja-form__actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          flex-wrap: wrap;
        }

        .ja-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }

        .ja-card {
          background: #fff;
          border: 1px solid var(--ja-line);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 12px 32px rgba(23, 21, 22, 0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .ja-card:hover {
          transform: translateY(-3px);
          border-color: #f0c9cf;
          box-shadow: 0 18px 40px rgba(200, 16, 46, 0.1);
        }

        .ja-card__top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 14px;
        }

        .ja-avatar {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--ja-red), var(--ja-red-deep));
          color: #fff;
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 15px;
        }

        .ja-status {
          font-size: 11px;
          font-weight: 800;
          padding: 5px 10px;
          border-radius: 999px;
          background: #fef2f2;
          color: #b91c1c;
        }

        .ja-status.is-active {
          background: #ecfdf5;
          color: #047857;
        }

        .ja-card h3 {
          margin: 0 0 6px;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .ja-card__email {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--ja-muted);
          font-size: 13px;
          margin-bottom: 14px;
          word-break: break-all;
        }

        .ja-card__metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 12px;
        }

        .ja-card__metrics > div {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
          background: var(--ja-paper);
          border: 1px solid var(--ja-line);
          border-radius: 12px;
          padding: 10px;
          font-size: 12px;
          color: var(--ja-muted);
        }

        .ja-card__metrics strong {
          color: var(--ja-ink);
          font-size: 16px;
        }

        .ja-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 14px;
        }

        .ja-card__tags span {
          font-size: 11px;
          font-weight: 700;
          background: #fff5f6;
          border: 1px solid #f7d4da;
          color: var(--ja-red-deep);
          border-radius: 8px;
          padding: 4px 8px;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .ja-card__tags em {
          font-style: normal;
          font-size: 11px;
          font-weight: 800;
          color: var(--ja-red);
          align-self: center;
        }

        .ja-card__actions {
          display: flex;
          gap: 8px;
        }

        .ja-card__actions .ja-btn {
          flex: 1;
          padding: 10px 12px;
        }

        .ja-card__actions .ja-btn--danger {
          flex: 0;
        }

        .ja-empty,
        .ja-empty-inline {
          text-align: center;
          color: var(--ja-muted);
        }

        .ja-empty {
          padding: 56px 24px;
          background: #fff;
          border: 1px dashed var(--ja-line);
          border-radius: 22px;
        }

        .ja-empty h3 {
          margin: 12px 0 6px;
          color: var(--ja-ink);
          font-family: "Fraunces", Georgia, serif;
          font-size: 22px;
        }

        .ja-empty p {
          margin: 0 0 18px;
          max-width: 360px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.5;
        }

        .ja-empty-inline {
          padding: 18px;
          width: 100%;
          font-size: 13px;
        }

        .ja-loading {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }

        .ja-skeleton {
          height: 220px;
          border-radius: 20px;
          background: linear-gradient(90deg, #f3ebe3, #fffaf6, #f3ebe3);
          background-size: 200% 100%;
          animation: jaPulse 1.2s ease infinite;
        }

        @keyframes jaPulse {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }

        @media (max-width: 980px) {
          .ja-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .ja-stats {
            grid-template-columns: 1fr;
          }

          .ja-form__grid {
            grid-template-columns: 1fr;
          }

          .ja-hero {
            padding: 22px;
          }
        }
      `}</style>
    </div>
  );
}
