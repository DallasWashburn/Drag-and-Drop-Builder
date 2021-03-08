import React, { Component } from "react"


class FooterButton extends Component {
    render() {
        return (
            <div id="footerOne">
                <button type="button" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen" className="menu-btn footer-btn" onMouseDown={this.props.handleMouseDown}>Footer<span className="menu-span">+</span></button>
            </div>
        )
    }
}


export default FooterButton