import React, { Component } from "react"

import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"

import "./Gallery1.css"

class Gallery1 extends Component {
    render() {

        return (
            <section className="gallery_2 section__wrapper">
                <div className="container">
                    <div className="section__heading text-center">
                        <h2><InlineEdit text={this.props.galleryHeading} onSetText={text => this.props.getGalleryInfo(text)} /></h2>
                        <InlineEdit text={this.props.gallerySubtext} onSetText={text => this.props.getGalleryInfo(undefined, text)} />
                    </div>
                    <div className="section__container columns gallery_columns">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="column gallery_2_column text-center">
                                    <div className="column-img">
                                        <a className="fancybox" rel="gallery2">
                                            <div className="Gallery-1-1">
                                                <ImageButton getImage={this.props.getImage} />
                                                <img width="1024" height="282" src={this.props.galleryImage1} className="attachment-large size-large" alt="" loading="lazy" sizes="100vw" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column gallery_2_column text-center">
                                    <div className="column-img">
                                        <a className="fancybox" rel="gallery2">
                                            <div className="Gallery-1-2">
                                                <ImageButton getImage={this.props.getImage} />
                                                <img width="1024" height="282" src={this.props.galleryImage2} className="attachment-large size-large" alt="" loading="lazy" sizes="100vw" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column gallery_2_column text-center">
                                    <div className="column-img">
                                        <a className="fancybox" rel="gallery2">
                                            <div className="Gallery-1-3">
                                                <ImageButton getImage={this.props.getImage} />
                                                <img width="1024" height="282" src={this.props.galleryImage3} className="attachment-large size-large" alt="" loading="lazy" sizes="100vw" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column gallery_2_column text-center">
                                    <div className="column-img">
                                        <a className="fancybox" rel="gallery2">
                                            <div className="Gallery-1-4">
                                                <ImageButton getImage={this.props.getImage} />
                                                <img width="1024" height="282" src={this.props.galleryImage4} className="attachment-large size-large" alt="" loading="lazy" sizes="100vw" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column gallery_2_column text-center">
                                    <div className="column-img">
                                        <a className="fancybox" rel="gallery2">
                                            <div className="Gallery-1-5">
                                                <ImageButton getImage={this.props.getImage} />
                                                <img width="1024" height="282" src={this.props.galleryImage5} className="attachment-large size-large" alt="" loading="lazy" sizes="100vw" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column gallery_2_column text-center">
                                    <div className="column-img">
                                        <a className="fancybox" rel="gallery2">
                                            <div className="Gallery-1-6">
                                                <ImageButton getImage={this.props.getImage} />
                                                <img width="1024" height="282" src={this.props.galleryImage6} className="attachment-large size-large" alt="" loading="lazy" sizes="100vw" />
                                            </div>
                                        </a>
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


export default Gallery1


