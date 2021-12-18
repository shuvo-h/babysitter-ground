import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SitterProfile from '../../Components/SitterProfile/SitterProfile';
import { loadAllSitters } from '../../redux/slices/dashboardSlice';

const BabySitters = () => {
    const dispathch = useDispatch();
    useEffect(()=>{
        dispathch(loadAllSitters())
    },[])
    const allSitters = useSelector((state)=>(state.dashboard.sitters.allSitters[0])) || [];
    
    return (
        <div className='container mx-auto text-center my-3'>
            <h2 className='font-bold text-2xl'>Our Experienced Sitters</h2>
            <div>
                {
                    allSitters.map(sitter=><SitterProfile sitter={sitter} key={sitter._id}></SitterProfile>)
                }
            </div>
        </div>
    );
};

export default BabySitters;
