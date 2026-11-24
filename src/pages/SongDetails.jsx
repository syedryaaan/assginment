import { useParams } from "react-router-dom";

function SongDetails({ songs }) {

  const { id } = useParams();

  const song = songs.find(
    (item) => item.id === Number(id)
  );

  if (!song) {
    return <h1>Song not found</h1>;
  }

  return (
    <div>
      <h1>{song.title}</h1>

      <p>Artist: {song.artist}</p>
      <p>Genre: {song.genre}</p>
      <p>Album: {song.album}</p>
      <p>Year: {song.year}</p>
      <p>Streams: {song.streams}</p>
      <p>Duration: {Math.floor(song.duration / 60)}:{String(song.duration % 60).padStart(2, "0")}</p>
    </div>
  );
}

export default SongDetails;