import "../App.css";
import AboutUsSection from "../components/AboutUsSection";
import Domains from "../components/Domains";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SendUsMessage from "../components/SendUsMessage";
import Carousel from "../components/Carousel";

export const Home = () => {
  const slides = [
    "images/img1.jpg",
    "https://via.placeholder.com/800x300?text=Slide%202",
    "https://via.placeholder.com/800x300?text=Slide%203",
  ];
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUsSection />
      <Domains />

      <div className="bg-[url('https://cdn.create.vista.com/api/media/medium/322184424/stock-photo-blue-yellow-red-green-background-texture?token=')] p-5 text-center">
        <h1 className="text-white text-2xl md:text-4xl font-bold my-1">Gallery</h1>
        <Carousel slides={slides} />
      </div>
      <SendUsMessage />
      <Footer />
    </div>
  );
};

export default Home;
