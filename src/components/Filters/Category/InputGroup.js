import React from 'react'

const InputGroup = ({name,changeID,total}) => {

  if(total) {  
    return (
        <div className="input-group">
            <select
            onChange={(e)=>changeID(e.target.value)}
            className="select"
            id={name}>

<option value="1">Choose...</option>

{total.map((x,index)=>{
    return(<option key={index} value={index+1}>{x.name}</option>)
})}
{/* {[...Array(total).keys()].map((x,index)=>{
    return(
        <option key={index} value={x+1}>
            {name} - {x+1}
            </option>
    )
})} */}

            </select>
        </div>
    )}
    else {
        return (<div></div>)
    }
}

export default InputGroup
