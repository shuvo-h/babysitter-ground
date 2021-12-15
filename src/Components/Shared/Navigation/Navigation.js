import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeMobileOpen, changeWindowScreen } from '../../../redux/slices/navResponsiveSlice';

const brandStyle = 'text-3xl font-extrabold text-blue-700 md:flex text-center items-center';
const toggleIconStyle = 'absolute right-2 top-1 cursor-pointer';
const navItelsStyle = 'flex flex-col md:flex-row text-center w-screen md:w-auto';
const navItemStyleClass = 'py-4 hover:text-blue-500 hover:bg-green-200 ';
const navLinkStyle = "px-3 py-4 text-lg font-bold";

const Navigation = () => {
    const dispatch = useDispatch();
    const isMobileOpen = useSelector((state)=>state.mobile.isToggleOn);
    const isWindowScreen = useSelector((state)=>(state.mobile.isScreenWidth));
    
    useEffect(()=>{
        const changeWidth = () =>{
            dispatch(changeWindowScreen(window.innerWidth));
        }
        window.addEventListener('resize',changeWidth);
        return () => {
            window.removeEventListener('resize',changeWidth);
        }
        
    },[])
    const handleMobileOpen = () =>{
        dispatch(changeMobileOpen())
    }
    return (
        <div className='md:flex flex-row  justify-evenly  bg-blue-200'>
            <div className={brandStyle}>BabySitter Ground </div>
            <div><span className={isWindowScreen < 768 ? toggleIconStyle : "hidden"} onClick={handleMobileOpen}>X</span></div>
            <div className={isMobileOpen || isWindowScreen > 768 ? "": "hidden"}>
                <ul className={navItelsStyle}>
                    <li className={navItemStyleClass}><NavLink to="" className={navLinkStyle}>About US</NavLink></li>
                    <li className={navItemStyleClass}><NavLink to="" className={navLinkStyle}>Families</NavLink></li>
                    <li className={navItemStyleClass}><NavLink to="" className={navLinkStyle}>Hostels</NavLink></li>
                    <li className={navItemStyleClass}><NavLink to="" className={navLinkStyle}>BabySitters</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;