import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Servises";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/Privacy-policy";
import TermsOfService from "./pages/termsofservice";
import MainLayout from "./MainLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Route>

      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
