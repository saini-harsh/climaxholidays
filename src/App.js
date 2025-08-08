import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import Home from "./component/TourPackages/HomePage/Home";
import Lists from "./component/TourPackages/ListPage/Lists";
import Detail from "./component/TourPackages/Detailpage/Detail";
import FooterSection from "./component/TourPackages/Footer/FooterSection";
import NavbarMain from "./component/TourPackages/Navbar/NavbarMain";
import FooterClimax from "./component/TourPackages/Footer/FooterClimax";
import AboutUs from './component/TourPackages/AboutUs/AboutUs';
import PrivacyPolicy from './component/TourPackages/PrivacyPolicy/PrivacyPolicy';
import TermCondition from './component/TourPackages/TermsConditions/TermCondition';
import ContactUs from './component/TourPackages/ContactUs/ContactUs';

// ✅ ScrollToTop component defined here
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on route change
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div>
      <ScrollToTop /> {/* ✅ Automatically scrolls up on each route change */}
      <NavbarMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pack" element={<Lists />} />
        <Route path="/:pack/:fullDetails" element={<Detail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermCondition />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <FooterSection />
      <FooterClimax />
    </div>
  );
}

export default App;
