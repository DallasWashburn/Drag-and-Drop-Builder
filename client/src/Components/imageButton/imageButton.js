import React, { Component } from "react"
import Tooltip from "../Tooltip/Tooltip"
import "./imageButton.css"


class imageButton extends Component {
    render() {
        return (
            <div id="imageButton">
                <Tooltip content="Click to edit image" direction="top">
                <button data-toggle onClick={this.props.getImage} type="button" className="btn"><i className="far fa-images"></i></button>
                </Tooltip>
            </div>
        )
    }
}


export default imageButton