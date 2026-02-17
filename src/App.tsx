import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Servises";
import Contact from "./pages/Contact";
import Header from "./Genaral/Header";
import Footer from "./Genaral/Footer";
import CallToAction from "./Genaral/CallToAction";
import PrivacyPolicy from "./pages/Privacy-policy";
import TermsOfService from "./pages/termsofservice";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<Home />} />
      </Routes>

      {/* <Footer /> */}
      <Footer />
      <CallToAction />
      {/* <FlotForm /> */}
    </div>
  );
};

export default App;
