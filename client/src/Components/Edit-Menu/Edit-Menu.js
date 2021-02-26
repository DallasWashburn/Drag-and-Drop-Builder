import React, { Component } from "react";
import "./Edit-Menu.css"

class EditMenu extends Component {
    render() {
        return (
            <div id="mySidebar" className="sidebar">
                <button className="closebtn" onClick={this.props.closeEdit}><i class="far fa-arrow-alt-circle-left"></i></button>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <div className="label-wrap">
                            <label className="">Update Heading
                    <input type="text" className="form-control" name="h3Heading" onChange={this.props.handleInputChange}/>
                            </label>
                        </div>
                        <div className="label-wrap">
                            <label className="">Update paragraph text
                    <input type="text" className="form-control" name="pFirst" onChange={this.props.handleInputChange}/>
                            </label>
                        </div>
                        <div className="submit-btn-wrap">
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }


};

export default EditMenu;