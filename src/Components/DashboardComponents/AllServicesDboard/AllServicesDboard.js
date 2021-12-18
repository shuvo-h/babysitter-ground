import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllServices } from '../../../redux/slices/dashboardSlice';
import ServiceDboard from '../ServiceDboard/ServiceDboard';

const AllServicesDboard = () => {
    const dispathch = useDispatch();
    useEffect(()=>{
        dispathch(loadAllServices())
    },[])
    const allServices = useSelector((state)=>(state.dashboard.services.allServices[0])) || [];
    
    return (
        <div className='container text-center'>
            <table className='table-auto w-full '>
                <thead className='border-b-4 border-indigo-500'>
                    <tr>
                        <th>Title </th>
                        <th>Image </th>
                        <th>Description </th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allServices.map(service=><ServiceDboard service={service} dispathch={dispathch} key={service._id}></ServiceDboard>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default AllServicesDboard;