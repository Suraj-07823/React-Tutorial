// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import React from 'react';
import First from './component/First';
import Second from './component/Second';
import Demoboot from "./component/demoboot";
import Gridcol from './component/Gridcol';
import Carddemo from './component/Carddemo';


function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 style={{'color':'cyan'}}>My first react app</h1>
        <p style={{'fontSize':'18px','color':'white'}}>react -js library</p>
      </div>
      <First></First>
      <Second></Second>
      <Demoboot></Demoboot>
      <Gridcol></Gridcol>
      <Carddemo></Carddemo>
      
    </>
  );
}

export default App;
