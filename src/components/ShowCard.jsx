
import { Link } from "react-router";

function ShowCard({ show }) {
  return (
    <div className="card">
      <Link to={`/shows/${show.id}`}>
        <img
          src={
            show.image?.medium ||
            "https://placehold.co/210x295?text=No+Image"
          }
          alt={show.name}
        />
      </Link>

      <div className="card-info">
        <h3>{show.name}</h3>

        <p>{show.genres.join(" • ") || "No genres"}</p>

        <p>⭐ {show.rating.average ?? "N/A"}</p>

        <Link to={`/shows/${show.id}`} className="details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;
