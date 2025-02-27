import React from "react";
import "./ApartmentPage.scss";
import { ApartmentDescription } from "../Components/ApartmentDescription";
import { ApartImgBanner } from "../Components/ApartImgBanner";
import { ApartmentHeader } from "../Components/ApartmentHeader";

function ApartmentPage() {

    return (
        <div className="apartment__page">
            <ApartImgBanner />
            <ApartmentHeader />

            <div className="apartment__description__area">
                <ApartmentDescription />
                <ApartmentDescription />
            </div>
        </div >
    );
}

export default ApartmentPage;