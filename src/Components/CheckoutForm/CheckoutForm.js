import React, { useEffect, useState } from 'react';
import {CardElement,Elements,useStripe,useElements,} from '@stripe/react-stripe-js';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({payment, bookingId}) => {
    const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()

    // ---------------------
    const [clientSecret,setClientSecret] = useState();
    const [processing,setProcessing] = useState(false);
    const [success,setSuccess] = useState(false);
    
    useEffect(()=>{
        fetch("https://sheltered-temple-15299.herokuapp.com/create-payment-intent",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({price:payment})
        })
        .then(res=>res.json())
        .then(data=>setClientSecret(data.clientSecret))
    },[payment])
    // ---------------------

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if (!stripe || !elements) {
            setProcessing(false);
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            setProcessing(false);
            return;
        }
        setProcessing(true);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card
        });
        if (error) {
            alert(error.message);
            setProcessing(false);
        }else{
            // console.log(paymentMethod);
        }

        // payment intent 
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                card: card,
                billing_details: {
                    name: user.displayName,
                    email: user.email
                },
                },
            },
        );
        if (intentError) {
            alert(intentError.message)
        }else{
            const paymentSuccessInfo ={
                payment_time: paymentIntent.created,
                payment_stripe_id : paymentIntent.id,
                payment_card_last4: paymentIntent.card?.last4,
                paidAmount: paymentIntent.amount,
                bookingId,
                pay_status: "Paid"
            } 
            

            fetch("https://sheltered-temple-15299.herokuapp.com/booking",{
                method:"PUT",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(paymentSuccessInfo)
            })
                .then(res=>res.json())
                .then(data=>{
                    if (data.modifiedCount > 0) {
                        setProcessing(false);
                        setSuccess(true);
                        alert("payment confirm");
                        navigate("/booking")
                    }
                })

        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            {
                processing ? <span>Processing..</span> : <button className='bg-blue-300 px-4 py-1 font-bold rounded text-green-700 hover:bg-green-200 block mx-auto my-2 ' type="submit" disabled={!stripe || success}> Pay ${payment}</button>
            }
            
        </form>
    );
};

export default CheckoutForm;