import React, { Component } from "react"
import "./Header0.css"
import InlineEdit from "../../inlineEdit"


class Header0 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            linkOne: "Stories",
            linkTwo:"Company",
            linkThree:"About",
            linkFour:"Contact"
        }
    }


    render(){
        return (
            <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand">
                <img src="../logo.png" width="250" height="60" className="d-inline-block align-top"
                    alt="" loading="lazy" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" id="link1" ><InlineEdit text={this.state.linkOne} onSetText={text => this.setState({linkOne:text})}/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="link2" ><InlineEdit text={this.state.linkTwo} onSetText={text => this.setState({linkTwo:text})}/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="link3" ><InlineEdit text={this.state.linkThree} onSetText={text => this.setState({linkThree:text})}/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="link4" ><InlineEdit text={this.state.linkFour} onSetText={text => this.setState({linkFour:text})}/></a>
                    </li>
                </ul>
    
            </div>
        </nav>
        )
    }
}


export default Header0