import React, { Component } from "react"


class PricingButton extends Component {
    render(){
        return (
            <div id="pricingOne">
            <button type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" className="menu-btn" onMouseDown={this.props.handleMouseDown}>Pricing Table<span className="menu-span">+</span></button>
            </div>
        )
    }
}


export default PricingButton