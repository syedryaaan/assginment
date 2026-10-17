
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function Details() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    setShow(null);

    Promise.all([
      fetch(`https://api.tvmaze.com/shows/${id}`),
      fetch(`https://api.tvmaze.com/shows/${id}/cast`)
    ])
      .then(async ([showRes, castRes]) => {
        if (!showRes.ok || !castRes.ok) {
          throw new Error("Failed to load show");
        }

        return Promise.all([showRes.json(), castRes.json()]);
      })
      .then(([showData, castData]) => {
        setShow(showData);
        setCast(castData);
      })
      .catch(() => setError("Could not load this show."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h2 className="message">Loading details...</h2>;

  if (error) {
    return (
      <div className="page">
        <h2>{error}</h2>
        <Link to="/shows">Back to Shows</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/shows">← Back to Shows</Link>

      <div className="detail">
        <img
          src={
            show.image?.original ||
            "https://placehold.co/300x420?text=No+Image"
          }
          alt={show.name}
        />

        <div>
          <h1>{show.name}</h1>
          <p>Genres: {show.genres.join(", ") || "Unknown"}</p>
          <p>Language: {show.language || "Unknown"}</p>
          <p>Premiered: {show.premiered || "Unknown"}</p>
          <p>⭐ Rating: {show.rating.average ?? "N/A"}</p>

          <h2>About the Show</h2>
          <p>
            {show.summary
              ? show.summary.replace(/<[^>]+>/g, "")
              : "No summary available."}
          </p>
        </div>
      </div>

      <h2>Cast</h2>

      {cast.length === 0 ? (
        <p>No cast information available.</p>
      ) : (
        <div className="shows">
          {cast.map(item => (
            <div className="card" key={item.person.id}>
              <img
                src={
                  item.person.image?.medium ||
                  "https://placehold.co/210x295?text=No+Image"
                }
                alt={item.person.name}
              />
              <div className="card-info">
                <h3>{item.person.name}</h3>
                <p>As {item.character.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Details;
