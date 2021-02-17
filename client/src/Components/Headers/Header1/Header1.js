import React, { Component } from "react"


class Header1 extends Component {
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
            <nav class="navbar navbar-expand-md navbar-light bg-light">
            <a class="navbar-brand" href="/">
                <img src="../Placeholder Images/mainLogo.png" width="250" height="60" class="d-inline-block align-top"
                    alt="" loading="lazy" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto mr-5">
                    <li class="nav-item active">
                        <a class="nav-link" id="link1" onClick={this.editText}>{this.state.linkOne} <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="link2" onClick={this.editText}>{this.state.linkTwo}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="link3" onClick={this.editText}>{this.state.linkThree}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="link4" onClick={this.editText}>{this.state.linkFour}</a>
                    </li>
                </ul>
    
            </div>
        </nav>
        )
    }
}


export default Header1