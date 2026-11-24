function Home({ songs, playlist }) {

  const trendingSongs = songs.filter(
    (song) => song.streams >= 1000000
  );

  return (
    <div>
      <h1>Welcome to Music Playlist 🎵</h1>

      <h2>Total Songs: {songs.length}</h2>

      <h2>Playlist Songs: {playlist.length}</h2>

      <h2>Trending Songs: {trendingSongs.length}</h2>
    </div>
  );
}

export default Home;