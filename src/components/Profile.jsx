import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function Profile() {
  const { currentUser, authLoading, logout } = useAuth();

  if (authLoading) {
    return <p className="empty-state">Loading profile...</p>;
  }

  if (!currentUser) {
    return <Navigate to="/signup" replace />;
  }

  return (
    <section className="profile-page">
      <div className="profile-card">
        <p className="eyebrow">My account</p>
        <h2>Profile</h2>

        <div className="profile-avatar">
          {currentUser.email?.charAt(0).toUpperCase()}
        </div>

        <div className="profile-info">
          <span>Email</span>
          <strong>{currentUser.email}</strong>
        </div>

        <div className="profile-info">
          <span>Account ID</span>
          <strong>{currentUser.uid}</strong>
        </div>

        <div className="profile-actions">
          <Link to="/" className="secondary-button">
            Continue shopping
          </Link>
          <button className="remove-button" type="button" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}
