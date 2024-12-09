import React from 'react'
import {
    HashRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Login from './pages/Login.jsx'
import StaffsP from './pages/StaffsP.jsx'
import Dashboard from './pages/Dashboard.jsx';
import Home from './pages/Home.jsx';
import Management from './pages/Management.jsx';
import Register from './pages/Register.jsx';
import Profile from "./pages/Profile.jsx"
import RecordP from './pages/Record.jsx';
import Update from './pages/Update.jsx'
// Navbar
const App = ()=>{
    return(
    <div className='app-container'>
        <div>
        <Router>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>}>
        <Route path="/dashboard" element={<Home/>}/>
        <Route path="/dashboard/settings" element={<Management/>}/>
        <Route path="/dashboard/register" element={<Register/>}/>
        <Route path="/dashboard/staffs" element={<StaffsP/>}/>
        <Route path="/dashboard/profile" element={<Profile/>}/>
        <Route path="/dashboard/record" element={<RecordP/>}/>
        <Route path="/dashboard/update" element={<Update/>}/>
        </Route>
        </Routes>
        </Router>
        </div>
        </div>
    )
}

export default App