import React, { Component } from "react"
import "./Content01.css"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"

class Content01 extends Component {
    render() {
        return (


            <section className="content_2 section__wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="section__container">
                                <div className="section__content">
                                    <h2><InlineEdit text={this.props.content01Heading} onSetText={text => this.props.getContentInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></h2>
                                    <h3><InlineEdit text={this.props.content01SubHeading} onSetText={text => this.props.getContentInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,)}/></h3>
                                    <InlineEdit text={this.props.content01Text} onSetText={text => this.props.getContentInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/>
                                    <div className="section__button ">
                                        <a href="#" className="btn primary-btn" >Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section__img">
                                <div className="section_img_wrapper">
                                    <div className="Content-01">
                                    <ImageButton getImage={this.props.getImage}/>
                                    <img width="1160" height="773" src={this.props.content01Image} className="image-border attachment-full size-full" alt="" loading="lazy" sizes="100vw" />
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


export default Content01