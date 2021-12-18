import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllParents, loadAllParents } from '../../../redux/slices/dashboardSlice';
import Parent from "../Parent/Parent";


const AllParents = () => {
    const dispathch = useDispatch();
    useEffect(()=>{
        dispathch(loadAllParents())
    },[])
    const allParents = useSelector((state)=>(state.dashboard.parents.allParents[0])) || [];
    
    return (
        <div className='container text-center'>
            <table className='table-auto w-full '>
                <thead className='border-b-4 border-indigo-500'>
                    <tr>
                        <th>Name </th>
                        <th>Email </th>
                        <th>Payment </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allParents.map(parent=><Parent parent={parent} dispathch={dispathch} key={parent._id}></Parent>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default AllParents;