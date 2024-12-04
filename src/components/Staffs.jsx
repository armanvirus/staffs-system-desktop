import React from 'react'
import Staff from './Staff.jsx';
import Record from './Record.jsx';

const Staffs = ()=>{
    let emptyArray = Array.from('germany')
    return(
        <div className="staffs">
            <div>
            {
                emptyArray.map(el=><Staff/>)
            }
            </div>
           
        </div>
    )
}

export default Staffs;