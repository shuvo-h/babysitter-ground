import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FaHandPointRight } from 'react-icons/fa';

const Service = ({service}) => {
    const {service_Price,service_img, service_str,service_title, service_view } = service;
    console.log(service);

    return (
        <div className='border-2 p-3 rounded-lg'>
            <div>
                <img className='block mx-auto border p-1 rounded' style={{height:"200px"}} src={service_img} alt="" />
            </div>
            <div>
                <h2 className='text-center text-lg font-bold'>{service_title}</h2>
                <p>{service_str}</p>
            </div>
            <div className='flex justify-center'>
                <NavLink className='border px-3 py-1 bg-blue-200 hover:bg-blue-400 font-bold rounded-lg mx-1' to="/booking">Keep Baby</NavLink>
            </div>
            <div>
                <h3><strong>Service Overview:</strong></h3>
                <ul className='ml-2 '>
                    {
                        service_view?.map(view => <li><IconContext.Provider value={{ color: "DeepSkyBlue", className: "global-class-name inline-block mr-1", size:30 }}><FaHandPointRight /> </IconContext.Provider>{view}.</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Service;

/*
const a =[
    {
        service_title: "Day Time Care",
        service_view: ["Referrals of serious, competent and loving nannies", "The nanny is employed by the family", "Registration through an annual Membership Subscription", "Comprehensive service during the Membership Subscription","Additional administrative services are available"],
        service_Price: 50,
        service_str:"lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem",
        service_img: "https://rukminim1.flixcart.com/image/416/416/k01b8280/sticker/y/h/g/baby017-medium-19-b-sticker017-manial-original-imafjwaujyr24csc.jpeg?q=70",

    },
    {
        service_title: "Day Time Care",
        service_view: ["Referrals of serious, competent and loving nannies", "The nanny is employed by the family", "Registration through an annual Membership Subscription", "Comprehensive service during the Membership Subscription","Additional administrative services are available"],
        service_Price: 50,
        service_str:"lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem",
        service_img: "https://rukminim1.flixcart.com/image/416/416/k01b8280/sticker/y/h/g/baby017-medium-19-b-sticker017-manial-original-imafjwaujyr24csc.jpeg?q=70",

    },
    {
        service_title: "Day Time Care",
        service_view: ["Referrals of serious, competent and loving nannies", "The nanny is employed by the family", "Registration through an annual Membership Subscription", "Comprehensive service during the Membership Subscription","Additional administrative services are available"],
        service_Price: 50,
        service_str:"lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem",
        service_img: "https://rukminim1.flixcart.com/image/416/416/k01b8280/sticker/y/h/g/baby017-medium-19-b-sticker017-manial-original-imafjwaujyr24csc.jpeg?q=70",

    },
    {
        service_title: "Day Time Care",
        service_view: ["Referrals of serious, competent and loving nannies", "The nanny is employed by the family", "Registration through an annual Membership Subscription", "Comprehensive service during the Membership Subscription","Additional administrative services are available"],
        service_Price: 50,
        service_str:"lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem",
        service_img: "https://rukminim1.flixcart.com/image/416/416/k01b8280/sticker/y/h/g/baby017-medium-19-b-sticker017-manial-original-imafjwaujyr24csc.jpeg?q=70",

    },
]
*/
