import React from "react";
import Banner from "../Layout/Banner.jsx";
import ApartmentGrid from "../Components/ApartmentGrid.jsx";
import "./HomePage.css";



function HomePage() {
  return (
    <>
      <Banner />
      <ApartmentGrid />
    </>
  );
}

export default HomePage