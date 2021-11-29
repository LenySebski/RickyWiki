import React from 'react'
import "./Search.css"

const Search = ({setSearch,setPageNumber,search} ) => {
    
    function handleSearch(event) {
    setSearch(event.target.value)
    setPageNumber(1)
}


return (
       
            <form onSubmit={e=>e.preventDefault()}>
        
                <input type="text"
                 name="search"
                 placeholder="Looking for someone?"
                value={search}
                  onChange={handleSearch}
                   />
                   
            </form>
                
       
    )
}

export default Search
