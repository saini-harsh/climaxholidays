import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/BannerSection.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <FaChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <FaChevronLeft />
  </div>
);

const BannerSection = () => {
  const [destination, setDestination] = useState("");
  const [isAutoSuggestVisible, setIsAutoSuggestVisible] = useState(false);
  const [trendingDestinations, setTrendingDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  const backgroundImages = [
    "./Images/tour/kerala_newbb.png",
    "./Images/tour/kashmir-banner-home.webp",
    "./Images/tour/australia-banner-home.webp",
    "./Images/tour/dubai_newbb.png",
  ];

  // ✅ Slider settings with custom arrows
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: false,
  };

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("https://admin.climaxholidays.com/api/HolidayPackages/destinations");
        const result = await response.json();
        if (result.success) {
          setTrendingDestinations(result.data);
        }
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };
    fetchDestinations();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setDestination(value);
    if (value.trim() === "") {
      setFilteredDestinations([]);
      return;
    }
    const filtered = trendingDestinations.filter((dest) =>
      dest.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDestinations(filtered);
    setIsAutoSuggestVisible(true);
  };

  const handleDestinationSelect = (dest) => {
    setDestination(dest.name);
    setIsAutoSuggestVisible(false);
    setFilteredDestinations([]);
    window.location.href = `/${dest.slug}`;
  };

  const handleSearchClick = () => {
    if (destination.trim() === "") return;
    const matched = trendingDestinations.find(
      (dest) => dest.name.toLowerCase() === destination.toLowerCase()
    );
    if (matched) {
      window.location.href = `/${matched.slug}`;
    } else {
      window.location.href = `/${destination.replace(/\s+/g, "-").toLowerCase()}`;
    }
  };

  return (
    <>
      

      <div className="holiday-banner-slider-wrapper">
        <div className="hero-shape style3">
          <img src="https://html.themeholy.com/tourm/assets/img/hero-shape-3.png" alt="" />
        </div>
        <Slider {...settings} className="background-slider">
          {backgroundImages.map((img, idx) => (
            <div key={idx}>
              <h2 className="headingbanner">
                Tour Packages with Climax Holidays
              </h2>
              <div
                className="holiday-banner"
                style={{
                  backgroundImage: `url('${img}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Container>
                  {/* <h2 style={{ fontSize: "50px", fontWeight: "bold", fontFamily: "Parisienne" }}>
                    Tour Packages with Climax Holiday
                  </h2> */}
                  {/* <p style={{ fontSize: "22px", marginTop: "10px" }}>
                    Plan Your Dream Vacation With Us
                  </p> */}

                  <div className="search_box_prnt">
                    <div className="search_box_wrapper">
                      <div className="search_box">
                        <img
                          src="https://images.emtcontent.com/holiday-img/home-img/search.svg"
                          alt="holidays"
                        />
                        <input
                          type="text"
                          placeholder="Enter Your Dream Destination!"
                          autoComplete="off"
                          value={destination}
                          onChange={handleInputChange}
                          onFocus={() => {
                            setIsAutoSuggestVisible(true);
                            if (destination.trim() === "") {
                              setFilteredDestinations(trendingDestinations);
                            }
                          }}
                          onBlur={() => setTimeout(() => setIsAutoSuggestVisible(false), 200)}
                        />
                        <button className="subm_btn" type="button" onClick={handleSearchClick}>
                          Search
                        </button>
                      </div>
                    </div>

                    {isAutoSuggestVisible && filteredDestinations.length > 0 && (
                      <div className="auto_sgtn">
                        <div className="d-flex align-items-center" style={{ padding: "10px 15px", gap: "15px" }}>
                          <img
                            src="https://images.emtcontent.com/holiday-img/home-img/cir_loc.svg"
                            alt="location"
                          />
                          <span>
                            <strong>Top Trending</strong> Holiday Destinations
                          </span>
                        </div>
                        <ul className="auto_sgtn_ul">
                          {filteredDestinations.map((dest, index) => (
                            <li key={index} className="d-flex align-items-center" onClick={() => handleDestinationSelect(dest)}>
                              <a className="d-flex align-items-center">
                                <div className="img_box ulimg">
                                  <img
                                    src={dest.image}
                                    alt={dest.name}
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = "https://images.emtcontent.com/holiday-img/home-img/city-100x.png";
                                    }}
                                  />
                                </div>
                                <div className="cont">
                                  <p>{dest.name}</p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </Container>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
    <path class="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
    c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
    c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
  </svg> */}
    </>
  );
};

export default BannerSection;
