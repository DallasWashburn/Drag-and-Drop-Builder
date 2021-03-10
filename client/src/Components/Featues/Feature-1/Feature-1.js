import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"

class Feature1 extends Component {
    render() {
        return (
            <section className="features_2 section__wrapper">
                <div className="container">
                    <div className="section__heading text-center">
                        <h2><InlineEdit text={this.props.featureHeading} onSetText={text => this.props.getFeaturesInfo(text)}/></h2>
                        <p><InlineEdit text={this.props.featuresSubHeadingText} onSetText={text => this.props.getFeaturesInfo(undefined,undefined, text)}/></p>
                    </div>

                    <div className="section__container columns feature_columns">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="column features_2_column">
                                    <div className="column-img">
                                        <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                    </div>
                                    <div className="column-text">
                                        <h4><InlineEdit text={this.props.featureH31} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined, text)}/></h4>
                                        <p><InlineEdit text={this.props.featureSubtext1} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined, text)}/></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column features_2_column">
                                    <div className="column-img">
                                        <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                    </div>
                                    <div className="column-text">
                                        <h4><InlineEdit text={this.props.featureH32} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined, text)}/></h4>
                                        <p><InlineEdit text={this.props.featureSubtext2} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column features_2_column">
                                    <div className="column-img">
                                        <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                    </div>
                                    <div className="column-text">
                                        <h4><InlineEdit text={this.props.featureH33} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></h4>
                                        <p><InlineEdit text={this.props.featureSubtext3} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
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


export default Feature1