import React, { Component } from "react"
import "./Content12.css"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"


class Content12 extends Component {
    render() {
        return (
            <section className="content_3 section__wrapper">
                <div className="container">
                    <div className="row flex-row-reverse align-items-center">
                        <div className="col-md-6">
                            <div className="section__container">
                                <div className="section__content">
                                    <h2><InlineEdit text={this.props.content12Heading} onSetText={text => this.props.getContentInfo(undefined, undefined, undefined, text)} /></h2>
                                    <h3><InlineEdit text={this.props.content12SubHeading} onSetText={text => this.props.getContentInfo(undefined, undefined, undefined, undefined, text)} /></h3>
                                    <p><InlineEdit text={this.props.content12Text} onSetText={text => this.props.getContentInfo(undefined, undefined, undefined, undefined, undefined, text)} /></p>
                                    <div className="section__button ">
                                        <a className="btn primary-btn" href="#" target="_self">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section__img">
                                <div className="section_img_wrapper">
                                    <div className="Content-12">
                                    <ImageButton getImage={this.props.getImage} />
                                    <img className="image-border" src={this.props.content12Image} alt="" />
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


export default Content12