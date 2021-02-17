import React, { Component } from "react"


class Header2 extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src="../Placeholder Images/mainLogo.png" width="250" height="60" className="d-inline-block align-top"
                    alt="" loading="lazy" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto mr-5">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Stories <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Company</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Contact</a>
                    </li>
                </ul>
    
            </div>
        </nav>
        )
    }
}


export default Header2