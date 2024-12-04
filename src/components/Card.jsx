import React from "react"
const Card = ({staffs})=>{
    return(
        <div className="cardm">
  <div className="staffs-card">
  <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#f8f9fa"><path d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z"/></svg>
    <div>
    <div className="main-card">{staffs.numbers}</div>
    <div className="mainsub">{staffs.type}</div>
    </div>
  </div>

</div>

    )
}
export default Card