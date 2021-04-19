import React, { Component } from "react"
import LogoutButton from "../LogoutButton/LogoutButton"
import "./Profile-Nav.css"

class ProfileNav extends Component {

    dropDownMenu = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }


    render() {
        return (
            <div id="profileNav">
                <a href="/"><img src="https://www.cybermark.com/wp-content/uploads/2018/08/mainLogo.png" height="45" alt="cybermark logo" /></a>
                <div className="dropDown">
                    <button className="dropbtn" onClick={this.dropDownMenu} type="button" id="dropDownMenu"><i className="fas fa-lg fa-bars"></i></button>
                    <div id="myDropdown" className="dropdown-content">
                        <a href="/">Home</a>
                        <LogoutButton />
                    </div>
                </div>
            </div>
        )
    }
}


export default ProfileNav