import React from "react";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import Find from "./Components/find/Find";
import Driver from "./Components/driver/Driver";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Find/>
      <Driver/>
      <Footer/>
    </div>
  );
}

export default App;
