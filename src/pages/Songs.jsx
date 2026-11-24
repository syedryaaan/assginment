import { useState } from "react";
import SongCard from "../components/SongCard";

function Songs({ songs, playlist, togglePlaylist }) {

  const [genre, setGenre] = useState("All");


  const filteredSongs = songs.filter((song) => {
    if (genre === "All") {
      return true;
    }

    return song.genre === genre;
  });

  return (
    <div>
      <h1>All Songs</h1>

      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option>All</option>
        <option>Romantic</option>
        <option>Motivational</option>
        <option>Sufi</option>
        <option>Punjabi</option>
      </select>

      <div>
        {filteredSongs.map((song) => {

          const isInPlaylist = playlist.some(
            (item) => item.id === song.id
          );

          return (
            <SongCard
              key={song.id}
              song={song}
              togglePlaylist={togglePlaylist}
              isInPlaylist={isInPlaylist}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Songs;