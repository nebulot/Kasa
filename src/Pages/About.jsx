import React from "react";
import { ApartmentDescription } from "../Components/ApartmentDescription";
import { ApartImgBanner } from "../Components/ApartImgBanner";

import "./About.scss";

function About() {
    return (
        <>
            <ApartImgBanner />
            <div className="about__container">
                <ApartmentDescription />
                <ApartmentDescription />
                <ApartmentDescription />
                <ApartmentDescription />
            </div >
        </>
    );
}

export default About;