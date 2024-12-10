import React,{useEffect, useState} from 'react'
import axios from 'axios'
import User from '../imgs/user.png'
import Spinner from '../components/Spinner.jsx'

function Profile() {
  const [profile, setProfile] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    axios.get('https://staffs-5e4b42dd47bf.herokuapp.com/management/get/profile',{headers:{"Authorization": `Bearer ${sessionStorage.getItem('authTokn')}`}})
    .then((response)=>{
      setLoading(false)
      setProfile(response.data.profile)
    })
    .catch((error)=>{

    })
  },[''])

  return (
    <div className="profile-container">
      {loading ? (<div className="loader-container-dashboard"><Spinner/></div>) : (
        
        <div className="record-container-record">
        <div className="dashboard-title"><h1>Personal Profile</h1></div>
        <div className="profile-info">
        <div className="avatar">
          <div class="profile_badge">
          <img height="100px" width="100px" src={User} alt="avatar"/>
          </div>

        </div>
            <div>
                        {/* entry one */}
                        <div className='record-entry-left'>
                        <div className='record-entry'>
                            <div>Name</div>
                            <p>{profile.name}</p>
                        </div>
                        <div className='record-entry'>
                            <div>Email Address</div>
                            <p>{profile.email}</p>
                        </div>
                        <div className='record-entry'>
                            <div>Phone</div>
                            <p>---------------</p>
                        </div>
                        </div>
                        {/* entry two */}
                        <div>
                        <div className='record-entry'>
                            <div>Password</div>
                            <p>********</p>
                        </div>
                        <div className='record-entry'>
                            <div>Role</div>
                            <p>{profile.role}</p>
                        </div>
                        </div>

                    </div>
        </div>
        <div className="set-reset">
      <button className="button-submit">Edit</button>
      </div>
        </div>
      )}
    </div>
  )
}

export default Profile