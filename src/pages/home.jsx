import "../App.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export const Home = () => {
  return (
      <div className="App">
        <Navbar />
        <Hero />
        <Footer />
      </div>
  );
}

export default Home;