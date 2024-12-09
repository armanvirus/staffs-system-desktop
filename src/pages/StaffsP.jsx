import React,{useState,useEffect} from 'react'
import Search from "../components/Search.jsx"
import Staffs from "../components/Staffs.jsx"
import axios from 'axios'
import Spinner from '../components/Spinner.jsx'
import Message from '../components/Message.jsx'
function StaffsP() {
const [list,setList]= useState('')
const [loading,setLoading]= useState(true)
const [message,setMessage]= useState('')
const [showMessage,setShowMessage] = useState(false)
const [searchKey,setSearchKey] = useState(false)
  useEffect(()=>{
    axios.get('http://localhost:5001/management/get/staffs',{headers:{"Authorization": `Bearer ${localStorage.getItem('authTokn')}`}})
    .then((response)=>{
      setLoading(false)
      setList(response.data.data)
    })
    .catch((error)=>{

    })
  },[''])
  console.log(searchKey)
  return (
    <div className="staffs-page">
          {loading ? (<div className="loader-container-dashboard"><Spinner/></div>) : (<>
            <div className="dashboard-title"><h1>Staffs List</h1></div>
          <div>
          {showMessage &&(<div className="list-msg"><div><Message showMessage={setShowMessage} message={message}/></div></div>)}
            <Search searchKey={setSearchKey}/>
            <Staffs searchKey={searchKey} setList={setList} showMessage={setShowMessage} message={setMessage} list={list}/>
          </div>
          </>)}
    </div>
  )
}

export default StaffsP