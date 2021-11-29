import React from 'react'
import Gender from './Category/Gender'
import Status from './Category/Status'
import Species from './Category/Species'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import "./Filters.css"
// import 'react-accessible-accordion/dist/fancy-example.css'

const Filters = ({pageNumber,setPageNumber, setStatus,setGender,setSpecies,status}) => {

    let clear = () => {
        setStatus("");
        setGender("");
        setSpecies("");
        setPageNumber(1);
        window.location.reload(false);
      };


    return (
        <div className="filters-sidebar">
           
            <h2>Filters</h2>
           
            <Accordion allowMultipleExpanded={true} allowZeroExpanded ={true}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       <h3>Gender</h3>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <Gender setGender={setGender} setPageNumber={setPageNumber}/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <h3>Status</h3>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                 <Status setStatus={setStatus} status={status} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <h3>Species</h3>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                 <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        <button onClick={clear}>Clear</button>
         
            
        </div>
    )
}

export default Filters
