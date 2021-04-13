import React, { Component } from "react"
import ContentButton from "../Content-Button/Content-Button"
import ContentMenu from "../Content-Menu/Content-Menu"


class ContentContainer extends Component {
    constructor(props, context) {
        super(props, context);


        this.handleMouseDown = this.handleMouseDown.bind(this)
        
    }

    handleMouseDown(event) {
        event.stopPropagation();
        var span = event.target.querySelector("span")
        var elementTag = event.target.tagName
        var aria = event.target.getAttribute("aria-expanded")

        if (elementTag === "SPAN") {
            span = event.target.parentElement.querySelector("span")
            aria = event.target.parentElement.getAttribute("aria-expanded")
        }
        if (aria === "true") {
            span.style.transition = "transform 0.3s ease-in-out"
        } else if(aria === "true" && elementTag === "SPAN"){
            span.style.transition = "transform 0.3s ease-in-out"
        } else if (aria === "false" && elementTag === "SPAN") {
            span.style.transition = "transform 0.3s ease-in-out"
        }  else {
            span.style.transition = "transform 0.3s ease-in-out"
        }
    }



render() {
    return (
        <div className="accordian" id="accordionContent">
        <ContentButton handleMouseDown={this.handleMouseDown}/>
        <ContentMenu onArrow={this.props.onArrow}  handleMouseDown={this.handleMouseDown} />
        </div>
    )
}
}
export default ContentContainer




