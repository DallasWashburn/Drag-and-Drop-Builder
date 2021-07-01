import React, { Component } from "react"
import "./Gallery0.css"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"


class Gallery0 extends Component {
    render() {
        return (
            <section className="gallery_1 section__wrapper">
                <div className="container">
                    <div className="section__heading text-center">
                        <h2><InlineEdit text={this.props.galleryHeading} onSetText={text => this.props.getGalleryInfo(text)} /></h2>
                        <InlineEdit text={this.props.gallerySubtext} onSetText={text => this.props.getGalleryInfo(undefined, text)} />
                    </div>

                    <div className="section__container columns feature_columns">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="column gallery_1_column text-center">
                                    <div className="column-img">
                                        <a className="fancybox" rel="gallery1">
                                            <div className="Gallery-0-1">
                                                <ImageButton getImage={this.props.getImage} />
                                                <img width="1024" height="382" src={this.props.galleryImage1} sizes="100vw" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="column-text">
                                        <h3><InlineEdit text={this.props.galleryImage1Title} onSetText={text => this.props.getGalleryInfo(undefined, undefined, text)} /></h3>
                                        <InlineEdit text={this.props.galleryImage1Desc} onSetText={text => this.props.getGalleryInfo(undefined, undefined, undefined, text)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column gallery_1_column text-center">
                                    <div className="column-img">
                                        <a className="fancybox" rel="gallery1">
                                            <div className="Gallery-0-2">
                                                <ImageButton getImage={this.props.getImage} />
                                                <img width="1024" height="383" src={this.props.galleryImage2} sizes="100vw" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="column-text">
                                        <h3><InlineEdit text={this.props.galleryImage2Title} onSetText={text => this.props.getGalleryInfo(undefined, undefined, undefined, undefined, text)} /></h3>
                                        <InlineEdit text={this.props.galleryImage2Desc} onSetText={text => this.props.getGalleryInfo(undefined, undefined, undefined, undefined, undefined, text)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column gallery_1_column text-center">
                                    <div className="column-img">
                                        <a className="fancybox" rel="gallery1">
                                            <div className="Gallery-0-3">
                                                <ImageButton getImage={this.props.getImage} />
                                                <img width="1024" height="382" src={this.props.galleryImage3} sizes="100vw" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="column-text">
                                        <h3><InlineEdit text={this.props.galleryImage3Title} onSetText={text => this.props.getGalleryInfo(undefined, undefined, undefined, undefined, undefined, undefined, text)} /></h3>
                                        <InlineEdit text={this.props.galleryImage3Desc} onSetText={text => this.props.getGalleryInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} />
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


export default Gallery0