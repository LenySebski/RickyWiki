import React from 'react'
import FilterBTN from '../FilterBTN'
const Gender = ({setGender,setPageNumber}) => {

    let gender = ["male","female","genderless","unknown"]

    return (
        <div className="gender-filter filters">
            {gender.map((item,index)=>(<FilterBTN index = {index} key ={index} item= {item} task={setGender} name="gender" setPageNumber={setPageNumber}/>
)

)}   
        </div>
    )
}

export default Gender
