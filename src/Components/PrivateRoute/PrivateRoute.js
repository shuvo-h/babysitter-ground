import React from 'react';
import {useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import { Navigate } from "react-router-dom";
import HashLoader from 'react-spinners/HashLoader';

const PrivateRoute = ({children,...rest}) => {
    const {user, isLoading} = useFirebase();
    const location = useLocation();
    if (isLoading) {
        return (
            <div sx={{ mt:12,display: 'flex', justifyContent:"center"}}>
                <div className='w-2 h-2 mx-auto mt-16'>
                        <div className="sweet-loading ">
                            <HashLoader loading={isLoading} size='80' color='#559900'/>
                        </div>  
                    </div>
            </div>
        )
    }

    if (!user.email) {
        return <Navigate to="/login" state={{from:location}}></Navigate>
    }
    return children;
};

export default PrivateRoute;
