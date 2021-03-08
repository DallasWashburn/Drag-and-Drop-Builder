import React, { Component } from "react"


class TeamButton extends Component {
    render(){
        return (
            <div id="teamOne">
            <button type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" className="menu-btn" onMouseDown={this.props.handleMouseDown}>Team<span className="menu-span">+</span></button>
            </div>
        )
    }
}


export default TeamButton