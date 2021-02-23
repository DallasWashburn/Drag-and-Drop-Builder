import React, { Component } from "react"
import "./Edit-Button.css"

class EditButton extends Component {


    render(){
        return (
            <div id="editButtonDiv" >
            <button id="editButton" classsName="btn" onClick={this.props.openEdit}>Edit Content</button>
            </div>
        )
    }
}


export default EditButton