import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = ({service}) => {
    const {service_Price,service_img, service_str,service_title } = service;
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
                <NavLink className='border px-3 py-1 bg-blue-200 hover:bg-blue-400 font-bold rounded-lg mx-1' to="">Keep Baby</NavLink>
                <NavLink className='border px-3 py-1 bg-blue-200 hover:bg-blue-400 font-bold rounded-lg mx-1' to="">for ${service_Price}</NavLink>
            </div>
        </div>
    );
};

export default Service;