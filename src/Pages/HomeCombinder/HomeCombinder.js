import React from 'react';
import BabysDayGallery from '../../Components/Home/BabysDay/BabysDayGallery/BabysDayGallery';
import Header from '../../Components/Home/Header/Header';
import ServiceHighlights from '../../Components/Home/ServiceHighlights/ServiceHighlights';
import WorkProcess from '../../Components/Home/WorkProcess/WorkProcess';

const HomeCombinder = () => {
    return (
        <div>
            <Header></Header>
            <ServiceHighlights></ServiceHighlights>
            <BabysDayGallery></BabysDayGallery>
            <WorkProcess></WorkProcess>
        </div>
    );
};

export default HomeCombinder;