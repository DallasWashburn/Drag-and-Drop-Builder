import React, { Component } from "react"
import "./imageButton.css"


class imageButton extends Component {
    render(){
        return (
            <div id="imageButton">
            <button  type="button" className="btn"><i onClick={this.props.getImage} class="far fa-images"></i></button>
            </div>
        )
    }
}


export default imageButton