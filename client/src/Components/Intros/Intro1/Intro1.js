import React, { Component } from "react"
import "./Intro1.css"

class Intro1 extends Component {
    render(){
        return (
            <div className="section_wrapper">
            <div className="container d-flex align-items-center intro2">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1>Cyber Mark Wireframe</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, earum blanditiis natus
                            perferendis
                            ut totam nemo eligendi sit, dicta te explicabo sapiente, delectus.</p>
                    </div>
                    <div className="col-md-6">
                        <form className="form_box">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="First Name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Last Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email Address"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Phone Number"/>
                            </div>
                            <button className="btn btn-block">Submit</button>
                        </form>
                    </div>
    
                </div>
            </div>
        </div>
        )
    }
}


export default Intro1