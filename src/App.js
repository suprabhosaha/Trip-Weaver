import Landing from "./components/Landing/Landing";
import Navabar from "./components/Navbar/Navbar";
import Recents from "./components/Recents/Recents";
import ReviewShowcase from "./components/ReviewShowcase/ReviewShowcase";
import SearchedLocation from "./components/SearchedLocations/SearchedLocation";
import TopLocation from "./components/Top_location/TopLocation";

function App() {
  return (
    <div className="App">
      <Navabar />
      <Landing />
      <TopLocation />
      <Recents />
      <SearchedLocation />
      <ReviewShowcase />
    </div>
  );
}

export default App;
