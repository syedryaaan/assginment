
import { Link } from "react-router";

function Home() {
  return (
    <div className="hero">
      <p className="tag">YOUR ENTERTAINMENT HUB</p>
      <h1>Discover Your Next Favourite Show</h1>
      <p>
        Explore amazing TV shows, discover their stories,
        and meet the actors behind them.
      </p>
      <Link to="/shows" className="btn">
        Browse Shows →
      </Link>
    </div>
  );
}

export default Home;



