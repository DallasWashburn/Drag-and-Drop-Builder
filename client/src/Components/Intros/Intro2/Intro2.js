import React, { Component } from "react"
import "./Intro2.css"
import InlineEdit from "../../inlineEdit"

class Intro2 extends Component {
    render() {
        return (
            <section className="intro_3 section__wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section__img">
                                <div className="section_img_wrapper">
                                    <img width="1218" height="812" src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" sizes="100vw" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section__container">
                                <div className="section__content">
                                    <h2><InlineEdit text={this.props.introHeading} onSetText={text => this.props.getIntroInfo(text)}/></h2>
                                    <h3><InlineEdit text={this.props.introSubHeading} onSetText={text => this.props.getIntroInfo(undefined, text)}/></h3>
                                    <p><InlineEdit text={this.props.introSubtext} onSetText={text => this.props.getIntroInfo(undefined, undefined,  text)}/></p>
                                    <div className="section__button ">
                                        <a className="btn primary-btn"><InlineEdit text={this.props.introButton1} onSetText={text => this.props.getIntroInfo(undefined, undefined, undefined, undefined,  text)}/></a>
                                        <a className="btn primary-btn clear-btn"><InlineEdit text={this.props.introButton2} onSetText={text => this.props.getIntroInfo(undefined, undefined, undefined, undefined, undefined,  text)}/></a>
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


export default Intro2