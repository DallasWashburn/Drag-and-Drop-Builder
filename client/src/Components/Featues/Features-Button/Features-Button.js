import React, { Component } from "react"


class FeaturesButton extends Component {
    render() {
        return (
            <div id="featureOne">
                <button type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" className="menu-btn" onMouseDown={this.props.handleMouseDown}>Features<span className="menu-span">+</span></button>
            </div>
        )
    }
}


export default FeaturesButton