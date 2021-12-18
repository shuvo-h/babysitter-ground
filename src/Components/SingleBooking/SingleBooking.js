import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { getBookingByID } from '../../redux/slices/bookingSitterSlice';

const SingleBooking = ({booking}) => {
    const {admit_time, date, email, pay_status, payment, release_time, _id} = booking;
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
    const handleBookingDelete = (id) =>{
        fetch(`https://sheltered-temple-15299.herokuapp.com/booking/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(data=>{
                if (data.deletedCount > 0) {
                    alert("Booking is Cancelled successfully!");
                    // dispathch(updateDeleteSitter(id))
                }
            })
    }

    const handlePayNow = id =>{
        dispatch(getBookingByID(id));
        navigate(`/payment/${id}`);

    }
    return (
         <tr className='border-b border-black-500'>
            <td>{_id}</td>
            <td>{admit_time} - {release_time}({date})</td>
            <td>{pay_status}</td>
            <td>{pay_status === "unpaid" ? <button className='bg-blue-200 font-bold px-2 py-1 rounded' onClick={()=>handlePayNow(_id)}>Pay Now</button> : <button type='button' className='bg-gray-200 font-bold px-6 py-1 rounded cursor-not-allowed' >Paid</button> }</td>
            <td>{ pay_status === "unpaid" ? <button className='bg-red-400 rounded font-bold px-2 py-1 hover:text-red-900 text-white' onClick={()=>handleBookingDelete(_id)}>Cancel</button>: <button className='bg-red-300 rounded font-bold px-2 py-1 text-white cursor-not-allowed'>Cancel</button>}</td>
        </tr>
    );
};

export default SingleBooking;