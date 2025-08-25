import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaHotel, FaUmbrellaBeach, FaHeart } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { CiStreamOn } from "react-icons/ci";
import "./NavbarMain.css";

const NavbarMain = () => {
  return (
    <>
      <input type="checkbox" id="menuToggle" hidden />
      <label htmlFor="menuToggle" className="navbar-toggle">☰</label>

      <div className="Navbar_Main">
        <Container>
          <div className="Navbar_Main-MenuBar">
            <div className="Navbar_Main-LeftGroup">
              <Link to="/" className="logo-section">
                <img className="logo-main" src="/Images/tour/climax-logo.png" alt="Logo" />
              </Link>

              <div className="nav-links">
                <Link to="/" className="nav-item-link">
                  <IoMdHome className="nav-icon" /> Home
                </Link>

                {/* 🌐 International Dropdown */}
                <div className="nav-item-link dropdown">
                  <div className="dropdown-toggle">
                    <FaHotel className="nav-icon" />
                    International Destination
                  </div>
                  <div className="dropdown-menu">
                    <Link to="/europe" className="dropdown-item">Europe</Link>
                    <Link to="/bali" className="dropdown-item">Bali</Link>
                    <Link to="/mauritius" className="dropdown-item">Mauritius</Link>
                    <Link to="/malaysia" className="dropdown-item">Malaysia</Link>
                    <Link to="australia" className="dropdown-item">Australia</Link>
                    <Link to="/japan" className="dropdown-item">Japan</Link>
                    <Link to="/france" className="dropdown-item">France</Link>
                    <Link to="/uk" className="dropdown-item">UK</Link>
                    <Link to="/switzerland" className="dropdown-item">Switzerland</Link>
                    <Link to="/africa" className="dropdown-item">Africa</Link>
                    <Link to="/spain" className="dropdown-item">Spain</Link>
                    <Link to="/france" className="dropdown-item">France</Link>
                    <Link to="/italy" className="dropdown-item">Italy</Link>
                  </div>
                </div>

                {/* 🏖️ Domestic Dropdown */}
                <div className="nav-item-link dropdown">
                  <div className="dropdown-toggle">
                    <FaUmbrellaBeach className="nav-icon" />
                    Domestic Destination
                  </div>
                  <div className="dropdown-menu">
                    <Link to="/aandaman-and-nicobar" className="dropdown-item">Andaman and Nicobar</Link>
                    <Link to="/kerala" className="dropdown-item">Kerala</Link>
                    <Link to="/northeast" className="dropdown-item">North East</Link>
                    <Link to="/lakshadweep" className="dropdown-item">Lakshadweep</Link>
                    <Link to="/himachal-pradesh" className="dropdown-item">Himachal Pradesh</Link>
                    <Link to="/ladakh" className="dropdown-item">Ladakh</Link>
                    <Link to="/goa" className="dropdown-item">Goa</Link>
                  </div>
                </div>

                <Link to="/honeymoon" className="nav-item-link">
                  <CiStreamOn  className="nav-icon" /> Treks
                </Link>
              </div>
            </div>
                <div>
              <a href="tel:+919599408232" className="contact-btn">
                <MdCall className="nav-icon" style={{ color: 'white' }} /> +91-9599408232
              </a>
              </div>    
          </div>
        </Container>
      </div>
    </>
  );
};

export default NavbarMain;
