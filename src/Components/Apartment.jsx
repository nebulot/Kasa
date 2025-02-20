import React from 'react';
import { Link } from "react-router-dom";
import "./ApartmentGrid.css";

function Apartment() {
    return (
        <div className="apartment">
            <Link to="/flat">
                <div className="apartment__subtitle">Titre de la location</div>
            </Link>
        </div>
    );
}

export default Apartment