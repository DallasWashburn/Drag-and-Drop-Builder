import React, { Component } from "react"
import "./Intro3.css"
import InlineEdit from "../../inlineEdit"


class Intro3 extends Component {


    render() {
        return (

            <section className="intro_4 ">
                <div className="intro_4_hero" style={{backgroundImage: 'url("https://resources.owllabs.com/hs-fs/hubfs/fog-3622519_1920-jpg.jpeg?width=882&name=fog-3622519_1920-jpg.jpeg")'}}>
                    <div className="container">
                        <div className="intro_4_inner section__container text-center">
                            <div className="section__content">
                                <h2><InlineEdit text={this.props.introHeading} onSetText={text => this.props.getIntroInfo(text)}/></h2>
                                <h3><InlineEdit text={this.props.introSubHeading} onSetText={text => this.props.getIntroInfo(undefined, text)}/></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Intro3