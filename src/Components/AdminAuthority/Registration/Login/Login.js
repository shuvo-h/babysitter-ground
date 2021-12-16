import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const logInputFieldStyle = 'border-2 border-yellow-400 md:w-72 lg:w-96 p-1 rounded';
const logBtnStyle = "bg-green-200 px-8 py-2 rounded font-bold text-green-700 hover:bg-green-300"

const Login = () => {
    const {loginUser} = useAuth();
    const [existUserInfo,setExistUserInfo] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    let loactionFrom = location.state?.from?.pathname || "/home";
    const handleLoginOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const insertedInfo = {...existUserInfo}
        insertedInfo[field] = value;
        setExistUserInfo(insertedInfo);
    }
    const handleLoginForm = e =>{
        loginUser(existUserInfo.email,existUserInfo.password,navigate,loactionFrom);
        e.preventDefault();
    }

    return (
        // <div sx={{p:2, display:"flex", flexDirection:"column",alignItems:"center"}}>
        <div className='flex flex-col items-center mt-6'>
            <h1 className='py-4 font-bold text-2xl'>Welcome Back </h1>
            <p className='text-xl'> To keep connected with us please login with your email and password </p>
            <div  className='p-2'>
                <form className='flex flex-col' onSubmit={handleLoginForm}> 
                    <div className='my-1'><input className={logInputFieldStyle} onBlur={handleLoginOnBlur} name="email" id="standard-basic" label="Email" placeholder='Email'/></div>
                    <div className='my-1'><input className={logInputFieldStyle} onBlur={handleLoginOnBlur} name="password" id="standard-basic" label="Password" placeholder='Password' /></div>
                    <div className='my-2 mx-auto'><button className={logBtnStyle} type="submit">Login</button></div>
                </form>
                <p className='mt-3'>Don't have an account? <NavLink className="underline text-blue-700"  to="/registration">Register here</NavLink></p>
            </div>

            {/* <div sx={{mt:4}}>
                <p variant="h4" component="div">
                    OR 
                </p>
                <p variant="body1" component="div">
                    You can join with
                </p>
                <div
                    sx={{ display: 'flex', flexDirection:"column" ,justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper',}}
                >
                    <button sx={{mx:1, my:1}} variant="outlined"><GoogleIcon style={{color:"Goldenrod"}} sx={{mr:3}} fontSize={"large"} />Continue with Google </button>
                    <button sx={{mx:1}} variant="outlined"><FacebookIcon sx={{mr:3}} fontSize={"large"} />Continue with Facebook</button>
                    <button sx={{mx:1}} variant="outlined"><TwitterIcon sx={{mr:3}} style={{color:"DarkTurquoise"}} fontSize={"large"} />Continue with Twitter</button>
                    <button sx={{mx:1}} variant="outlined"><LinkedInIcon sx={{mr:3}} fontSize={"large"} />Continue with Linkdin</button>
                </div>
            </div> */}
        </div>
    );
};

export default Login;