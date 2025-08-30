import React from 'react';
import icon from "../assets/shadow_core_mini_2.png"
import "../componentsStyle/navbar.css";

function Navbar() {
    return (
        <>
            <div className={"d-flex justify-content-center align-items-center fejlec"}>
                <p className={"headerText"}><a>HOME</a></p>
                <p className={"headerText"}><a>ALL PRODUCTS</a></p>
                <img className={"icon"} src={icon} alt={"SHDWCORE"}/>
                <p className={"headerText"}><a>COLLECTIONS</a></p>
                <p className={"headerText"}><a>ABOUT US</a></p>
            </div>
        </>
    )
}

export default Navbar