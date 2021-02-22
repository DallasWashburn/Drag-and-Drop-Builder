import React, { Component } from "react"
import "./Header1.css"

class Header1 extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-md navbar-light header2">
            <a className="navbar-brand">
                <img src="../logo.png" width="250" height="60" className="d-inline-block align-top"
                    alt="" loading="lazy"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto pr-1">
                    <li className="nav-item active">
                        <a className="nav-link">Stories <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Company</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Contact</a>
                    </li>
                </ul>
                <a className="btn btn-md ">Order Now</a>
            </div>
        </nav>
        )
    }
}


export default Header1