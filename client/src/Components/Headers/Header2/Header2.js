import React, { Component } from "react"
import "./Header2.css"

class Header2 extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-md navbar-light header3">
            <a className="navbar-brand" href="#">
                <img src="../logo.png" width="250" height="60" className="d-inline-block align-top"
                    alt="" loading="lazy" />
    
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
    
            </div>
            <a className="btn btn-md">Order Now</a>
        </nav>
        )
    }
}


export default Header2