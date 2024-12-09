import React,{useState} from 'react'
import axios from "axios"
import Message from "../components/Message.jsx"
import Spinner from "../components/Spinner.jsx"

function Management() {
  const [oldPassword,setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [requesting,setRequesting] = useState(false)
  const [message,setMessage] = useState('')
  const [showMessage,setShowMessage] = useState(false)
  const changePassword = ()=>{
    setRequesting(true)
    axios.post('http://localhost:5001/user/auth/password/reset',{
      oldPassword,
      newPassword
    },{
      headers:{"Authorization": `Bearer ${localStorage.getItem('authTokn')}`}
    }).then((response)=>{
      setMessage(response.data.msg)
      setRequesting(false)
      setShowMessage(true)
    }).catch((error)=>{
      setMessage('error reaching server!')
      setRequesting(false)
      setShowMessage(true)

    })
  }
  return (
    <div className="settings-container">
      {requesting && (<div className="loader-container-dashboard"><Spinner/></div>)}
        <div className="dashboard-title"><h1>Settings</h1></div>
        {showMessage &&(<div className="register-msg"><div><Message showMessage={setShowMessage} message={message}/></div></div>)}
        <div className="settings">
          <div className="delete-acc">
            <h2>Delete this account</h2>
            <div className="del-sec"> 
              <p>
                when you delete this account only the login details will be deleted, the remaining data will remain intact
              </p>
              <div className="div"> 
<label className="switch">
    <input type="checkbox"/>
    <span className="slider"></span>
</label></div>
            </div>
            <div className="set-reset">
      <button className="button-submit">Delete Account</button>
      </div>
          </div>
          <div className="change-password">
            <h2>Change Password</h2>
            <p>make sure your passord is aleast six <br/> characters</p>
            <div>
            <div>
              <div className="flex-column">
                <label>Old Password </label></div>
              <div className="inputForm">
                <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>
                <input type="password" onChange={(e)=>{setOldPassword(e.target.value)}} class="input" placeholder="Old Password" />
              </div>
            </div>
            <div>
              <div className="flex-column">
                <label>New Password </label></div>
              <div className="inputForm">
                <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>
                <input type="password" onChange={(e)=>{setNewPassword(e.target.value)}} class="input" placeholder="New Password" />
              </div>
            </div>
            <div className="set-reset"> 
      <button onClick={()=>{changePassword()}} className="button-submit">Change Password</button>
      </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Management