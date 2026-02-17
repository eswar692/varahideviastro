import { Outlet } from "react-router-dom";
import Header from "./Genaral/Header";
import CallToAction from "./Genaral/CallToAction";
import Footer from "./Genaral/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <CallToAction />
      <Footer />
    </>
  );
};

export default MainLayout;
