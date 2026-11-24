function SongCard({ song, togglePlaylist, isInPlaylist }) {
  const minutes = Math.floor(song.duration / 60);
  const seconds = song.duration % 60;

  const duration = `${minutes}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="card">

      <h2>{song.title}</h2>

      <p>Artist: {song.artist}</p>

      <p>Genre: {song.genre}</p>

      <p>Duration: {duration}</p>

      {/* Trending badge */}
      {song.streams >= 1000000 && <p>Trending 🔥</p>}

      {/* Playlist button */}
      <button onClick={() => togglePlaylist(song.id)}>
        {isInPlaylist ? "Remove from Playlist" : "Add to Playlist"}
      </button>

    </div>
  );
}

export default SongCard;