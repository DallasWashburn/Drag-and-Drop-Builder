import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"

class Feature0 extends Component {
    render() {
        return (
            <section className="features_1 section__wrapper">
                <div className="container">
                    <div className="section__heading">
                        <h2><InlineEdit text={this.props.featureHeading} onSetText={text => this.props.getFeaturesInfo(text)}/></h2>
                        <h3><InlineEdit text={this.props.featureSubHeading} onSetText={text => this.props.getFeaturesInfo(undefined, text)}/></h3>
                        <p><InlineEdit text={this.props.featuresSubHeadingText} onSetText={text => this.props.getFeaturesInfo(undefined,undefined, text)}/></p>
                    </div>
                    <div className="row justify-content-center">

                        <div className="col-md-6">
                            <div className="column">
                                <div className="column-text">
                                    <h4><InlineEdit text={this.props.featureH31} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined, text)}/></h4>
                                    <p><InlineEdit text={this.props.featureSubtext1} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined, text)}/></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="column">
                                <div className="column-text">
                                    <h4><InlineEdit text={this.props.featureH32} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined, text)}/></h4>
                                    <p><InlineEdit text={this.props.featureSubtext2} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="column">
                                <div className="column-text">
                                    <h4><InlineEdit text={this.props.featureH33} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></h4>
                                    <p><InlineEdit text={this.props.featureSubtext3} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="column">
                                <div className="column-text">
                                    <h4><InlineEdit text={this.props.featureH34} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></h4>
                                    <p><InlineEdit text={this.props.featureSubtext4} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Feature0