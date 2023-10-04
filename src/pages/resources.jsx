import "../App.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ResourcesShowcase from "../components/ResourcesShowcase";

export const Resources = () => {
  return (
    <div className="App">
      <Navbar />
      <ResourcesShowcase />
      <Footer />
    </div>
  );
};

export default Resources;
