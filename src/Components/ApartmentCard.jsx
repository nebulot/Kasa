import React from 'react';
import { Link } from "react-router-dom";
import "./ApartmentGrid.scss";

function ApartmentCard() {
    return (
        <Link to="/flat">
            <div className="apartment">
                <div className="apartment__subtitle">Titre de la location</div>
            </div>
        </Link>
    );
}

export default ApartmentCard