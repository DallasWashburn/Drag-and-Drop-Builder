import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"

class Feature3 extends Component {
    render() {
        return (
            <section className="features_4 section__wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="section__container">
                                <div className="section__content">
                                    <h2><InlineEdit text={this.props.featureHeading} onSetText={text => this.props.getFeaturesInfo(text)}/></h2>
                                    <InlineEdit text={this.props.featuresSubHeadingText} onSetText={text => this.props.getFeaturesInfo(undefined,undefined, text)}/>
                                    <div className="section__button">
                                        <a href="#" className="btn primary-btn"><InlineEdit text={this.props.featureButton} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="column">
                                        <div className="column-img">
                                            <img src="https://res.cloudinary.com/dallas/image/upload/v1615588290/hgj071thutqu9xyfycni.png" alt="" />
                                        </div>
                                        <div className="column-text">
                                            <h4><InlineEdit text={this.props.featureH31} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined, text)}/></h4>
                                            <InlineEdit text={this.props.featureSubtext1} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined, text)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="column">
                                        <div className="column-img">
                                            <img src="https://res.cloudinary.com/dallas/image/upload/v1615588280/qbblyhkhxbikkyvrk9ka.png" alt="" />
                                        </div>
                                        <div className="column-text">
                                            <h4><InlineEdit text={this.props.featureH32} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined, text)}/></h4>
                                            <InlineEdit text={this.props.featureSubtext2} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined, text)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="column">
                                        <div className="column-img">
                                            <img src="https://res.cloudinary.com/dallas/image/upload/v1615588296/ou5pbr8chdjqnoum4ebz.png" alt="" />
                                        </div>
                                        <div className="column-text">
                                            <h4><InlineEdit text={this.props.featureH33} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></h4>
                                            <InlineEdit text={this.props.featureSubtext3} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="column">
                                        <div className="column-img">
                                            <img src="https://res.cloudinary.com/dallas/image/upload/v1615588290/hgj071thutqu9xyfycni.png" alt="" />
                                        </div>
                                        <div className="column-text">
                                            <h4><InlineEdit text={this.props.featureH34} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></h4>
                                            <InlineEdit text={this.props.featureSubtext4} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/>
                                        </div>
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


export default Feature3