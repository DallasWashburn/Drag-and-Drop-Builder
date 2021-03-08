import React, { Component } from "react"
import "./Gallery0.css"

class Gallery0 extends Component {
    render() {
        return (
            <section className="gallery_1 section__wrapper">
                <div className="container">
                    <div className="section__heading text-center">
                        <h2>Gallery</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
                    </div>

                    <div className="section__container columns feature_columns">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="column gallery_1_column text-center">
                                    <div className="column-img">
                                        <a href="" className="fancybox" rel="gallery1">

                                            <img width="1024" height="682" src="http://placehold.it/350x300?text=1" sizes="100vw" />							</a>
                                    </div>
                                    <div className="column-text">
                                        <h3>Lorem ipsum</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column gallery_1_column text-center">
                                    <div className="column-img">
                                        <a href="" className="fancybox" rel="gallery1">

                                            <img width="1024" height="683" src="http://placehold.it/350x300?text=2" sizes="100vw" />							</a>
                                    </div>
                                    <div className="column-text">
                                        <h3>Lorem ipsum</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column gallery_1_column text-center">
                                    <div className="column-img">
                                        <a href="" className="fancybox" rel="gallery1">

                                            <img width="1024" height="682" src="http://placehold.it/350x300?text=3" sizes="100vw" />							</a>
                                    </div>
                                    <div className="column-text">
                                        <h3>Lorem ipsum</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
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