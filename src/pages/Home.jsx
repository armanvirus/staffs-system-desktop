import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Card from '../components/Card.jsx'
import Spinner from "../components/Spinner.jsx"

export default function Home() {
const [loading,setLoading] = useState(true)
const [stats,setStats] = useState('')
  useEffect(()=>{
    axios.get('https://staffs-5e4b42dd47bf.herokuapp.com/management/get/stat',
      {headers:{"Authorization": `Bearer ${sessionStorage.getItem('authTokn')}`}})
      .then((response)=>{
        setStats(response.data.counts)
        setLoading(false)
      }).catch((error)=>{
        setLoading(false)
      })
  },[''])
  return (
    <div className="dashboard">
      {loading ? (<div className="loader-container-dashboard"><Spinner/></div>) : (<>
        <div className="dashboard-title">  <h1>Dashboard</h1></div>
    <div className="cards">
    <Card staffs={{type:"Academic Staffs", numbers:stats.academic}}/>
    <Card staffs={{type:"Non Academic Staffs", numbers:stats.totalStaffs - stats.academic}}/>
    <Card staffs={{type:"All Staffs", numbers:stats.totalStaffs}}/>
    </div>
      </>)}
    
    </div>
  )
}         
