import React from 'react'
import "./Pagination.css"
import ReactPaginate from 'react-paginate';


const Pagination = ({ setPageNumber, pageNumber, results, info }) => {


    if (info?.pages > 1) {
        return <ReactPaginate
            pageCount={info?.pages}
            forcePage = {pageNumber===1 ?0 : pageNumber -1}
            breakLabel=". . ."
            nextLabel="next"
            previousLabel="prev"
            pageRangeDisplayed={3}
            renderOnZeroPageCount={null}
            nextClassName="prev-next"
            previousClassName="prev-next"
            pageLinkClassName="page-numbers"
            activeLinkClassName="active-page"
            disabledClassName="invisible"
            onPageChange={(data) => { setPageNumber(data.selected +1 ) }}
        />
    } else {
        return <div />
    }


}






// let prev = () => {
//     setPageNumber((page) => page - 1)
// }
// let next = () => { 
//     setPageNumber((page) => page + 1)
// }
//   if (results){{
//     if (pageNumber === 1)
//         return (<div className="container">
//             <button disabled onClick={prev}>Prev</button>
//             <button onClick={next}>Next</button>
//         </div>)
//     else return (<div className="container">
//         <button onClick={prev}>Prev</button>
//         <button onClick={next}>Next</button>
//     </div>)
// }    else { return <div /> }





export default Pagination
