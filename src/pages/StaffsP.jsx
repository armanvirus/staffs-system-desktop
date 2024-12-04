import React from 'react'
import Search from "../components/Search.jsx"
import Staffs from "../components/Staffs.jsx"

function StaffsP() {
  return (
    <div className="staffs-page">
          <div className="dashboard-title"><h1>Staffs List</h1></div>
          <div>
            <Search/>
            <Staffs/>
          </div>
    </div>
  )
}

export default StaffsP