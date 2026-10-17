
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">📺 ShowTime</Link>
      <Link to="/shows">Explore Shows</Link>
    </nav>
  );
}

export default Navbar;
