import React, { Component } from "react"
import "./Intro0.css"
import InlineEdit from "../../inlineEdit"


class Intro0 extends Component {
    render() {
        return (
            <section className="intro_1 section__wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section__container">
                                <div className="section__content">
                                    <h2><InlineEdit text={this.props.introHeading} onSetText={text => this.props.getIntroInfo(text)}/></h2>
                                    <h3><InlineEdit text={this.props.introSubHeading} onSetText={text => this.props.getIntroInfo(undefined, text)}/></h3>
                                    <InlineEdit text={this.props.introSubtext} onSetText={text => this.props.getIntroInfo(undefined, undefined,  text)}/>
                                    <div className="section__button ">
                                        <a className="btn primary-btn" target=""><InlineEdit text={this.props.introButton1} onSetText={text => this.props.getIntroInfo(undefined, undefined, undefined, undefined,  text)}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Intro0