import React, { useState } from 'react'
import "../Components/ApartmentDescription.scss";

export function ApartmentDescription(props) {
    const [isContentVisible, setIsContentVisible] = useState(true);

    const showContent = () => {
        setIsContentVisible(!isContentVisible);
    };

    const contentClass = (isContentVisible ? "visible" : "hidden") + " apartment__description__content";
    const chevronClass = (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";
    return (
        <div className="apartment__description">
            <p className="apartment__description__header" onClick={showContent}>
                <span>{props.title}</span>
                <i className={chevronClass}></i>
            </p>
            <p className={contentClass}>{props.content}</p>
        </div>
    );

}

export default ApartmentDescription