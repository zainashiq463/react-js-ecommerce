import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useAuth } from "../context/useAuth";

export default function Navbar() {
  const { cart } = useCart();
  const { currentUser } = useAuth();

  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/" className="h-text">
          <h1>Eshop</h1>
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/cart" className="nav-link">
          Cart ({cart.length})
        </Link>
        {currentUser ? (
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        ) : (
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        )}
      </div>
    </div>
  );
}
