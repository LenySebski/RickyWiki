import React, { useState,useEffect } from 'react'
import Cards from '../components/Cards/Cards'
import InputGroup from '../components/Filters/Category/InputGroup'

const Location = () => {
   
    const [results, setResults] = useState([])
    const [info,setInfo] = useState([])
    const {dimension,type,name} = info
   let [number,setNumber] = useState(1)
   let [total,setTotal] = useState('')

   let locationArray = Array.from({length: 126}, (_, i) => i + 1)

   let api = `https://rickandmortyapi.com/api/location/`

//fetching All locations, where response is array of 126 objects
useEffect(() => {
    (async function() {
        let dataTotal = await fetch(`${api}${locationArray}`).then((res)=>res.json())
        setTotal(dataTotal)
        
    })()
    
}, [])
   
   useEffect(() => {
       (async function() {
           let data = await fetch(`${api}${number}`).then((res)=>res.json())
           setInfo(data)

           let a = await Promise.all(
               data.residents.map((x) => {
                 return fetch(x).then((res) => res.json())
               })
             )
             setResults(a)
             
       })() 
  
   }, [number])



   return (
       <div className="episode-container">
           <div className="title-container">
               <h1>
               {type?type:""}: <span className="title"> {name? name: 'Unknown'}</span>
               </h1>
               
               <h4>{dimension? dimension:'Unknown'}</h4>
           </div>
           <div className="container">
           <InputGroup name="location" changeID={setNumber} total={total}/>
           <Cards 
            page = "/location/"
           results={results}/>
           
           </div>
       </div>
   )

}

export default Location
