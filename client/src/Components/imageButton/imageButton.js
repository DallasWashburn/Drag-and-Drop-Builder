import React, { Component } from "react"
import "./imageButton.css"


class imageButton extends Component {
    render(){
        return (
            <div id="imageButton">
            <button onClick={this.props.getImage}  type="button" className="btn"><i class="far fa-images"></i></button>
            </div>
        )
    }
}


export default imageButton