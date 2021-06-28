import React, { Component } from "react"
import "./Content13.css"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"


class Content13 extends Component {
    render() {
        return (
            <section className="content_3 section__wrapper">
                <div className="container">
                    <div className="row flex-row-reverse align-items-center">
                        <div className="col-md-6">
                            <div className="section__container">
                                <div className="section__content">
                                    <h2><InlineEdit text={this.props.content13Heading} onSetText={text => this.props.getContentInfo(undefined, undefined, undefined,undefined, undefined, undefined, text)} /></h2>
                                    <h3><InlineEdit text={this.props.content13SubHeading} onSetText={text => this.props.getContentInfo(undefined, undefined, undefined,undefined, undefined, undefined, undefined, text)} /></h3>
                                    <p><InlineEdit text={this.props.content13Text} onSetText={text => this.props.getContentInfo(undefined, undefined, undefined, undefined, undefined,undefined, undefined, undefined, text)} /></p>
                                    <div className="section__button ">
                                        <a className="btn primary-btn" href="#" target="_self">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section__img">
                                <div className="section_img_wrapper">
                                    <div className="Content-13">
                                    <ImageButton getImage={this.props.getImage} />
                                    <img className="image-border" src={this.props.content13Image} alt="" />
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


export default Content13