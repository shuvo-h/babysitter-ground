import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadBookings, setBookingInfo, setEmailToBState } from '../../redux/slices/bookingSitterSlice';
import useAuth from "../../hooks/useAuth"
import MyBookingList from '../../Components/MyBookingList/MyBookingList';


const bookingInputStyle = 'border-2 border-yellow-400 md:w-72 lg:w-96 p-1 rounded';
const bookingBtnStyle = "bg-blue-200 px-4 py-2 rounded font-bold text-blue-700 hover:bg-blue-300"

const BookingSitter = () => {
    const {user} = useAuth();
    const dispatch = useDispatch();
    const inputFieldValue = useSelector(state=>(state.bookingInfo.bookingInfo))
    
    // load previous booking list 
    useEffect(()=>{
        user.email && dispatch(loadBookings(user.email))
    },[user.email])
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...inputFieldValue }
        newInfo[field] = value;
        dispatch(setBookingInfo(newInfo));
    }

    const bookingData = {...inputFieldValue,  email:user.email, pay_status: "unpaid", payment: 10.50}
    const handleBooking = e =>{
        dispatch(setEmailToBState(user.email))
        
        fetch("https://sheltered-temple-15299.herokuapp.com/booking",{
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(bookingData)
        })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    alert("Booking successful.")
                    window.location.reload();
                }
            })

        e.preventDefault();
    }
    return (
        <div className='container mx-auto text-center'>
            <p className='py-4 font-bold text-2xl'>Book a Siiter for Your Baby</p>
            <div className='p-2'>
                <form className='flex flex-col' onSubmit={handleBooking}> 
                    <div className='my-1'><label htmlFor="Name:">Name: <input className={bookingInputStyle} type="text" id="name" name="name" value={user.displayName} readOnly /></label></div>
                    <div className='my-1'><label htmlFor="Email:">Email: <input className={bookingInputStyle} type="email" id="email" name="email" value={user.email} readOnly /></label></div>
                    <div className='my-1'><label htmlFor="payment_per_hour">$/hour<input className={bookingInputStyle} type="text" id="payment_per_hour" name="payment_per_hour" value="$10.50"/></label></div>
                    <div className='my-1'><label htmlFor="date">Date: <input className={bookingInputStyle} onBlur={handleOnBlur} type="date" id="date" name="date" /></label></div>
                    <div className='my-1'><label htmlFor="date"><u>Time for Baby</u> <br />Admit:<input className={bookingInputStyle} onBlur={handleOnBlur} type="time" id="admit_time" name="admit_time" /></label></div>
                    <div className='my-1'><label htmlFor="date">Release:<input className={bookingInputStyle} onBlur={handleOnBlur} type="time" id="release_time" name="release_time" /></label></div>
                    <div className='my-1'><button className={bookingBtnStyle} type="submit">Book</button></div>
                </form>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>My Booking List:</h1>
                <hr />
                <MyBookingList></MyBookingList>
            </div>
        </div>
    );
};

export default BookingSitter;