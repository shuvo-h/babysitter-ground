import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FaHandPointRight } from 'react-icons/fa';

const Service = ({service}) => {
    const {service_Price,service_img, service_str,service_title, service_view } = service;
    
    

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

const a= [
    {
        name:"Eleanore Kris",
        member_img:"https://i.ibb.co/HdkzL7G/profile-1.png",
        working_exp:3,
        roll:"Chief Executive Officer (CEO)",
        Email:"charlie909978@afia.com",
        mob:"+01 568 741 349",
        text:"The childcare of my three (now adult) children was the reason and inspiration to establish care 4 kids. After completing my studies in Art History I decided that care 4 kids better combined my family and professional life and this passion has guided me over the many years. Since 1990 it has been a personal commitment to find the ideal childcare solution for every client based upon their needs. For every nanny I try to find a great family that guarantees a fair salary and solid social insurances. It is my goal to bring happy nannies together with happy families. With great enthusiasm I am devoted to sports such as powerwalking, tennis and swimming. Ballet, Music, Mahjong and Fine Art are part of my passions. Our three adult children all live in Zurich and are still a tremendous part of my life."
    },
    {
        name:"Creola Gutmann",
        member_img:"https://i.ibb.co/LQMQDgp/profile-2.png",
        working_exp:5,
        roll:"Finance and Order Processing",
        Email:"careol@cd.ef",
        mob:"+01 236 547 889",
        text:"Since my retirement in Summer 2014 I help my wife in the constant growing care 4 kids GmbH. The challenge of working in a new field is, at the same time, a new stage of my life. A care 4 kids day fulfills me and gives me great satisfaction. To manage a significant bookkeeping was a special challenge but at the end of the day I feel pleased and content. Sports activities in my free time and travel will continuously be very important to me. Our three children in the meantime are adults and as of December 2016 all left the family nest to be on their own."
    },
    {
        name:"DSaynael Hammes",
        member_img:"https://i.ibb.co/Hd1DGvd/profile-3.png",
        working_exp:2,
        roll:"Head of Nanny Placement Services",
        Email:"dainael@crtd.ef",
        mob:"+01 435 927 179",
        text:"I love to bring people together, see them happy and do my best to find the best solution for their needs. This is exactly what my job at care 4 kids is all about. Since July 2021 I am part of the care 4 kids team and plan to support our nannies with passion and conviction.  As Head of Nanny Placement Service as I am your contact person in all matters concerning nanny placement, be it as a family or as a nanny.  Additionally, I am looking forward to developing our “social media strategy” and to help care 4 kids grow. I have a 1-year-old daughter and know how difficult it is to find reliable, competent and loving childcare. That is why it is especially close to my heart to bring together our excellent nannies with great families. Besides care 4 kids and my family, my dog and horseback riding are also part of my life."
    }
]

