import "./App.css";
import Ads from "./components/Ads";
import Footer from "./components/Footer";
import Live_Events from "./components/Live_Events";
import MusicStudio from "./components/MusicStudio";
import Navbar from "./components/Navbar";
import Premiere from "./components/Premiere";
import RecommendedMovies from "./components/RecommendedMovies";
import TrendingSearches from "./components/TrendingSearches";

function App() {
  return (
    <>
      <Navbar />
      <Ads />
      <RecommendedMovies />
      <Live_Events />
      <Premiere />
      <MusicStudio />
      <TrendingSearches />
      <Footer />
    </>
  );
}

export default App;
