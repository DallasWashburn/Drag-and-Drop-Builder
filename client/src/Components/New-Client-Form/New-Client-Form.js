import React, { Component } from "react"
import API from "../../utils/API"
import "./New-Client-Form.css"

class NewCLientForm extends Component {


    render() {
        return (

            <div className="wrapper">
                <div className="img-holder">
                    <img src="https://www.cybermark.com/wp-content/uploads/2018/08/mainLogo-white.png" alt="" height="150px" />
                </div>
                <div className="login-container">
                    <div className="login-box">
                        <div className="login-header">
                            <h2>Welcome!</h2>
                            <h5>Please fill out the following information</h5>
                        </div>
                        <form onSubmit="return false;" method="post">
                            <div className="form-group">
                                <input
                                    onChange={this.props.handleChange}
                                    type="text"
                                    className="form-control"
                                    id="companyName"
                                    name="companyName"
                                    placeholder="Company Name" />
                            </div>
                            <div className="form-group">
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
                                    className="btn sign-up">
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        )
    }
}


export default NewCLientForm