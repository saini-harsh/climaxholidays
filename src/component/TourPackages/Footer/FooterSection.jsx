import React from 'react'
import './footer.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const FooterSection = () => {
  return (
    <>

      <footer className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12">
              <Link to="/">
                <img
                  src="/Images/tour/climax-logo.png"
                  className="img-fluid logo"
                  alt=""
                  srcSet=""
                />
              </Link>
              <p>
                Unlock exclusive deals and unbeatable offers with Climax Holidays competitive pricing and curated travel experiences.
              </p>
            </div>
            <div className="col-lg-3 col-12">
              <h5>Navigation</h5>
              <div className="bline2 cbg-grey" />
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-conditions">Terms & Conditions </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-12">
              <h5>Destinations</h5>
              <div className="bline2 cbg-grey" />
              <ul>
                <li><Link to="/europe">Europe</Link></li>
                <li><Link to="/bali">Bali</Link></li>
                <li><Link to="/mauritius">Mauritius</Link></li>
                <li><Link to="/malaysia">Malaysia</Link></li>
                <li><Link to="australia">Australia</Link></li>
                <li><Link to="/japan">Japan</Link></li>
                <li><Link to="/france">France</Link></li>
                <li><Link to="#/uk">UK</Link></li>
                <li><Link to="/switzerland">Switzerland</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-12">
              <h5>Contact Us</h5>
              <div className="bline2 cbg-grey" />
              <div className="d-flex mb-lg-0 mb-4">
                <div className="location">
                  <img
                    src="/Images/tour/floc.png"
                    className="img-fluid icon"
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="detail">
                  <p>Location</p>
                  <a href="https://maps.app.goo.gl/hBdNok4XSiJjBRMQ8" target="_blank">
                    Ansal Chamber-2, 125, <br />
                    Bhikaji Cama Place, <br />
                    New Delhi, Delhi 110066
                  </a>
                </div>
              </div>
              <div className="d-flex mb-lg-0 mb-4">
                <div className="location">
                  <img
                    src="/Images/tour/fph.png"
                    className="img-fluid icon"
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="detail">
                  <p>Phone No.</p>
                  <a href="tel:+919599408232">+91-9599408232</a>
                </div>
              </div>
              <div className="d-flex">
                <a href="#">
                  {" "}
                  <img
                    src="./assets/images/fb.png"
                    className="img-fluid"
                    alt=""
                    srcSet=""
                  />
                </a>
                <a href="#">
                  {" "}
                  <img
                    src="./assets/images/twt.png"
                    className="img-fluid ms-2"
                    alt=""
                    srcSet=""
                  />
                </a>
                <a href="#">
                  {" "}
                  <img
                    src="./assets/images/ins.png"
                    className="img-fluid ms-2"
                    alt=""
                    srcSet=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>

  )
}

export default FooterSection