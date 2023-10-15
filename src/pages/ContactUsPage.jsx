import "../App.css";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export const ContactUsPage = () => {
  return (
    <div className="App">
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
