import React from 'react';
import { Outlet } from 'react-router-dom';
import DashNavbar from '../DashNavbar/DashNavbar';

const Dashboard = () => {
    return (
        <div>
                <DashNavbar></DashNavbar>
            <div className="ml-40">
                <Outlet/>
            </div>
            
        </div>
    );
};

export default Dashboard;