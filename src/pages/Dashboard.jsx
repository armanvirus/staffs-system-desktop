import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import Search from '../components/Search.jsx'
import Card from '../components/Card.jsx'

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* <Header/> */}
            <div className="sidebar">
                <Navbar />
            </div>
            <div className="dashboard-content">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard;