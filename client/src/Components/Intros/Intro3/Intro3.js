import React, { Component } from "react"
import "./Intro3.css"
import InlineEdit from "../../inlineEdit"


class Intro3 extends Component {

    
    render(){
        return (
            
            <header className="intro4">
                <div className="overlay d-flex align-items-center"></div>
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={this.props.introVideo} type="video/mp4"/>
                </video>
                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-3">                            <InlineEdit 
                                text={this.props.introHeading}
                                onSetText={text => this.props.getIntroInfo(text)}
                            /></h1>
                            <p className="lead mb-0"><InlineEdit 
                                text={this.props.introSubtext}
                                onSetText={text => this.props.getIntroInfo(undefined, text)}
                            /></p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}


export default Intro3