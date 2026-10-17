
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="hero">
      <h1>404 — Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}

export default NotFound;
