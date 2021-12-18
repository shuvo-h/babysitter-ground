import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleBooking from '../SingleBooking/SingleBooking';

const MyBookingList = () => {
    const bookingList = useSelector((state)=>(state.bookingInfo.myBooking.myPrevBooking))
    
    return (
        <div className='container text-center'>
            <table className='table-auto w-full '>
                <thead className='border-b-4 border-indigo-500'>
                    <tr>
                        <th>Booking ID</th>
                        <th>Schedule</th>
                        <th>Payment Status</th>
                        <th>Pay</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookingList.map(booking=><SingleBooking booking={booking} key={booking._id}></SingleBooking>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyBookingList;