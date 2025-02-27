import React from 'react';
import "../Components/ApartmentHeader.scss";

export function ApartmentHeader() {
    return (
        <div className="apartment__page__header">
            <div className="apartment__page__title">
                <h1>Crazy loft on Canal Saint Martin</h1>
                <h2>Paris, Ile de France </h2>
                <div className="apartment__tags">
                    <span>Cozy</span>
                    <span>Canal</span>
                    <span>Paris 10</span>
                </div>
            </div>
            <div className="apartment__page__owner">
                <div className="apartment__owner__details">
                    <h3>Alexandre Dumas</h3>
                    <div className="apartment__owner__badge"></div>
                </div>
                <div className="apartment__owner__stars">
                    <span className="on">★</span>
                    <span className="on">★</span>
                    <span className="on">★</span>
                    <span className="off">★</span>
                    <span className="off">★</span>
                </div>
            </div>
        </div>
    )
}
