import "../App.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectShowcase from "../components/ProjectShowcase";

export const Projects = () => {
  return (
    <div className="App">
      <Navbar />
      <ProjectShowcase />
      <Footer />
    </div>
  );
};

export default Projects;
