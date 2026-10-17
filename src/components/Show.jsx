
import { useState, useEffect } from "react";
import ShowCard from "./ShowCard";

function Shows() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows?page=0")
      .then(res => {
        if (!res.ok) throw new Error("Failed to load shows");
        return res.json();
      })
      .then(data => setShows(data.slice(0, 40)))
      .catch(() => setError("Could not load shows. Try again."))
      .finally(() => setLoading(false));
  }, []);

  const filteredShows = shows.filter(show =>
    show.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h2 className="message">Loading shows...</h2>;

  if (error) return <h2 className="message">{error}</h2>;

  return (
    <div className="page">
      <h1>Explore TV Shows</h1>
      <p className="subtitle">Find something amazing to watch.</p>

      <input
        className="search"
        type="text"
        placeholder="🔍 Search by show name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <p>{filteredShows.length} shows found</p>

      {filteredShows.length === 0 ? (
        <h3>No shows found. Try another name.</h3>
      ) : (
        <div className="shows">
          {filteredShows.map(show => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Shows;
