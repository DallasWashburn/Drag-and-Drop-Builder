import React from "react"
import "./Header.css"
import LogoutButton from "../LogoutButton/LogoutButton"
import DropDown from "../Drop-Down/Drop-Down"


function Header (props){


    return (
        
        <nav className="navbar navbar-light primary-color">
        <DropDown />
        {/* <LogoutButton/> */}
      </nav>
      
    )
}

export default Header