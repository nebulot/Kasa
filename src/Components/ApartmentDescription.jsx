import React from 'react'
import "../Components/ApartmentDescription.scss";

export function ApartmentDescription() {
    return (
        <div className="apartment__description">
            <p className="apartment__description__header">
                <span>Description</span>
                <i className="fas fa-chevron-down"></i>
            </p>

            <p className="apartment__description__content">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    )
}

export default ApartmentDescription