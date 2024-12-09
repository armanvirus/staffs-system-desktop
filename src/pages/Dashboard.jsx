import React,{useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

const Dashboard = () => {
    const navigate = useNavigate()
// useEffect(()=>{
//     if(localStorage.getItem('authTokn')){
//         navigate('/')
//     }
// },[''])
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