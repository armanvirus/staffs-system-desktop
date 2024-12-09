import React from 'react'
import { useLocation } from 'react-router-dom';


const Record = ()=>{
const location = useLocation();
  const staff = location.state;
  console.log(staff)
    return(
        <div className="record">
            <div>
                <div className="staff-img">
                <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                </div>
                <h4>{staff.name}</h4>
            </div>
            <div>
                <div className='staff-contacts'>
                    <h4>Contacts</h4>
                    <div>
                        {/* entry one */}
                        <div className='record-entry-left'>
                        <div className='record-entry'>
                            <div>Address</div>
                            <p>{staff.address}</p>
                        </div>
                        {/* <div className='record-entry'>
                            <div>Email Address</div>
                            <p>abdurrahmangrema19@gmail.com</p>
                        </div> */}
                        <div className='record-entry'>
                            <div>Phone</div>
                            <p>{staff.phone}</p>
                        </div>
                        </div>
                        {/* entry two */}
                        <div>
                        <div className='record-entry'>
                            <div>Date of Birth</div>
                            <p>{staff.dob}</p>
                        </div>
                        <div className='record-entry'>
                            <div>Gender</div>
                            <p>{staff.gender}</p>
                        </div>
                        </div>

                    </div>
                </div>
                <div className='record-profession'>
                    {/* educations */}
                    <div>
                        <h4>Others</h4>
                        <div className='record-entry-left'>
                        <div className='record-entry'>
                            <div>Employment Date</div>
                            <p>{staff.employmentDate}</p>
                        </div>
                        <div className='record-entry'>
                        <div>Staff Rank</div>
                        <p>{staff.rank}</p>
                        </div>
                        </div>
                    </div>
                    {/* experience */}
                    <div>
                        <div>
                        <div className='record-entry'>
                            <div>Salary</div>
                            <p>{staff.salary}</p>
                        </div>
                        <div className='record-entry'>
                        <div>Employment Type</div>
                        <p>{staff.type} staff</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        
    )
}

export default Record