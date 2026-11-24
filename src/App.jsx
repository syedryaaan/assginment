 
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import songs from "./songs";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import SongDetails from "./pages/SongDetails";
import Playlist from "./pages/Playlist";

function App() {

  const [playlist, setPlaylist] = useState([]);

  function togglePlaylist(id) {

    const alreadyAdded = playlist.some(
      (song) => song.id === id
    );

    if (alreadyAdded) {

      const newPlaylist = playlist.filter(
        (song) => song.id !== id
      );

      setPlaylist(newPlaylist);

    } else {

      const selectedSong = songs.find(
        (song) => song.id === id
      );

      setPlaylist([...playlist, selectedSong]);

    }
  }

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              songs={songs}
              playlist={playlist}
            />
          }
        />

        <Route
          path="/songs"
          element={
            <Songs
              songs={songs}
              playlist={playlist}
              togglePlaylist={togglePlaylist}
            />
          }
        />

        <Route
          path="/songs/:id"
          element={
            <SongDetails
              songs={songs}
            />
          }
        />

        <Route
          path="/playlist"
          element={
            <Playlist
              playlist={playlist}
              togglePlaylist={togglePlaylist}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
