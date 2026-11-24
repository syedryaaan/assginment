import SongCard from "../components/SongCard";

function Playlist({ playlist, togglePlaylist }) {


  const totalDuration = playlist.reduce(
    (total, song) => total + song.duration,
    0
  );

  const minutes = Math.floor(totalDuration / 60);
  const seconds = totalDuration % 60;

  return (
    <div>
      <h1>My Playlist ❤️</h1>

      {playlist.length === 0 ? (

        <h2>Your playlist is empty</h2>

      ) : (

        <div>
          <h3>Total Songs: {playlist.length}</h3>

          <h3>
            Total Duration: {minutes}:{String(seconds).padStart(2, "0")}
          </h3>

          {playlist.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              togglePlaylist={togglePlaylist}
              isInPlaylist={true}
            />
          ))}
        </div>

      )}
    </div>
  );
}

export default Playlist;