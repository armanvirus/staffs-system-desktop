import React from 'react'
import Staff from './Staff.jsx';
import Record from './Record.jsx';

const Staffs = ({list, message, showMessage, setList, searchKey})=>{
    const filteredData = list.filter(({ name }) => new RegExp(searchKey, 'i').test(name));
    console.log(filteredData)
    return(
        <div className="staffs">
            <div>
            {
                (searchKey && filteredData) ? (
                    filteredData.map(el=><Staff setList={setList} list={filteredData} showMessage={showMessage} message={message} staff={el}/>)
                ): (
                    list.map(el=><Staff setList={setList} list={list} showMessage={showMessage} message={message} staff={el}/>)
                )
            }
            </div>
           
        </div>
    )
}

export default Staffs;