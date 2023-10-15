import "../App.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Team from "../components/Teams";

export const Teams = () => {
  return (
    <div className="App">
      <Navbar />
      <Team />
      <Footer />
    </div>
  );
};

export default Teams;
