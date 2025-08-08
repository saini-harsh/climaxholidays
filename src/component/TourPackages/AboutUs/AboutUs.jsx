import React from "react";
import "./AboutUs.css";
import { Col, Container, Row } from "react-bootstrap";
// import WhyChoose from "../Home/innerComponents/WhyChoose";
// import WhyChoose from "../Home/innerComponents/WhyChoose";
const AboutUs = () => {
  return (
    <div>
      <section className="bannerInner">
        <div className="container">
          <h1>
            <b>About Us</b>
          </h1>
        </div>
      </section>
      <section className="section_padding">
        <Container>
          <div className="text-center">
            <h2>
              <b>About Climax Holidays Tour & Travels</b>
            </h2>
            <p>
              Welcome to  Climax Holidays Tour & Travels, your premier B2C travel portal
              dedicated to transforming the way businesses navigate the world of
              travel. At  Climax Holidays Tour & Travels, we understand the unique needs
              of the travel industry and are committed to providing tailored
              solutions that empower businesses to thrive.
            </p>
          </div>
        </Container>
      </section>
      <section className="section_padding">
        <Container>
          <Row>
            <Col md={6}>
              <div>
                <h2>
                  <b>Our Mission</b>
                </h2>
                <p>
                  At  Climax Holidays Tour & Travels, our mission is to simplify and
                  elevate the travel experience for our B2C partners. We strive
                  to be the preferred travel portal by delivering cutting-edge
                  technology, unparalleled service, and strategic partnerships
                  that drive business success.
                </p>
                <p>
                  Empowering Business Success: We are dedicated to empowering
                  the success of our B2C partners by providing them with a
                  dynamic platform that seamlessly integrates cutting-edge
                  technology, strategic partnerships, and industry insights. Our
                  mission is to be the driving force behind the growth and
                  profitability of businesses in the travel sector.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="https://img.freepik.com/premium-photo/editorial-man-control-airviation_7180-40.jpg?w=900"
                className="img-fluid"
                alt="Expand Sales"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section_padding">
        <Container>
          <Row>
            <Col md={6}>
              <img
                src="https://img.freepik.com/free-photo/couple-interacting-with-each-other-check-counter_107420-85045.jpg?t=st=1736426055~exp=1736429655~hmac=4d747669ea9116e5570ef2f2a8281d3d90a4b67a6bef10d0bacc5c77ced75684&w=900"
                className="img-fluid"
                alt="Expand Sales"
              />
            </Col>
            <Col md={6}>
              <div>
                <h2>
                  <b>What Sets Us Apart</b>
                </h2>
                <p>
                   Climax Holidays Tour & Travels is exclusively designed for businesses
                  in the travel industry. Whether you are a travel agency, tour
                  operator, or corporate entity, our platform is crafted to meet
                  your specific requirements, offering a comprehensive suite of
                  tools and services.
                </p>
                <p>
                  We leverage the latest technology to bring efficiency,
                  transparency, and innovation to your fingertips. Our
                  user-friendly portal is equipped with advanced features to
                  streamline booking processes, manage reservations, and access
                  real-time data, ensuring you stay ahead in a dynamic market.
                </p>
                <p>
                  Your success is our priority.  Climax Holidays Tour & Travels is more
                  than a platform; it's a partnership. Our dedicated support
                  team is committed to providing personalized assistance,
                  ensuring that your business experiences seamless operations
                  and growth.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <WhyChoose /> */}
    </div>
  );
};

export default AboutUs;
