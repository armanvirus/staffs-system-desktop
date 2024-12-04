import React from 'react'
import User from '../imgs/user.png'

function Profile() {
  return (
    <div className="profile-container">
        <div>
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
                            <p>university of maiduguri</p>
                        </div>
                        <div className='record-entry'>
                            <div>Email Address</div>
                            <p>abdurrahmangrema19@gmail.com</p>
                        </div>
                        <div className='record-entry'>
                            <div>Phone</div>
                            <p>+234 701 191 1909</p>
                        </div>
                        </div>
                        {/* entry two */}
                        <div>
                        <div className='record-entry'>
                            <div>Date of Birth</div>
                            <p>10th Jan 1997</p>
                        </div>
                        <div className='record-entry'>
                            <div>Department</div>
                            <p>electrical & electronics</p>
                        </div>
                        </div>

                    </div>
        </div>
        <div className="set-reset">
      <button className="button-submit">Edit</button>
      </div>
        </div>
    </div>
  )
}

export default Profile