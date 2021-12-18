import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer/Footer';
import useAuth from '../../hooks/useAuth';
import { getBookingByID } from '../../redux/slices/bookingSitterSlice';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm';


const stripePromise = loadStripe('pk_test_51JvkxdG4X8YjniOppT0p47x2AwsEMoCahcQZgC8NhzfGzXxKtfdLzfGURheYARMu7DphivNnGY2kg59ftcCMUf7j00wfC6297A');

const Payment = () => {
    const {bookingId} = useParams();
    const {user} = useAuth();
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBookingByID(bookingId));
    },[bookingId])
    
    const singleBookingInfo = useSelector(state=>(state.bookingInfo.singleBooking[0]))
    const {admit_time,date,email,pay_status,payment,release_time, _id} = singleBookingInfo || {};

    return (
        <div className='bg-gray-300'>
            <div className='flex flex-col justify-center items-center' style={{height:"calc(100vh - 236px )"}}>
                <div className='border-2 shadow-lg p-4' style={{width:"1000px", height:"400px", boxShadow:"0 0 5px 5px aqua", backgroundColor:"white"}}>
                    <p className='text-center font-bold text-2xl mb-4 text-blue-400'>BabySister Ground</p>
                    <p className='text-center font-bold text-xl mb-4'>Payment Form</p>
                    <p><u>Please pay to confirm your booking</u></p>
                    <p className='my-4'>Name: {user.displayName}</p>
                    <p className='my-1'>Email: {email}</p>
                    <p className='my-2'>Baby staying time: </p>
                    <p className='border rounded-lg px-4 py-1'><b>{admit_time}</b> to <b>{release_time}</b> on <b>{date}</b></p>
                    <p className='my-1'>Payment Amount: <b>${payment}</b></p>
                    {
                        payment && <Elements stripe={stripePromise}>
                                        <CheckoutForm payment={payment} bookingId={_id}/>
                                    </Elements>
                    }
                    
                    {/* <button className='bg-blue-300 px-4 py-1 font-bold rounded text-green-700 hover:bg-green-200 block mx-auto my-8'>Pay</button> */}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Payment;