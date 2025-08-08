import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./FooterClimax.css";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";    
// import SignUp from "../Navbar/SignUp";

const getTomorrowDate = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow.toISOString().split("T")[0];
};

const tomorrowDate = getTomorrowDate();

const FooterClimax = () => {

  const internationalHolidayPackages = [
    { title: "Dubai " },
    { title: "Malaysia " },
    { title: "Singapore" },
    { title: "Thailand " },
    { title: "Bali" },
    { title: "Srilanka " },
    { title: "Europe " },
    { title: "Mauritius" },
    { title: "Maldives" },
  ];
  const holidayPackages = [
    { title: "Kashmir Holiday" },
    { title: "Leh Ladakh" },
    { title: "Goa Holidays" },
    { title: "Andaman Holidays" },
    { title: "Kerala " },
    { title: "Himachal" },
  ];
  const footerLinks = [
    { title: "About Us", link: "/about-us" },
    { title: "Privacy Policy", link: "privacy-policy" },
    { title: "Terms & Conditions", link: "terms-conditions" },
    { title: "Contact Us", link: "/contact" },
  ];

  const nav = [
    { title: "Book Flight", link: "/" },
    { title: "Hotel Booking", link: "/hotel" },
    { title: "Tour Packages", link: "/tour" },
    { title: "Bus", link: "/buses" },

    { title: "Cabs", link: "/cabs" },
    { title: "Insurance", link: "/insurance" },
    { title: "Forex", link: "/forex" },
    { title: "Visa", link: "/visa" },
  ];

  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   const handleLogout = () => {
  //     logout();
  //   };
  //   const { isAuthenticated, logout } = useAuth();

  const [openIndex, setOpenIndex] = useState(null); // Only one active index

  const toggleSection = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index)); // Close if same, open new
  };
  const sections = [
    {
      title: "Our Products",
      links: nav.map((link) => ({
        text: link.title,
        href: link.link || "#",
      })),
    },
    {
      title: "Climax Info",
      links: footerLinks.map((link) => ({
        text: link.title,
        href: link.link || "#",
      })),
    },

    {
      title: "Popular Domestic Tour Package",
      links: holidayPackages.map((pkg) => ({
        text: `${pkg.title} Tour Packages`,
        href: "#",
      })),
    },
    {
      title: "Popular International Tour Package",
      links: internationalHolidayPackages.map((pkg) => ({
        text: `${pkg.title} Tour Packages`,
        href: "#",
      })),
    },
  ];
  const location = useLocation();

  return (
    <>

      <div className="footer_copywrite_tg">
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div className="css-11ze7cv">
                <div className="css-u4p24i" style={{ marginBottom: "10px" }}>
                  <a href="https://www.instagram.com/climax.holidays?igsh=MTkwNjloNHJ2czBoMQ%3D%3D&utm_source=qr"
                    target="_blank"
                  >
                    <img
                      alt="instagram"
                      loading="lazy"
                      src="/Images/Icons/instagram.png"
                      className="footer_socials_imagess"
                      style={{ color: "transparent", marginRight: 8 }}
                    />
                  </a>
                  <a href="https://www.facebook.com/share/1BqWVk9vKw/?mibextid=wwXIfr"
                    target="_blank"
                  >
                    <img
                      alt="Facebook"
                      loading="lazy"
                      src="/Images/Icons/fb.png"
                      className="footer_socials_imagess"
                      style={{ color: "transparent", marginRight: 8 }}
                    />
                  </a>
                </div>
                <h2 className="css-1p4by0y">
                  © Copyrights Climax Holidays | All rights reserved | Designed & Developed with{" "}
                  <a href="https://www.eweblink.net/" target="_blank" rel="noopener noreferrer">
                    eWeblink </a>
                </h2>
              </div>
            </div>

            <div className=" css-j7qwjs">
              <div className="mb-3 css-11ze7cv">
                <h2 style={{ textAlign: "end" }} className="css-1p4by0y">
                  Security &amp; Payments
                </h2>
                <div className="MuiStack-root css-u4p24i">
                  <img
                    alt="Ico Secured Sites"
                    className="footer_security_imagess"
                    loading="lazy"
                    src="https://www.yatra.com/react-home/images/securityPayments/icoSecuredSites.svg"
                    style={{ color: "transparent", marginRight: 16 }}
                  />
                  <img
                    alt="Veri sign secured"
                    loading="lazy"
                    className="footer_security_imagess"
                    src="https://www.yatra.com/react-home/images/securityPayments/veriSignSecured.svg"
                    style={{ color: "transparent", marginRight: 16 }}
                  />
                  <img
                    alt="Net Banking"
                    loading="lazy"
                    className="footer_security_imagess"
                    src="https://www.yatra.com/react-home/images/securityPayments/netBanking.svg"
                    style={{ color: "transparent", marginRight: 16 }}
                  />
                  <img
                    alt="Easy Emi option"
                    loading="lazy"
                    className="footer_security_imagess"
                    src="https://www.yatra.com/react-home/images/securityPayments/emiOption.svg"
                    style={{ color: "transparent", marginRight: 16 }}
                  />
                  <img
                    alt="Visa Card"
                    loading="lazy"
                    className="footer_security_imagess"
                    src=" https://www.yatra.com/react-home/images/securityPayments/visa.svg"
                    style={{ color: "transparent", marginRight: 16 }}
                  />
                  <img
                    alt="Master Card"
                    loading="lazy"
                    className="footer_security_imagess"
                    src="https://www.yatra.com/react-home/images/securityPayments/masterCard.svg"
                    style={{ color: "transparent", marginRight: 16 }}
                  />
                  <img
                    alt="Rupay Card"
                    loading="lazy"
                    className="footer_security_imagess"
                    src="https://www.yatra.com/react-home/images/securityPayments/rupay.svg"
                    style={{ color: "transparent", marginRight: 16 }}
                  />
                  <img
                    alt="Diners Club"
                    loading="lazy"
                    className="footer_security_imagess"
                    src="https://www.yatra.com/react-home/images/securityPayments/dinersClub.svg"
                    style={{ color: "transparent", marginRight: 16 }}
                  />
                  <img
                    alt="American Express"
                    loading="lazy"
                    className="footer_security_imagess"
                    src="https://www.yatra.com/react-home/images/securityPayments/americanExpress.svg"
                    style={{ color: "transparent", marginRight: 16 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>

      </div>
        <div className="whatsapp-button">
          <a
            href="https://api.whatsapp.com/send?phone=919599408232"
            className="wa-widget-send-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              className="wa-messenger-svg-whatsapp wh-svg-icon"
            >
              <path
                d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                fillRule="evenodd"
              />
            </svg>
          </a>
          
        </div>

    </>
  );
};

export default FooterClimax;
