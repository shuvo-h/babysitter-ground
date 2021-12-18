import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllSitters } from '../../../redux/slices/dashboardSlice';
import Sitter from '../Sitter/Sitter';

const AllSitters = () => {
    const dispathch = useDispatch();
    useEffect(()=>{
        dispathch(loadAllSitters())
    },[])
    const allSitters = useSelector((state)=>(state.dashboard.sitters.allSitters[0])) || [];
    
    return (
        <div className='container text-center'>
            <table className='table-auto w-full '>
                <thead className='border-b-4 border-indigo-500'>
                    <tr>
                        <th>Name </th>
                        <th>Email </th>
                        <th>Payment </th>
                        <th>Image </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allSitters.map(sitter=><Sitter sitter={sitter} dispathch={dispathch} key={sitter._id}></Sitter>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default AllSitters;