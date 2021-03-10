import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"

class Feature2 extends Component {
    render() {
        return (
            <section className="features_3 section__wrapper">
                <div className="container">
                    <div className="section__heading text-center">
                        <h2><InlineEdit text={this.props.featureHeading} onSetText={text => this.props.getFeaturesInfo(text)}/></h2>
                    </div>

                    <div className="section__container columns feature_columns">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="column features_3_column">
                                    <div className="column-img">
                                        <img width="87" height="69" src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" className="attachment-full size-full" alt="" loading="lazy" sizes="100vw" />
                                    </div>
                                    <div className="column-text">
                                        <h4><InlineEdit text={this.props.featureH31} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined, text)}/></h4>
                                        <p><InlineEdit text={this.props.featureSubtext1} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined, text)}/></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column features_3_column">
                                    <div className="column-img">
                                        <img width="82" height="65" src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" className="attachment-full size-full" alt="" loading="lazy" sizes="100vw" />
                                    </div>
                                    <div className="column-text">
                                        <h4><InlineEdit text={this.props.featureH32} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined, text)}/></h4>
                                        <p><InlineEdit text={this.props.featureSubtext2} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column features_3_column">
                                    <div className="column-img">
                                        <img width="79" height="72" src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" className="attachment-full size-full" alt="" loading="lazy" sizes="100vw" />
                                    </div>
                                    <div className="column-text">
                                        <h4><InlineEdit text={this.props.featureH33} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></h4>
                                        <p><InlineEdit text={this.props.featureSubtext3} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column features_3_column">
                                    <div className="column-img">
                                        <img width="87" height="69" src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" className="attachment-full size-full" alt="" loading="lazy" sizes="100vw" />
                                    </div>
                                    <div className="column-text">
                                        <h4><InlineEdit text={this.props.featureH34} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></h4>
                                        <p><InlineEdit text={this.props.featureSubtext4} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column features_3_column">
                                    <div className="column-img">
                                        <img width="82" height="65" src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" loading="lazy" sizes="100vw" />
                                    </div>
                                    <div className="column-text">
                                        <h4><InlineEdit text={this.props.featureH35} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></h4>
                                        <p><InlineEdit text={this.props.featureSubtext5} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column features_3_column">
                                    <div className="column-img">
                                        <img width="79" height="72" src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" loading="lazy" sizes="100vw" />
                                    </div>
                                    <div className="column-text">
                                        <h4><InlineEdit text={this.props.featureH36} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></h4>
                                        <p><InlineEdit text={this.props.featureSubtext6} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="section__button text-center">
                        <a className="btn primary-btn"><InlineEdit text={this.props.featureButton} onSetText={text => this.props.getFeaturesInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></a>
                    </div>
                </div>
            </section>
        )
    }
}


export default Feature2