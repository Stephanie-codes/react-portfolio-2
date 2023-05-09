import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Side from "../components/Side";

export default function Root() {
    return (
        <>
            <Header/>
            <Side/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}