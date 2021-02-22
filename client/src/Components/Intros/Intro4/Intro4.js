import React, { Component } from "react"
import "./Intro4.css"

class Intro4 extends Component {
    render() {
        return (
            <div className="section_wrapper">
                <div className="container intro5 d-flex align-items-center ">
                    <div className="row">

                        <div className="col-12 text-center">
                            <h1>Cyber Mark Wireframe</h1>
                            <div className="sub-text ">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, earum blanditiis natusut totam
                                nemo eligendi sit, dicta te explicabo sapiente, delectus.</p>
                            </div>
                            <div className="button_section d-flex ">
                                <div className="input-holder">
                                    <input type="text" className="form-control" placeholder="First name" />
                                </div>
                                <div className="input-holder">
                                    <input type="text" className="form-control" placeholder="Last name" />
                                </div>
                                <div className="input-holder">
                                    <button className="btn">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Intro4