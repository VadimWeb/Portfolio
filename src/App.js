import React from 'react';
import './App.css';
import Header from "./Header";
import Profile from "./Profile";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
     <div className="portfolio">
       <Header/>
       <Profile/>
       <Skills/>
     </div>
    </div>
  );
}

export default App;
