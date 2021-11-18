import React from "react";
import LearnList from "./LearnList"
import AddLearn from "./AddLearn"
import Search from "./Search";
import {useState} from 'react';
import {useEffect } from 'react';

function LearnContainer() {
    const[ learnItems, setLearnItems ] = useState ([]);
    const[ searchTerm, setSearchTerm] = useState ('')
    
    useEffect(() => {
        fetch("http://localhost:3000/learnitems")
        .then ((res) => res.json())
        .then ((learnItemsArray ) => {
            setLearnItems (learnItemsArray)
        })
    }, []);

    function handleAddLearnItems(newLearnItem) {
        const updatedLearnItemsArray = [...learnItems, newLearnItem];
        setLearnItems(updatedLearnItemsArray);
    }

    const displayedLearnItems = learnItems.filter((learnItem) =>{
        return learnItem.description.toLowerCase().includes(searchTerm.toLowerCase())
    });

    return (
        <div className= "LearnContainer">
            <Search searchTerm = {searchTerm} onSearchChange = {setSearchTerm} />
            <AddLearn onAddLearn = {handleAddLearnItems}/>
            <LearnList 
            learnItems = {displayedLearnItems}/>
        </div>
    )
};

export default LearnContainer