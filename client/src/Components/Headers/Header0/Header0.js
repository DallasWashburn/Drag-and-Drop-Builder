import React, { Component } from "react"
import "./Header0.css"
import InlineEdit from "../../inlineEdit"



class Header0 extends Component {

    render(){
        return (
            <nav className="navbar navbar-expand-md navbar-light">
            <span className="navbar-brand">
                <img src="../logo.png" width="250" height="60" className="d-inline-block align-top"
                    alt="" loading="lazy" />
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <span className="nav-link" id="link1" ><InlineEdit text={this.props.headerLink1} onSetText={text => this.props.getHeaderInfo(text)}/></span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" id="link2" ><InlineEdit text={this.props.headerLink2} onSetText={text => this.props.getHeaderInfo(undefined, text)}/></span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" id="link3" ><InlineEdit text={this.props.headerLink3} onSetText={text => this.props.getHeaderInfo(undefined,undefined, text)}/></span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" id="link4" ><InlineEdit text={this.props.headerLink4} onSetText={text => this.props.getHeaderInfo(undefined,undefined,undefined, text)}/></span>
                    </li>
                </ul>
    
            </div>
        </nav>
        )
    }
}


export default Header0