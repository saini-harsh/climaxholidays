import React from 'react';
import "./css/Home.css";
import BannerSection from './BannerSection';
import TopTrendingSection from './TopTrendingSection';
import AddSection from './AddSection';
import PopularIndianSection from './PopularIndianSection';
import PopularTourSection from './PopularTourSection';
import InternationalPackages from './InternationalPackages';
import PopularInternationalSection from './PopularInternationalSection';
import HolidayThemesSection from './HolidayThemesSection';
import SupportSection from './SupportSection';
import EnquiryPopup from '../Common/EnquiryPopup';



const Home = () => {
    return (
        <>
            <div style={{ overflowX: "hidden" }}>
                <BannerSection />
                <HolidayThemesSection />
                
                <TopTrendingSection />
                <InternationalPackages heading="Most Popular International Tours" />
                <AddSection />
                <PopularIndianSection sheading="DESTINATION" fheading="Popular" secheading="Indian Destination"  />
                <PopularTourSection heading="Most Popular Indian Tours" />
                {/* <PopularInternationalSection /> */}
                <SupportSection />
                <EnquiryPopup />
            </div>
        </>
    )
}

export default Home