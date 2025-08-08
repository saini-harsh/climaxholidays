import React, { useState, useRef } from "react";
import { FaArrowAltCircleDown, FaStar } from "react-icons/fa";
import "./css/ItinearySection.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Row } from "react-bootstrap";

const ItinearySection = ({ data }) => {
    //   console.log("testtest",data);

    const swiperRef = useRef(null);

    const [activeTab, setActiveTab] = useState(0);

    const toggleTab = (tab) => {
        if (activeTab === tab) {
            setActiveTab(0);
        } else {
            setActiveTab(tab);
        }
    };
    return (
        <>
            <div className=" mt-8 ">
                <div>


                    <div className="intineraryMainDiv mt-4 mb-5" id="ltinerary">
                        <h2 className="intineraryMainhead text-[18px] font-[600] mb-4">
                            Itineraries
                        </h2>
                        {/* hs */}
                        <ul
                            id="first-list"
                            ng-repeat="tblIti in packDetails.tableItinerary.Itinerarys"
                            className="ng-scope"
                        >
                            {data.packagedetail.package_itinerary.map((item, id) => (
                                <li>
                                    <div className="boxnvd ">
                                        <div className="boxhed ng-binding">
                                            {" "}
                                            <span className="mobdayhide ng-binding"> Day {id + 1} </span>  {item.title}
                                        </div>
                                        <div className="innerbx">

                                            <div ng-repeat="dyIti in tblIti.Itinerary" className="ng-scope">
                                                <section className="mtags exlstvg">
                                                    <div className="" />
                                                    <ul>
                                                        <li ng-if="dyIti.UsedType != 'Img'" className="dspn ng-scope">
                                                            <div
                                                                ng-bind-html="dyIti.Description | convertHtml"
                                                                className="ng-binding"
                                                                dangerouslySetInnerHTML={{ __html: item.details }}
                                                            >
                                                            </div>
                                                            Meals: {item.foodtype
                                                            ?.split(",")
                                                            .map(s => s.trim())
                                                            .filter(Boolean) // remove empty items
                                                            .map(s => s.charAt(0).toUpperCase() + s.slice(1))
                                                            .join(", ")
                                                            }

                                                        </li>
                                                    </ul>
                                                    
                                                </section>
                                                <div className="clr" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* hs */}
                        <div className="newiti">

                            {data.packagedetail.package_itinerary.map((item, id) => (
                                <div className="itinerarysecDiv" key={id}>
                                    <button
                                        className="itinerarysecDivbtn1"
                                        onClick={() => toggleTab(item.id)}
                                    >
                                        {/* <div className="itinerarysecDIvMain "> */}
                                        <div className="itinerarysecDiv2">
                                            <div style={{ display: "flex" }}>
                                                <span
                                                    className="itinerarysecDiv2para1"
                                                    style={{ marginRight: "10px" }}
                                                >
                                                    Day {id + 1}
                                                </span>
                                                <span className="itinerarysecDiv2para2">
                                                    {item.title}
                                                </span>
                                            </div>
                                            <div>
                                                {activeTab === item.id ? (
                                                    <FiMinusCircle />
                                                ) : (
                                                    <FiPlusCircle />
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            {/* <RiArrowDropDownLine size={25} color="#f73030" /> */}
                                            {/* </div> */}
                                        </div>
                                    </button>
                                    {activeTab === item.id && (
                                        <div className="mt-2">
                                            <p
                                                className="itinerarysecDiv2para3"
                                                dangerouslySetInnerHTML={{ __html: item.details }}
                                            ></p>
                                            <p
                                                className="itinerarysecDiv2para3"
                                            >
                                            Meals: {item.foodtype
                                            ?.split(",")
                                            .map(s => s.trim())
                                            .filter(Boolean) // remove empty items
                                            .map(s => s.charAt(0).toUpperCase() + s.slice(1))
                                            .join(", ")
                                            }

                                                </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>




                    <div id="inclusion">
                        <h2 className="itineraryInclusion">Inclusions</h2>
                        <ul className="itineraryInclusionUnder">
                            {/* {data.packagedetail.package_inclusions.map((item) => (
                                <div className="itineraryInclusionInnerDiv">
                                    <span className=""> ✔ </span>
                                    <li dangerouslySetInnerHTML={{ __html: item }}></li>
                                </div>
                            ))} */}
                            {data.packagedetail.package_inclusions
                                .filter((item) => item && item.trim() !== "")
                                .map((item, index) => (
                                <div key={index} className="itineraryInclusionInnerDiv">
                                    <span>✔</span>{" "}
                                    <li dangerouslySetInnerHTML={{ __html: item }}></li>
                                </div>
                            ))}

                        </ul>
                    </div>
                    <div id="exlcusion">
                        <h2 className="itineraryInclusion">Exclusions</h2>

                        <ul className="itineraryInclusionUnder">
                             {data.packagedetail.package_exclusions
                                .filter((item) => item && item.trim() !== "")
                                .map((item, index) => (
                                <div key={index} className="itineraryInclusionInnerDivs">
                                    <span>⨯</span>
                                    <li dangerouslySetInnerHTML={{ __html: item }}></li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    {data.packagedetail.hotel && data.packagedetail.hotel.length > 0 && (
                    <div className="itineraryHotelDetailMainHead" id="Hotels">
                        <h2 className="itineraryHotelDetailHead">Hotel Details</h2>
                        {data.packagedetail.hotel.map((item) => (
                            <div className="itineraryHotelDetailMain">
                                <div className="itineraryHotelDetailMain2">
                                    <Row>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={40}
                                            pagination={{ clickable: true }}
                                            modules={[Autoplay]}
                                            autoplay
                                            loop
                                            className="mySwiper"
                                            style={{ paddingBottom: "40px" }}
                                            onSwiper={(swiper) => {
                                                swiperRef.current = swiper;
                                            }}
                                        >

                                            {item.hotel_gallery.map((itemx, index) => (
                                                <SwiperSlide key={index}>
                                                    <img
                                                        src={itemx.image}
                                                        className="ItineraryHotelDetailMainImage"
                                                        alt={item.image_alt}
                                                    />

                                                </SwiperSlide>
                                            ))}

                                        </Swiper>
                                    </Row>
                                </div>
                                <div className="itineraryHotelDetailMain3">
                                    <div className="itineraryHotelDetailMain3Inner">
                                        <h3 className="itineraryHotelDetailMain3Innerh3 ">
                                            {item.name}
                                        </h3>
                                        <p className="itineraryHotelDetailpara1">Include a trip</p>
                                    </div>
                                    <div className="itineraryHotelDetailStar">
                                        <FaStar size={13.5} color="#f5b800" />
                                        <FaStar size={13.5} color="#f5b800" />
                                        <FaStar size={13.5} color="#f5b800" />
                                    </div>
                                    <div>
                                        <p className="itineraryHotelDetailpara3">
                                            <span style={{ fontWeight: "600" }}>Address: </span>{" "}
                                            {item.address}
                                        </p>
                                    </div>
                                    <div style={{ textAlign: "end", width: "100%" }}>
                                        {/* <p className="itineraryHotelDetailparaIn">Include a trip</p> */}
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    )}
                    <div id="term-condition">
                        <h2 className="itineraryHotelDetailHead">Our Policy</h2>
                        <div>
                            <ul
                                className="itineraryInclusionUnderss"
                                style={{ listStyleType: "circle" }}
                            >
                                {data.tour_policy.filter((item) => item && item.trim() !== "").map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="itineraryHotelDetailHead">Cancellation Policy</h2>
                        <div>
                            <ul
                                className="itineraryInclusionUnderss"
                                style={{ listStyleType: "circle" }}
                            >
                                {data.cancelation_policy.filter((item) => item && item.trim() !== "").map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="itineraryHotelDetailHead">Payment Policy</h2>
                        <div>
                            <ul
                                className="itineraryInclusionUnderss"
                                style={{ listStyleType: "circle" }}
                            >
                                {data.payment_policy.filter((item) => item && item.trim() !== "").map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ItinearySection;
