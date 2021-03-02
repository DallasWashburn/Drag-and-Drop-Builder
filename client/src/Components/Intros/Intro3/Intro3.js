import React, { Component } from "react"
import "./Intro3.css"
import InlineEdit from "../../inlineEdit"


class Intro3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heading: "Cybermark Wireframe",
            copy:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam totam consequatur nulla et ratione. Harum tempore placeat, voluptas autem, debitis doloribus dolor voluptatum fuga aliquam animi velit eos assumenda dolore?",
            videoSrc:"https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"

        }
    }
    render(){
        return (
            <header className="intro4">
                <div className="overlay d-flex align-items-center"></div>
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={this.state.videoSrc} type="video/mp4"/>
                </video>
                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-3">                            <InlineEdit 
                                text={this.state.heading}
                                onSetText={text => this.setState({heading:text})}
                            /></h1>
                            <p className="lead mb-0"><InlineEdit 
                                text={this.state.copy}
                                onSetText={text => this.setState({copy:text})}
                            /></p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}


export default Intro3