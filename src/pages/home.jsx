import "../App.css";
import AboutUsSection from "../components/AboutUsSection";
import Domains from "../components/Domains";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SendUsMessage from "../components/SendUsMessage";

export const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUsSection />
      <Domains />
      <SendUsMessage />
      <Footer />
    </div>
  );
};

export default Home;
