import React from 'react';
import BabysDayGallery from '../../Components/Home/BabysDay/BabysDayGallery/BabysDayGallery';
import Header from '../../Components/Home/Header/Header';
import ServiceHighlights from '../../Components/Home/ServiceHighlights/ServiceHighlights';

const HomeCombinder = () => {
    return (
        <div>
            <Header></Header>
            <ServiceHighlights></ServiceHighlights>
            <BabysDayGallery></BabysDayGallery>
        </div>
    );
};

export default HomeCombinder;