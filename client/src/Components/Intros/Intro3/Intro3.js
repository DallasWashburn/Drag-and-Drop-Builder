import React, { Component } from "react"
import "./Intro3.css"

class Intro3 extends Component {
    render(){
        return (
            <header className="intro4">
                <div className="overlay d-flex align-items-center"></div>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>
                </video>
                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-3">Cybermark Wireframe</h1>
                            <p className="lead mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam totam
                                consequatur nulla et ratione. Harum tempore placeat, voluptas autem, debitis doloribus dolor
                                voluptatum fuga aliquam animi velit eos assumenda dolore?</p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}


export default Intro3