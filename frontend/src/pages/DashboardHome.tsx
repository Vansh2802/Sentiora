import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function DashboardHome() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0ede8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "inherit",
        padding: "2rem 1rem",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "1rem",
          boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
          padding: "2.5rem",
          width: "100%",
          maxWidth: "28rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#1c1c1c",
            margin: "0 0 0.25rem",
          }}
        >
          Sentiora
        </h1>
        <p
          style={{
            fontSize: "0.6875rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            color: "#5a7a5a",
            textTransform: "uppercase",
            margin: "0 0 2rem",
          }}
        >
          Personal Digital Vault
        </p>

        <div
          style={{
            background: "#f7f6f4",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <p style={{ margin: "0 0 0.5rem", fontSize: "0.8125rem", color: "#6b6b6b" }}>
            Signed in as
          </p>
          <p
            style={{ margin: "0", fontWeight: 600, color: "#1c1c1c", fontSize: "0.9375rem" }}
          >
            {user?.email}
          </p>
          {user?.profile?.display_name && (
            <p style={{ margin: "0.25rem 0 0", color: "#4a4a4a", fontSize: "0.875rem" }}>
              {user.profile.display_name}
            </p>
          )}
        </div>

        <p
          style={{
            background: "#f0fdf4",
            border: "1px solid #bbf7d0",
            color: "#15803d",
            borderRadius: "0.5rem",
            padding: "0.75rem",
            fontSize: "0.875rem",
            margin: "0 0 2rem",
          }}
        >
          ✓ Authentication is working. Phase 1 complete.
        </p>

        <button
          id="dashboard-logout-btn"
          onClick={handleLogout}
          style={{
            width: "100%",
            padding: "0.75rem",
            background: "#3d6142",
            color: "#fff",
            border: "none",
            borderRadius: "0.5rem",
            fontSize: "0.9375rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
