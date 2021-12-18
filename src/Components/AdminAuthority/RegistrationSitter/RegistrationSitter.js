import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const regInputFieldStyle = 'border-2 border-yellow-400 md:w-72 lg:w-96 p-1 rounded';
const regBtnStyle = "bg-blue-200 px-4 py-2 rounded font-bold text-blue-700 hover:bg-blue-300"

const RegistrationSitter = () => {
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
    const handleRegSitter = e =>{
        if (newUserInfo.password === newUserInfo.confirmPassword) {
            newUserInfo.fullName = newUserInfo.fname.concat(" ",newUserInfo.lname);
            const extraInfo = {
                experience: newUserInfo.experience,
                expected_salary: newUserInfo.expected_salary,
                working_time: newUserInfo.working_time,
                about: newUserInfo.about,
            }
            registerNewUser(newUserInfo.fullName,newUserInfo.email,newUserInfo.password,newUserInfo.photoUrl,"sitter",navigate,extraInfo);
            
        }else if (newUserInfo.password !== newUserInfo.confirmPassword) {
            alert("Password didn't match.")
        }
        e.preventDefault();
    }

    return (
        <div className='text-center'>
            <p className='py-4 font-bold text-2xl'>Apply for a Sitter Job</p>
            <div className='p-2'>
                <form className='flex flex-col' onSubmit={handleRegSitter}> 
                    <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="text" id="fname" name="fname" placeholder='First Name'/></div>
                    <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="text" id="lname" name="lname" placeholder='Last Name' /></div>
                    <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="email" id="email" name="email" placeholder='Email' /></div>
                    <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="password" id="password" name="password" placeholder="Password"  /></div>
                    <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="password" id="confirm-password" name="confirmPassword" placeholder="Confirm Password"  /></div>
                    <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="number" id="phone-number" name="phone" placeholder="Phone Number"  /></div>
                    <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="text" id="photoUrl" name="photoUrl" placeholder="Photo url"  /></div>
                    <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="number" id="experience" name="experience" placeholder="Experience in year"  /></div>
                    <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="number" id="expected_salary" name="expected_salary" placeholder="Expected Salary in USD"  /></div>
                    <div className='my-1'><input className={regInputFieldStyle} onBlur={handleOnBlur} type="text" id="working_time" name="working_time" placeholder="Your working time"  /></div>
                    <div className='my-1'><textarea className={regInputFieldStyle} onBlur={handleOnBlur} type="text" id="about" name="about" placeholder="Write about yourself"  /></div>
                    <div className='my-1'><button className={regBtnStyle} type="submit">Apply</button></div>
                </form>
                <p className='mt-3'>
                    Already have an account? <NavLink className="underline text-blue-700" to="/login">Login here</NavLink>
                </p>
            </div>
        </div>
    );
};

export default RegistrationSitter;