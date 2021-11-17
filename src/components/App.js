import React from 'react';
import LearnContainer from "./LearnContainer"
// import Background from "src/images/LearnBackground.jpg"
// styles={{ backgroundImage:`url(${Background})` }} 


function App() {
  return (
    <div className="App">
      <header className="Learn-header">
        <h1> Discover Learning Resources </h1>
        <div >
          <LearnContainer /> 
        </div>
      </header>
    </div>
  );
}

export default App;
