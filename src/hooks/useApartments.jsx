import { useState, useEffect } from "react";

export const useApartments = () => {
    const [apartments, setApartments] = useState([]);
    useEffect(() => {
        const abortController = new AbortController();
        fetch("/Nebulotelodie_Kasa/db.json", { signal: abortController.signal })
            .then((res) => res.json())
            .then((res) => {
                console.log("Apartments fetched:", res); // Vérifie les données récupérées
                setApartments(res);
            })
            .catch((error) => {
                console.error("Error fetching apartments:", error);
            });

        return () => {
            console.log("cleanup");
            abortController.abort();
        };
    }, []);
    return apartments;
};