import React from 'react';
import './App.css';
import MyHeader from "./Components/MyHeader";
import MyFooter from "./Components/MyFooter";
import MyFooter2 from "./Components/MyFooter2";
import MainSection from "./Components/MainSection";
import Clicker from "./Components/Clicker";

function App() {
  return (
    <div className="App">
    <MyHeader></MyHeader>
    <h1>This is React Intro Page.</h1>
    <MainSection></MainSection>
    <p>This is paragraph tag in App.js file</p>
    <Clicker></Clicker>
    <MyFooter2></MyFooter2>
    </div>
    
  );
}



export default App;
