import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Side from "../components/Side";

export default function Root() {
    return (
        <div className="rootcontainer">
            <Header/>
            <Side/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}