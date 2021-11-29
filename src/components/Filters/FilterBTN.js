import React from 'react'

const FilterBTN = ({item,index,name,setPageNumber,task}) => {

   
    return (
        <div key={index}>
             <style jsx>
    {`
      .filter-checkbox:checked + label {
        background-color: rgba(73, 73, 73, 0.747);
        color: white }
      input[type="radio"] { display: none; }
    `}
  </style>
            
            <input
            className="filter-checkbox"
            type="radio" 
            id={`${name}${index}`}
            name={name}
            value=""/>
            <label 
            className = "filter-label"
            htmlFor={`${name}${index}`}
            onClick = {(x)=>{
                task(item)
                setPageNumber(1)
            }}
            >{item}</label>
        </div>
    )
}

export default FilterBTN

