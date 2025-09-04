import React from 'react';
import icon from "../assets/shadow_core_mini_2.png"
import "../componentsStyle/navbar.css";
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <>
            <div className={"d-flex justify-content-center align-items-center fejlec"}>
                <p className={"headerText"}><Link to={"/"}>HOME</Link></p>
                <p className={"headerText"}><Link to={"/products"}>ALL PRODUCTS</Link></p>
                <img className={"icon"} src={icon} alt={"SHDWCORE"}/>
                <p className={"headerText"}><Link to={"/collections"}>COLLECTIONS</Link></p>
                <p className={"headerText"}><Link to={"/about"}>ABOUT US</Link></p>
            </div>
        </>
    )
}

export default Navbar