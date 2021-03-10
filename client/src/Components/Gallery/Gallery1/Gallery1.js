import React, { Component } from "react"
import Slider from "react-slick";
import InlineEdit from "../../inlineEdit"

import "./Gallery1.css"

class Gallery1 extends Component {
    render() {

        return (
            <section className="gallery_2 section__wrapper">
                <div className="container">
                    <div className="section__heading text-center">
                        <h2><InlineEdit text={this.props.galleryHeading} onSetText={text => this.props.getGalleryInfo(text)}/></h2>
                        <p><InlineEdit text={this.props.gallerySubtext} onSetText={text => this.props.getGalleryInfo(undefined, text)}/></p>
                    </div>
                    <div className="section__container columns gallery_columns">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="column gallery_2_column text-center">
                                    <div className="column-img">
                                        <a className="fancybox" rel="gallery2">

                                            <img width="1024" height="282" src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" className="attachment-large size-large" alt="" loading="lazy" sizes="100vw" />							</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column gallery_2_column text-center">
                                    <div className="column-img">
                                        <a className="fancybox" rel="gallery2">

                                            <img width="1024" height="282" src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" className="attachment-large size-large" alt="" loading="lazy" sizes="100vw" />							</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column gallery_2_column text-center">
                                    <div className="column-img">
                                        <a className="fancybox" rel="gallery2">

                                            <img width="1024" height="282" src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" className="attachment-large size-large" alt="" loading="lazy" sizes="100vw" />							</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column gallery_2_column text-center">
                                    <div className="column-img">
                                        <a className="fancybox" rel="gallery2">

                                            <img width="1024" height="282" src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" className="attachment-large size-large" alt="" loading="lazy" sizes="100vw" />							</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column gallery_2_column text-center">
                                    <div className="column-img">
                                        <a className="fancybox" rel="gallery2">

                                            <img width="1024" height="282" src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" className="attachment-large size-large" alt="" loading="lazy" sizes="100vw" />							</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column gallery_2_column text-center">
                                    <div className="column-img">
                                        <a className="fancybox" rel="gallery2">

                                            <img width="1024" height="282" src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" className="attachment-large size-large" alt="" loading="lazy" sizes="100vw" />							</a>
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


