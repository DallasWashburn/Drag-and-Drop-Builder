import React, { Component } from "react"
import "./Edit-Button.css"

class EditButton extends Component {


    render(){
        return (
            <div id="editButtonDiv" >
            <button data-content={this.props.data} id="editButton" classsName="btn" onClick={this.props.openEdit}><i class="far fa-lg fa-edit"></i></button>
            </div>
        )
    }
}


export default EditButton