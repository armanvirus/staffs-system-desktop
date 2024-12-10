import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from "react"
import axios from 'axios'
import User from '../imgs/user.png'
import Message from "../components/Message.jsx"
import Spinner from "../components/Spinner.jsx"
function Register() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [gender,setGender] = useState('')
  const [dob,setDob] = useState('')
  const [address,setAddress] = useState('')
  const [rank,setRank] = useState('')
  const [employmentDate,setEmploymentDate] = useState('')
  const [salary,setSalary] = useState('')
  const [requesting,setRequesting] = useState(false)
  const [type,setType] = useState('')
  const [message,setMessage] = useState('')
  const [showMessage,setShowMessage] = useState(false)
  const Doreset = ()=>{
    setName('')
    setPhone('')
    setAddress('')
    setDob('')
    setGender('')
    setEmploymentDate('')
    setRank('')
    setSalary('')
    setType('')
  }
  const register = ()=>{
    setRequesting(true)
     axios.post('https://staffs-5e4b42dd47bf.herokuapp.com/management/add/staffs/info',{
      name,
      phone,
      gender,
      dob,
      address,
      rank,
      employmentDate,
      salary,
      type
     },{headers:{"Authorization": `Bearer ${sessionStorage.getItem('authTokn')}`}})
     .then((response)=>{
      setRequesting(false)
      setMessage(response.data.msg)
      setShowMessage(true)
     }).catch((error)=>{
      setRequesting(false)
      console.log(error)
      setMessage("Error reaching the server!")
      setShowMessage(true)
     })
  }
  console.log(type)
  return (
    <div className='register'>
      {requesting && (<div className="loader-container-dashboard"><Spinner/></div>)}
      <div className="dashboard-title"><h1>Rrgister Staff</h1></div>
      {showMessage &&(<div className="register-msg"><div><Message showMessage={setShowMessage} message={message}/></div></div>)}
      <div className='register-container'>
        <div className="avatar">
<div className="radio-input">
  <label>
    <input value="academic" onChange={(e)=>{setType(e.target.value)}} name="type" id="value-1" type="radio" />
    <span>Academic</span>
  </label>
  <label>
    <input value="non-academic" onChange={(e)=>{setType(e.target.value)}} name="type" id="value-2" type="radio" />
    <span>Non Academic</span>
  </label>
  <span className="selection"></span>
</div>

          <div className="profile_badge">
          <img height="100px" width="100px" src={User} alt="avatar"/>
          </div>
          <div className="file-upload">
          <div>
              <div className="inputForm">
                {/* <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg> */}
                <input width="150px" height="10px" type="file"  placeholder="choose image" />
              </div></div>

            </div>
        </div>
        <form className="form register-form">
          <div className='fields-left'>
            <div><div className="flex-column">
              <label>Name </label></div>
              <div className="inputForm">
                <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} class="input" placeholder="Staff Name" />
              </div></div>

            <div>
              <div className="flex-column">
                <label>Phone Number </label></div>
              <div className="inputForm">
                <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>
                <input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} class="input" placeholder="Phone Number" />
              </div>
            </div>

            <div><div className="flex-column">
              <label>Gender </label></div>
              <div className="inputForm">
                <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
                <input type="text" value={gender} onChange={(e)=>{setGender(e.target.value)}} class="input" placeholder="Gender" />
              </div></div>

            <div><div className="flex-column">
              <label>Date Of Birth </label></div>
              <div className="inputForm">
                <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
                <input type="date" value={dob} onChange={(e)=>{setDob(e.target.value)}} class="input" placeholder="Date of Birth" />
              </div></div>

          </div>
          <div className='fields-right'>
            <div>
              <div className="flex-column">
                <label>Address </label></div>
              <div className="inputForm">
                <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
                <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} class="input" placeholder="Address" />
              </div>
            </div>

            <div>
              <div className="flex-column">
                <label>Salary </label></div>
              <div className="inputForm">
                <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>
                <input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}} class="input" placeholder="Salary" />
              </div>
            </div>

            <div>
              <div className="flex-column">
                <label>Rank </label></div>
              <div className="inputForm">
                <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
                <input type="text" value={rank} onChange={(e)=>{setRank(e.target.value)}} class="input" placeholder="Rank" />
              </div>
            </div>

            <div><div className="flex-column">
              <label>Employment Date </label></div>
              <div className="inputForm">
                <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
                <input type="date" value={employmentDate} onChange={(e)=>{setEmploymentDate(e.target.value)}} class="input" placeholder="Employment Date" />
              </div></div>

          </div>
        </form>
      </div>
      <div className="set-reset">
      <button className="button-submit" onClick={()=> register()} disabled={requesting}>Save</button>
      <button className="button-submit" onClick={()=>{Doreset()}} disabled={requesting}>Reset</button>
      </div>
    </div>
  )
}

export default Register