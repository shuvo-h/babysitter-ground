import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { changeAboutDpDn, changeMobileOpen, changeProfileDpDn, changeWindowScreen } from '../../../redux/slices/navResponsiveSlice';

// Tailwind CSS style classes  
const brandStyle = 'text-3xl font-extrabold text-blue-700 md:flex text-center items-center';
const toggleIconStyle = 'absolute right-2 top-1 cursor-pointer';
const navItelsStyle = 'flex flex-col md:flex-row text-center w-screen md:w-auto';
const navLinkStyle = "px-3 py-4 text-lg font-bold hover:text-blue-500 hover:bg-green-200 block md:inline-block";
const activeNavLink = "px-3 py-4 text-lg font-bold text-blue-600 bg-green-300 block md:inline-block";
const navDpDnMenuStyle = "px-3 py-4 text-lg font-bold hover:text-blue-500 hover:bg-green-200 block md:inline-block";
const navDpDnItemsStyle = 'absolute text-left w-max bg-blue-300 bg-opacity-70 left-1/2 md:left-0 font-medium';
const navDpDnItemStyle = "px-3 py-1 border-t-2 hover:text-blue-500 hover:bg-green-200";

const Navigation = () => {
    const {user, logOut} = useAuth();
    const dispatch = useDispatch();
    const isMobileOpen = useSelector((state)=>state.mobile.isToggleOn);
    const isAboutDpDn = useSelector((state)=>state.mobile.isAboutDpDn);
    const isProfileDpDn = useSelector((state)=>state.mobile.isProfileDpDn);
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
                    <li className='relative' onMouseEnter={()=>dispatch(changeAboutDpDn())} onMouseLeave={()=>dispatch(changeAboutDpDn())} > <span  className={navDpDnMenuStyle}> About US</span>
                    {
                        isAboutDpDn && <ul className={navDpDnItemsStyle}>
                            <li className={navDpDnItemStyle} onClick={()=>dispatch(changeAboutDpDn())}><NavLink to="">Our Services</NavLink></li>
                            <li className={navDpDnItemStyle} onClick={()=>dispatch(changeAboutDpDn())}><NavLink to="">Our Blogs 1</NavLink></li>
                            <li className={navDpDnItemStyle} onClick={()=>dispatch(changeAboutDpDn())}><NavLink to="">Our Blogs 2</NavLink></li>
                            <li className={navDpDnItemStyle} onClick={()=>dispatch(changeAboutDpDn())}><NavLink to="">Our Blogs 3</NavLink></li>
                            <li className={navDpDnItemStyle} onClick={()=>dispatch(changeAboutDpDn())}><NavLink to="">Our Blogs 4</NavLink></li>
                            <li className={navDpDnItemStyle} onClick={()=>dispatch(changeAboutDpDn())}><NavLink to="">Our Blogs 5</NavLink></li>
                        </ul>
                    }
                        
                    </li>
                    <li><NavLink to="/" className={({isActive})=> isActive ? activeNavLink : navLinkStyle}>Families</NavLink></li>
                    <li><NavLink to="/" className={({isActive})=> isActive ? activeNavLink : navLinkStyle}>Hostels</NavLink></li>
                    <li><NavLink to="/baby-sitters" className={({isActive})=> isActive ? activeNavLink : navLinkStyle}>BabySitters</NavLink></li>
                </ul>
            </div>
                {
                    user.email && <div className='flex items-center'>
                        <span className='border py-1 px-4 rounded bg-gray-300 relative' onMouseEnter={()=>dispatch(changeProfileDpDn())} onMouseLeave={()=>dispatch(changeProfileDpDn())}><button>{user.displayName}</button>
                                {
                                    isProfileDpDn && <ul className={navDpDnItemsStyle}>
                                        <li className={navDpDnItemStyle} onClick={()=>dispatch(changeProfileDpDn())}><NavLink to="booking">Booking Sitter</NavLink></li>
                                        <li className={navDpDnItemStyle} onClick={()=>dispatch(changeProfileDpDn())}><NavLink to="">My Baby</NavLink></li>
                                        <li className={navDpDnItemStyle} onClick={()=>dispatch(changeProfileDpDn())}><NavLink to="">Payment</NavLink></li>
                                        <li className={navDpDnItemStyle} onClick={()=>dispatch(changeProfileDpDn())}><NavLink to="/dashboard">Admin Board</NavLink></li>
                                        <li className={`${navDpDnItemStyle} hover:bg-pink-300 hover:text-white-700`} onClick={logOut}><span>Logout</span></li>
                                    </ul>
                                }
                        </span>
                    </div>
                }
                {
                    !user.email && <div className='flex items-center'><NavLink className='font-bold' to="/login">Login/Register</NavLink></div>
                }
        </div>
    );
};

export default Navigation;