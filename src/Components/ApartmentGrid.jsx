import React, { useEffect, useState } from "react";
import "./ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard";
import { useApartments } from "./../hooks/useApartments.jsx";

//fetch("db.json").then((res) => res.json()).then(console.log);

function ApartmentGrid() {
    const apartments = useApartments();
    return (
        <div className="grid">
            {apartments.map((apartment) => (
                <ApartmentCard
                    title={apartment.title}
                    imageUrl={apartment.cover}
                    id={apartment.id}
                    key={apartment.id}
                />
            ))}
        </div>
    );
}

export default ApartmentGrid