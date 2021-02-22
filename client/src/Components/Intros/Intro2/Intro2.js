import React, { Component } from "react"
import "./Intro2.css"

class Intro2 extends Component {
    render(){
        return (
            <div className="section_wrapper">
            <div className="container-fluid intro3 d-flex align-items-center">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img className="image-border" src="https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png" alt="" height="300px" width="100%"/>
                    </div>
                    <div className="col-md-6 ">
                        <h1>Cyber Mark Wireframe</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, earum blanditiis natus
                            perferendis
                            ut totam nemo eligendi sit, dicta te explicabo sapiente, delectus.</p>
                        <div className="button_section">
                            <button className="btn">Button</button>
                            <button className="btn btn-secondary">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default Intro2