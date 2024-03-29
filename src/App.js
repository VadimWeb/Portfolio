import React from 'react';
import './App.css';
import Header from "./Header";
import Profile from "./Profile";
import Skills from "./Skills";
import Works from "./Works";
import Distant from "./Distant";
import Contacts from "./Contacts";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
     <div className="portfolio">
       <Header/>
       <Profile/>
       <Skills/>
       <Works/>
       <Distant/>
       <Contacts/>
       <Footer/>
     </div>
    </div>
  );
}

export default App;
