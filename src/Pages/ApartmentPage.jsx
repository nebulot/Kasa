import React, { useEffect, useState } from "react";
import { ApartmentDescription } from "../Components/ApartmentDescription";
import { ApartImgBanner } from "../Components/ApartImgBanner";
import { ApartmentHeader } from "../Components/ApartmentHeader";
import { useApartment } from "../hooks/useApartment";
import "./ApartmentPage.scss";


function ApartmentPage() {
    const flat = useApartment();

    if (flat == null) return <div>Loading...</div>;
    return (
        <div className="apartment__page">
            <ApartImgBanner pictures={flat.pictures} />
            <ApartmentHeader flat={flat} />
            <div className="apartment__description__area">
                <ApartmentDescription title="Description" content={flat.description} />
                <ApartmentDescription
                    title="Equipements"
                    content={flat.equipments.map((eq, i) => (
                        <li key={i}>{eq}</li>
                    ))}
                />
            </div>
        </div>
    );
}
export default ApartmentPage;