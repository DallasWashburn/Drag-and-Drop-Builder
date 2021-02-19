import React, { Component } from "react"
import "./Header0.css"


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

    editText = (event) => {
        event.preventDefault();
        console.log(event.target.id);
        var contentId = event.target.id;
        var newText = prompt("Enter text");
        if(contentId === "link1"){
            this.setState({
                linkOne:newText
            });
        } else if (contentId === "link2"){
            this.setState({
                linkTwo:newText
            });
        } else if (contentId === "link3"){
            this.setState({
                linkThree:newText
            });
        }  else if (contentId === "link4"){
            this.setState({
                linkFour:newText
            });
        } 
    }

    render(){
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">
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
                        <a className="nav-link" id="link1" onClick={this.editText}>{this.state.linkOne} <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="link2" onClick={this.editText}>{this.state.linkTwo}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="link3" onClick={this.editText}>{this.state.linkThree}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="link4" onClick={this.editText}>{this.state.linkFour}</a>
                    </li>
                </ul>
    
            </div>
        </nav>
        )
    }
}


export default Header0