import React, { useState,useEffect } from 'react'
import Cards from '../components/Cards/Cards'
import InputGroup from '../components/Filters/Category/InputGroup'

const Episodes = () => {

     const [results, setResults] = useState([])
     const [info,setInfo] = useState([])
     const {air_date,episode,name} = info
    let [id,setId] = useState(1)
    let [total,setTotal] = useState('')
    
    //array [1-51] to generate the select menu with the titles of episodes (left sidebar)
    //in other way response is already paginated what makes it more complicated to get all episodes at once 
 
    let episodesArray = Array.from({length: 51}, (_, i) => i + 1)  

    let api = `https://rickandmortyapi.com/api/episode/`


//fetching All episodes where response is array of 51 objects
    useEffect(() => {
        (async function() {
            let dataTotal = await fetch(`${api}${episodesArray}`).then((res)=>res.json())
            setTotal(dataTotal)
            
        })()
        
    }, [])


    //generating requested filtred fetch response
    useEffect(() => {
        (async function() {
            
            let data = await fetch(`${api}${id}`).then((res)=>res.json())
            setInfo(data)
            

            let a = await Promise.all(
                data.characters.map((x) => {
                  return fetch(x).then((res) => res.json())
                })
              )
              setResults(a)
              
        })() 
   
    }, [id])


 
    return (
        <div className="episode-container">
            <div className="title-container">
                <h1>
                    {episode} <span className="title"> {name? name: 'Unknown'}</span>
                </h1>
                <h4>Air date: {air_date? air_date:'Unknown'}</h4>
            </div>
            <div className="container">

            <InputGroup name="Episode" changeID={setId} total={total}/>
            <Cards 
            page = "/episodes/"
            results={results}/>
            
            </div>
        </div>
    )
}

export default Episodes
