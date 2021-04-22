import React, { Component } from "react"
import "./Gallery2.css"
import Slider from "react-slick";
import ImageButton from "../../imageButton/imageButton"

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
                                <div className="gallery__item">
                                    <div className="column gallery_3_column mb-0">
                                        <div className="column-img mb-0">
                                            <a className="fancybox" rel="gallery3">
                                                <div className="Gallery-2-1">
                                                <ImageButton getImage={this.props.getImage} />

                                                    <img src={this.props.galleryImage1} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item">
                                    <div className="column gallery_3_column mb-0">
                                        <div className="column-img mb-0">
                                            <a className="fancybox" rel="gallery3">
                                                <div className="Gallery-2-2">
                                                <ImageButton getImage={this.props.getImage} />

                                                    <img src={this.props.galleryImage2} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item">
                                    <div className="column gallery_3_column mb-0">
                                        <div className="column-img mb-0">
                                            <a className="fancybox" rel="gallery3">
                                                <div className="Gallery-2-3">
                                                <ImageButton getImage={this.props.getImage} />

                                                    <img src={this.props.galleryImage3} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item">
                                    <div className="column gallery_3_column mb-0">
                                        <div className="column-img mb-0">
                                            <a className="fancybox" rel="gallery3">
                                                <div className="Gallery-2-4">
                                                <ImageButton getImage={this.props.getImage} />

                                                    <img src={this.props.galleryImage4} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item">
                                    <div className="column gallery_3_column mb-0">
                                        <div className="column-img mb-0">
                                            <a className="fancybox" rel="gallery3">
                                                <div className="Gallery-2-5">
                                                <ImageButton getImage={this.props.getImage} />

                                                    <img src={this.props.galleryImage5} alt="" />

                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item">
                                    <div className="column gallery_3_column mb-0">
                                        <div className="column-img mb-0">
                                            <a className="fancybox" rel="gallery3">
                                                <div className="Gallery-2-6">
                                                <ImageButton getImage={this.props.getImage} />

                                                    <img src={this.props.galleryImage6} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item">
                                    <div className="column gallery_3_column mb-0">
                                        <div className="column-img mb-0">
                                            <a className="fancybox" rel="gallery3">
                                                <div className="Gallery-2-7">
                                                <ImageButton getImage={this.props.getImage} />

                                                    <img src={this.props.galleryImage7} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item">
                                    <div className="column gallery_3_column mb-0">
                                        <div className="column-img mb-0">
                                            <a className="fancybox" rel="gallery3">
                                                <div className="Gallery-2-8">
                                                <ImageButton getImage={this.props.getImage} />

                                                    <img src={this.props.galleryImage8} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item">
                                    <div className="column gallery_3_column mb-0">
                                        <div className="column-img mb-0">
                                            <a className="fancybox" rel="gallery3">
                                                <div className="Gallery-2-9">
                                                <ImageButton getImage={this.props.getImage} />

                                                    <img src={this.props.galleryImage9} alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item">
                                    <div className="column gallery_3_column mb-0">
                                        <div className="column-img mb-0">
                                            <a className="fancybox" rel="gallery3">
                                                <div className="Gallery-2-10">
                                                <ImageButton getImage={this.props.getImage} />

                                                    <img src={this.props.galleryImage10} alt="" />
                                                </div>
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