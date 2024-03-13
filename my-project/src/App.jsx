import React from "react";
import Navbar from "./components/Navbar";  
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Food from "./components/Food";
import Catagory from "./components/Catagory";

function App(){
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
       <Cards></Cards>
       <Food></Food>
       <Catagory></Catagory>
    </div>
  );
}

export default App;