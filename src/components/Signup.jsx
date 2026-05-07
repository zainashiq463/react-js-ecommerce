import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <p className="eyebrow">Create account</p>
        <h2>Join Eshop</h2>
        <p className="auth-copy">Create an account before checkout so your shopping flow feels like a real ecommerce app.</p>

        <form className="auth-form" onSubmit={handleSignup}>
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            className="search-box"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            className="search-box"
            type="password"
            placeholder="Minimum 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button className="button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating account..." : "Sign up"}
          </button>
        </form>

        <Link to="/" className="text-link">
          Back to products
        </Link>
      </div>
    </section>
  );
}
