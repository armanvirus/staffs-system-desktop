import React from 'react'
import axios from 'axios'
import Card from '../components/Card.jsx'

export default function Home() {
  return (
    <div className="dashboard">
    <div className="dashboard-title">  <h1>Dashboard</h1></div>
    <div className="cards">
    <Card staffs={{type:"Academic Staffs", numbers:80}}/>
    <Card staffs={{type:"Non Academic Staffs", numbers:30}}/>
    <Card staffs={{type:"All Staffs", numbers:110}}/>
    </div>
    </div>
  )
}
