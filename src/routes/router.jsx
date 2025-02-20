import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Footer from "../Layout/Footer";
import Main from "../Layout/Main";
import Navbar from "../Components/Navbar";
import ApartmentPage from "../Pages/ApartmentPage";
import About from "../Pages/About";
import { ErrorPageNotFound } from "../Pages/ErrorPageNotFound";

const HeaderFooterLayout = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
};

export const router = createBrowserRouter([
    {
        element: <HeaderFooterLayout />,
        errorElement: <ErrorPageNotFound />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/flat",
                element: <ApartmentPage />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
]);