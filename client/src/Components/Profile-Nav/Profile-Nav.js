import React from "react"
import "./Profile-Nav.css"
import { Link } from "react-router-dom"
import LogoutButton from "../LogoutButton/LogoutButton"


function projectNav(props) {


    return (

        <nav className="navbar navbar-light primary-color">
            <div className="navWrap">
             <img src="https://www.cybermark.com/wp-content/uploads/2018/08/mainLogo.png" height="65" alt="cybermark logo" />
             
            <Link to={{ pathname: "/" }} className="btn homeButton">Home</Link>
            <LogoutButton/>
            </div>
        </nav>

    )
}

export default projectNav