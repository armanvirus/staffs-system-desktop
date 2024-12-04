import React from 'react'

const Record = ()=>{
    return(
        <div className="record">
            <div>
                <div className="staff-img">
                <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                </div>
                <h4>Arman Grema</h4>
            </div>
            <div>
                <div className='staff-contacts'>
                    <h4>Contacts</h4>
                    <div>
                        {/* entry one */}
                        <div className='record-entry-left'>
                        <div className='record-entry'>
                            <div>Address</div>
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
                <div className='record-profession'>
                    {/* educations */}
                    <div>
                        <h4>Education</h4>
                        <div className='record-entry-left'>
                        <div className='record-entry'>
                            <div>Jun 2020 - Jul 2021</div>
                            <p>Barchelor of Computer Science University of Maiduguri</p>
                        </div>
                        <div className='record-entry'>
                        <div>Jun 2020 - Jul 2021</div>
                        <p>Barchelor of Computer Science University of Maiduguri</p>
                        </div>
                        </div>
                    </div>
                    {/* experience */}
                    <div>
                        <h4>Experiance</h4>
                        <div>
                        <div className='record-entry'>
                            <div>Jun 2020 - Jul 2021</div>
                            <p>Barchelor of Computer Science University of Maiduguri</p>
                        </div>
                        <div className='record-entry'>
                        <div>Jun 2020 - Jul 2021</div>
                        <p>Barchelor of Computer Science University of Maiduguri</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* record container */}
            {/* <div>
                <h4>Select a staff</h4>
                <div className="record-container">
                    <div>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-280h400v-80H280v80Zm200-120 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160Zm0 320q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></div>
                        <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z"/></svg></div>
                    </div>
                    
                </div>
            </div> */}
        </div>

        
    )
}

export default Record