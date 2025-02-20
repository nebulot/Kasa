import React from 'react';
import "./ApartmentGrid.css";
import ApartmentCard from "./ApartmentCard";

function ApartmentGrid() {
    return (
        <div className="grid">
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
            <ApartmentCard />
        </div>
    )
}

export default ApartmentGrid