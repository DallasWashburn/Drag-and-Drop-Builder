import React, { Component } from "react"
import API from "../../utils/API"
import "./New-Client-Form.css"

class NewCLientForm extends Component {


    render() {
        return (

            <div className="wrapper">
                <div class="img-holder">
                    <img src="https://www.cybermark.com/wp-content/uploads/2018/08/mainLogo-white.png" alt="" height="150px" />
                </div>
                <div class="login-container">
                    <div class="login-box">
                        <div class="login-header">
                            <h2>Welcome!</h2>
                            <h5>Please fill out the following information</h5>
                        </div>
                        <form onSubmit="return false;" method="post">
                            <div class="form-group">
                                <input
                                    onChange={this.props.handleChange}
                                    type="text"
                                    class="form-control"
                                    id="companyName"
                                    name="companyName"
                                    placeholder="Company Name" />
                            </div>
                            <div class="form-group">
                                <input
                                    onChange={this.props.handleChange}
                                    name="URL"
                                    type="text"
                                    class="form-control"
                                    id="URL"
                                    placeholder="URL" />
                            </div>
                            <div className="btn-wrapper">
                                <button
                                    onClick={this.props.saveUser}
                                    type="button"
                                    id="btn-login"
                                    class="btn sign-up">
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