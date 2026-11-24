import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h2>🎵 Music Playlist</h2>

      <Link to="/">Home</Link>{" "}
      <Link to="/songs">Songs</Link>{" "}
      <Link to="/playlist">Playlist</Link>
    </div>
  );
}

export default Navbar;