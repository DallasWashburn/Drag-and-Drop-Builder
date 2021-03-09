import React, { Component } from "react"
import "./Gallery2.css"
import Slider from "react-slick";

class Gallery2 extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <section className="gallery_3 section__wrapper">
                <div className="container">
                    <div className="section__container columns gallery_columns">
                        <div className="gallery__slider">
                        <Slider {...settings}>
                            <div className="gallery__item ml-1 mr-1">
                                <div className="column gallery_3_column mb-0">
                                    <div className="column-img mb-0">
                                        <a className="fancybox" rel="gallery3">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery__item ml-1 mr-1">
                                <div className="column gallery_3_column mb-0">
                                    <div className="column-img mb-0">
                                        <a className="fancybox" rel="gallery3">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery__item ml-1 mr-1">
                                <div className="column gallery_3_column mb-0">
                                    <div className="column-img mb-0">
                                        <a className="fancybox" rel="gallery3">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery__item ml-1 mr-1">
                                <div className="column gallery_3_column mb-0">
                                    <div className="column-img mb-0">
                                        <a className="fancybox" rel="gallery3">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery__item ml-1 mr-1">
                                <div className="column gallery_3_column mb-0">
                                    <div className="column-img mb-0">
                                        <a className="fancybox" rel="gallery3">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery__item ml-1 mr-1">
                                <div className="column gallery_3_column mb-0">
                                    <div className="column-img mb-0">
                                        <a className="fancybox" rel="gallery3">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery__item ml-1 mr-1">
                                <div className="column gallery_3_column mb-0">
                                    <div className="column-img mb-0">
                                        <a className="fancybox" rel="gallery3">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery__item ml-1 mr-1">
                                <div className="column gallery_3_column mb-0">
                                    <div className="column-img mb-0">
                                        <a className="fancybox" rel="gallery3">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery__item ml-1 mr-1">
                                <div className="column gallery_3_column mb-0">
                                    <div className="column-img mb-0">
                                        <a className="fancybox" rel="gallery3">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery__item ml-1 mr-1">
                                <div className="column gallery_3_column mb-0">
                                    <div className="column-img mb-0">
                                        <a className="fancybox" rel="gallery3">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                             </Slider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Gallery2



{/* 
// <Slider {...settings}>
// <div>
//     <img alt="" height="150px"  src="http://placehold.it/350x300?text=1"/>
// </div>
// <div>
//     <img alt="" height="150px" src="http://placehold.it/350x300?text=2"/>
// </div>
// <div>
//     <img alt="" height="150px" src="http://placehold.it/350x300?text=3"/>
// </div>
// <div>
//     <img alt="" height="150px" src="http://placehold.it/350x300?text=4"/>
// </div>
// <div>
//     <img alt="" height="150px" src="http://placehold.it/350x300?text=5"/>
// </div>
// <div>
//     <img alt="" height="150px" src="http://placehold.it/350x300?text=6"/>
// </div>
// </Slider> */}