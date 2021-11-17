import React from "react";

function LearnItem ({learnItem}) {
    return(
        <ul className = "learn-cards">
             <h2>{learnItem.name}</h2>
             <p>Description: {learnItem.description}</p>
             <img src={learnItem.Image} />
             <p>Link to Resource: {learnItem.URL} </p>
         </ul>
    )
}

export default LearnItem;
