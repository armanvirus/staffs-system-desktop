import React,{useEffect} from 'react'
import axios from 'axios'
import { useNavigate, Link} from 'react-router-dom';
const Staff = ({staff, message, showMessage, setList, list})=>{
    const navigator = useNavigate()
    const deleteUser = ()=>{
        axios.get(`https://staffs-5e4b42dd47bf.herokuapp.com/management/delete/staff/${staff._id}`,{headers:{"Authorization": `Bearer ${sessionStorage.getItem('authTokn')}`}})
        .then((response)=>{
            message(response.data.msg) 
            showMessage(true)
            if(response.data.status = 200){
                let newList = list.filter((el)=> staff._id !== el._id)
                setList(newList)
            }else{

            }
        })
        .catch((error)=>{
            console.log(error)
            message('error occur while deleting staff')
            showMessage(true)
        })
    }

    const navigateRecord = ()=>{
        navigator('/dashboard/record', {state:staff})
    }

    
    const navigateUpdate = ()=>{
        navigator('/dashboard/update', {state:staff})
    }
    return(
        <div className="staff">
            <section>
            <div onClick={()=>{navigateRecord()}} style={{cursor:"pointer"}}>
                <div className="profile"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg></div>
                <div className="informs">
                    <p>{staff.name}</p>
                    <span>{staff.type}</span>
                </div>
                </div>
            <div>
                <div onClick={()=>{navigateUpdate()}} style={{padding:"5px", cursor:"pointer"}} className="actions edit">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                </div>
                <div onClick={()=>{deleteUser()}} style={{padding:"5px", cursor:"pointer"}} className="actions delete">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                </svg>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Staff;