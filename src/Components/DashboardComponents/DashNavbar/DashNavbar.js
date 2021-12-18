import React from 'react';
import { NavLink } from 'react-router-dom';

const DashNavbar = () => {
    return (
        <div className='bg-gray-700 text-white py-2 fixed' style={{height:"calc(100vh - 60px)", width:"150px"}}>
            <ul>
                <li className='py-1 ml-4'><NavLink to="all-parents">All Parents</NavLink></li>
                <li className='py-1 ml-4'><NavLink to="all-sitters">All Sitters</NavLink></li>
                <li className='py-1 ml-4'><NavLink to="">Add Sitters</NavLink></li>
                <li className='py-1 ml-4'><NavLink to="all-services">Services</NavLink></li>
                <li className='py-1 ml-4'><NavLink to="add-service">Add Services</NavLink></li>
            </ul>
        </div>
    );
};

export default DashNavbar;