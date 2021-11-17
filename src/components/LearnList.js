import React from "react";
import LearnItem from "./LearnItem";

function LearnList ({learnItems}) {
    return (
          <div>
            <h2 className="ui center aligned header">Learning Resources</h2>
            {learnItems.map((learnItem)=> {
              return (
                <LearnItem
                key = {learnItem.id}
                learnItem= {learnItem}
                />
              )
            }
            )}
          </div>
      );
}

export default LearnList;

