import React, { Component } from "react"
// import API from "../../utils/API"
import "./New-Client-Form.css"

class NewCLientForm extends Component {


    render() {
        return (

            <div className="wrapper d-flex justify-content-center align-items-center">
                <div className="container">
                    <div class="login-container w-100">
                        <div class="login-col">
                            <div className="login-box">
                                <div className="login-header">
                                    <h2>Welcome!</h2>
                                    <p>Please fill out the following information</p>
                                </div>
                                <form onSubmit="return false;" method="post">
                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input
                                            onChange={this.props.handleChange}
                                            type="text"
                                            className="form-control"
                                            id="companyName"
                                            name="companyName"
                                            placeholder="Company Name" />
                                    </div>
                                    <div className="form-group">
                                        <label>URL</label>
                                        <input
                                            onChange={this.props.handleChange}
                                            name="URL"
                                            type="text"
                                            className="form-control"
                                            id="URL"
                                            placeholder="URL" />
                                    </div>
                                    <div className="btn-wrapper">
                                        <button
                                            onClick={this.props.saveUser}
                                            type="button"
                                            id="btn-login"
                                            className="btn hvr-rectangle-out">
                                            Start Project
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="login-col">
                            <div class="login_img">
                                <img src="https://www.cybermark.com/dnd/mainLogo-white.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default NewCLientForm