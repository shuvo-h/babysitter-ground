import React from 'react';
import BabysDayGallery from '../../Components/Home/BabysDay/BabysDayGallery/BabysDayGallery';
import Header from '../../Components/Home/Header/Header';
import ServiceHighlights from '../../Components/Home/ServiceHighlights/ServiceHighlights';
import WorkProcess from '../../Components/Home/WorkProcess/WorkProcess';
import Footer from '../../Components/Shared/Footer/Footer';

const HomeCombinder = () => {
    return (
        <div>
            <Header></Header>
            <ServiceHighlights></ServiceHighlights>
            <BabysDayGallery></BabysDayGallery>
            <WorkProcess></WorkProcess>
            <Footer></Footer>
        </div>
    );
};

export default HomeCombinder;