import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeParentChecked, changeSitterChecked } from '../../../redux/slices/headerSlice';

const headerContainerStyle = 'text-center w-sc flex flex-col justify-center bg-cover  bg-no-repeat h-40 sm:h-64 md:h-80 lg:h-96';

const Header = () => {
    const dispatch = useDispatch();
    const isParentChecked = useSelector(state => state.headerReducer.isParentChecked);
    const isSitterChecked = useSelector(state => state.headerReducer.isSitterChecked);
    

    return (
        <div className={headerContainerStyle} style={{backgroundImage: 'url("https://i.ibb.co/0nWmWy0/baby-sitter-bg.jpg")'}}> 
            <div className='my-3'>
                <p className='text-xl md:text-2xl xl:text-3xl font-bold'>Care Your Baby with BabySitter Ground</p>
                <p className='text-xl font-semibold hidden sm:block'>Get a babysitter job new your location</p>
            </div>
            <div>
                <div className=''>
                    <label className='text-lg' onClick={()=>dispatch(changeParentChecked())} htmlFor=""><input className='mx-1 mb-3' checked={isParentChecked} type="radio" />I'm Parent</label>
                    <label className='ml-3 text-lg' onClick={()=>dispatch(changeSitterChecked())} htmlFor=""><input className='mx-1' checked={isSitterChecked} type="radio" />I'm Sitter</label>
                </div>
                <div>
                    <input className='focus:outline-none border-2 border-indigo-400 inline-block px-3 py-1 rounded-l-md' type="text" placeholder='search here' />
                    <button className='border-2 border-indigo-400 inline-block px-3 py-1 rounded-r-md bg-green-200 hover:bg-green-400 font-bold hover:text-blue-700'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;