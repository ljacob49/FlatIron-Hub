import React from "react";

function LearnItem ({learnItem}) {
    return(
        <li className = "learn-cards">
             <img src={learnItem.image} alt={learnItem.name} />
             <h3>{learnItem.name}</h3>
             <p>Description: {learnItem.description}</p>
             <p>Link to Resource: {learnItem.URL} </p>
         </li>
      
    )
}

export default LearnItem;
