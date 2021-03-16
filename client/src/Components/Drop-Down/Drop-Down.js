import React, { Component } from "react"
import "./Drop-Down.css"
import LogoutButton from "../LogoutButton/LogoutButton"
import ProfileButton from "../Profile-Button/Profile-Button"

class dropDown extends Component {

    dropDownMenu = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    
    render() {
        return (
            <div class="dropDown">
                <button className="dropbtn" onClick={this.dropDownMenu} type="button" id="dropDownMenu"><i className="fas fa-lg fa-bars"></i></button>
                <div id="myDropdown" class="dropdown-content">
                    <ProfileButton/>
                    <LogoutButton/>
                </div>
            </div>
        )
    }
}


export default dropDown