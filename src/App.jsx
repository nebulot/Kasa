import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Banner from "./Components/Banner.jsx";
import ApartmentGrid from "./Components/ApartmentGrid.jsx";
import Main from "./Components/Main.jsx";
import "./App.css";



function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <ApartmentGrid />
      </Main>
    </div>
  );
}

export default App