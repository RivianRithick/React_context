import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="fixed-top">
        <Navbar />
        <Header />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center cardcss">
        <Card />
      </div>
    </>
  );
}

export default App;
