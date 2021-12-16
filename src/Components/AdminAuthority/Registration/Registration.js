import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const regInputFieldStyle = 'border-2 border-yellow-400 md:w-72 lg:w-96 p-1 rounded';
const regBtnStyle = "bg-blue-200 px-4 py-2 rounded font-bold text-blue-700 hover:bg-blue-300"

const Registration = () => {
    const {registerNewUser} = useAuth()
    const [newUserInfo,setNewUserInfo] = useState();
    const navigate = useNavigate();
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...newUserInfo}
        newInfo[field] = value;
        setNewUserInfo(newInfo);
    }
    const handleRegHandle = e =>{
        if (newUserInfo.password === newUserInfo.confirmPassword) {
            newUserInfo.fullName = newUserInfo.fname.concat(" ",newUserInfo.lname);
            registerNewUser(newUserInfo.fullName,newUserInfo.email,newUserInfo.password,newUserInfo.photoUrl,navigate);
            console.log(newUserInfo);
        }else if (newUserInfo.password !== newUserInfo.confirmPassword) {
            alert("Password didn't match.")
        }
        e.preventDefault();
    }

    return (
        <div className='text-center'>
            <p className='py-4 font-bold text-2xl'>Create an Account</p>
            <div className='p-2'>
                <form className='flex flex-col' onSubmit={handleRegHandle}> 
                    <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="text" id="fname" name="fname" placeholder='First Name'/></div>
                    <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="text" id="lname" name="lname" placeholder='Last Name' /></div>
                    <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="email" id="email" name="email" placeholder='Email' /></div>
                    <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="password" id="password" name="password" placeholder="Password"  /></div>
                    <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="password" id="confirm-password" name="confirmPassword" placeholder="Confirm Password"  /></div>
                    <div className='my-1'><input className={regInputFieldStyle}  onBlur={handleOnBlur} type="number" id="phone-number" name="phone" placeholder="Phone Number"  /></div>
                    <div className='my-1'><input className={regInputFieldStyle}  onBlur={handleOnBlur} type="text" id="photoUrl" name="photoUrl" placeholder="Photo url"  /></div>
                    <div className='my-1'><button className={regBtnStyle} type="submit">Create an account</button></div>
                </form>
                <p className='mt-3'>
                    Already have an account? <NavLink className="underline text-blue-700" to="/login">Login here</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Registration;