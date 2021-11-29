import React from 'react'
import "../FilterBTN"
import FilterBTN from '../FilterBTN'

const Status = ({setStatus,setPageNumber}) => {

    let status = ["Alive", "Dead", "Unknown"]

    return (
        <div className="status-filter filters">
{status.map((item,index)=>(<FilterBTN index = {index} key ={index} item= {item}  name="status" task={setStatus} setPageNumber={setPageNumber}/>
)

)}   
      </div>
    )
}

export default Status
