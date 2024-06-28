import "./App.css";
import BoostLinks from "./Components/BoostLinks";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Statistics from "./Components/Statistics";
import UrlInput from "./Components/UrlInput";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <UrlInput />
      <Statistics />
      <BoostLinks />
      <Footer />
    </>
  );
}

export default App;
