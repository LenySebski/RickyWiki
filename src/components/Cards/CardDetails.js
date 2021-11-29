import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const CardDetails = () => {

    let {id} = useParams()
    let [fetchData,setFetchData] = useState([])
    let {name,location,type,origin,gender,image,status,species} = fetchData
    
    let api = `https://rickandmortyapi.com/api/character/${id}`

    useEffect(() => {
        (async function() {
            let data = await fetch(api).then((res)=>res.json())
            setFetchData(data)
        })()
       
    })

    console.log(fetchData)

    
    const badgeStyle=  function () {
        if (status === "Alive") {
            return{background: "#6a994e"}}
        else if (status === "Dead") {
            return{background:"#e63946"}}
        else {
            return{background:"#343a40"}}
    }()


    return (<div className="container">
        <div key={id} className="card-container card-container-big">
        
        <img src={image} alt={name} className="card-image" />

        <div className="card-info">
        <span className="badge-big"
        style={badgeStyle}
        >{status}</span>
            <span className="triangle"></span>
            <h2>{name} </h2>
            <h4>origin:</h4> <span>{origin?.name}</span>
            <h4>gender:</h4> <span>{gender}</span>
            <h4>Species:</h4> <span>{species}</span>
            <h4>type:</h4> {type?<span> {type}</span>:<span>Unknown</span>}
            <h4>Last seen:</h4> <span>{location?.name}</span>

        </div>

    </div>
    </div>
    )
}

export default CardDetails
