import React from 'react';
import Service from '../../Services/Service/Service';

const services = [
    {
        service_id: 1,
        service_title: "Day Time Care",
        service_Price: 50,
        service_str: "lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem",
        service_img: "https://rukminim1.flixcart.com/image/416/416/k01b8280/sticker/y/h/g/baby017-medium-19-b-sticker017-manial-original-imafjwaujyr24csc.jpeg?q=70"
    },
    {
        service_id: 1,
        service_title: "Day Time Care",
        service_Price: 50,
        service_str: "lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem",
        service_img: "https://rukminim1.flixcart.com/image/416/416/k01b8280/sticker/y/h/g/baby017-medium-19-b-sticker017-manial-original-imafjwaujyr24csc.jpeg?q=70"
    },
    {
        service_id: 1,
        service_title: "Day Time Care",
        service_Price: 50,
        service_str: "lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem",
        service_img: "https://rukminim1.flixcart.com/image/416/416/k01b8280/sticker/y/h/g/baby017-medium-19-b-sticker017-manial-original-imafjwaujyr24csc.jpeg?q=70"
    },
]

const ServiceHighlights = () => {
    return (
        <div className='container mx-auto my-6'>
            <h1 className='text-xl md:text-3xl text-center font-bold'>Best Babysitter and Nanny Service</h1>
            <div className='grid grid-cols-3 gap-x-4 mt-6'>
                {
                    services.map(service=><Service service={service} key={service.service_id}></Service>)
                }
            </div>
        </div>
    );
};

export default ServiceHighlights;