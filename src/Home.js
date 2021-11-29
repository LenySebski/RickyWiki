import React from 'react'

import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';


const Home = () => {
  


  
  //API fetch 
  let [pageNumber, setPageNumber] = useState(1)
  let [fetchedData, setFetchedData] = useState([])
  let [search, setSearch] = useState("")
  let [status, setStatus] = useState("")
  let [gender, setGender] = useState("")
  let [species, setSpecies] = useState("")
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
  let { info, results } = fetchedData



  useEffect(() => {

    (async function () {
      let data = await fetch(api).then(res => res.json())
      setFetchedData(data)

    })()//immidiate invoke function


  }//useEffect function
    , [api])//useEffect

  return (
    <div className="App">
      <main>
        <Search
          setSearch={setSearch}
          setPageNumber={setPageNumber} />

        <div className="container">

          <Filters
            setGender={setGender}
            setSpecies={setSpecies}
            setStatus={setStatus}
            pageNumber={pageNumber}
            status={status}
            setPageNumber={setPageNumber} />

          <Cards
            page="/"
            results={results} />
        </div>
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          results={results}
          info={info} />
      </main>

    </div>
  );
}

export default Home

