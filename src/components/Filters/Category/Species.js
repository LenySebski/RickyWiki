import React from 'react'
import FilterBTN from '../FilterBTN'

const Species = ({setSpecies,setPageNumber}) => {

    let species = [
        "Human", "Alien", "Humanoid",
        "Poopybutthole", "Mythological", "Unknown",
        "Animal", "Disease","Robot","Cronenberg","Planet",
      ];

    return (
        <div className="species-filter filters">
            {species.map((item,index)=>(<FilterBTN index = {index} key ={index} item= {item}  name="species" task={setSpecies} setPageNumber={setPageNumber}/>
)

)}
        </div>
    )
}

export default Species
