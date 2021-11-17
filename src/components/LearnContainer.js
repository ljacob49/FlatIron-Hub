import React from "react";
import LearnList from "./LearnList"
import AddLearn from "./AddLearn"
import Search from "./Search";
import {useState} from 'react';
import {useEffect } from 'react';
import background from "../images/background.jpg"

function LearnContainer() {
    const[ learnItems, setLearnItems ] = useState ([]);
    const[ searchTerm, setSearchTerm] = useState ('')
    
    useEffect(() => {
        fetch("http://localhost:8000/learnitems")
        .then ((res) => res.json())
        .then ((learnItemsArray ) => {
            setLearnItems (learnItemsArray)
        })
    }, []);

    function handleAddLearnItems(newLearnItem) {
        const updatedLearnItemsArray = [... learnItems, newLearnItem];
        setLearnItems(updatedLearnItemsArray);
    }

    const displayedLearnItems = learnItems.filter((learnItem) =>{
        return learnItem.description.toLowerCase().includes(searchTerm.toLowerCase())
    });

    return (
        <div className= "LearnContainer"
        style = {{backgroundImage: `url(${background})`}}>
            <Search searchTerm = {searchTerm} onSearchChange = {setSearchTerm} />
            <AddLearn onAddLearn = {handleAddLearnItems}/>
            <LearnList 
            learnItems = {displayedLearnItems}/>
        </div>
    )
};

export default LearnContainer