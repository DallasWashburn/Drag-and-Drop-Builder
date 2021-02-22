import React, { Component } from "react"
import Slider from "react-slick";

import "./Gallery1.css"

class Gallery1 extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "80px",
            slidesToShow: 3,
            speed: 500,
            rows: 2,
            slidesPerRow: 1
          };
        return (
            <div class="section_wrapper">
                <div class="container gallery2">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h2>Gallery</h2>
                            <p class="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe temporibus
                                molestias est quam, hic
                            consequatur aliquid officiis incidunt Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        </div>
                    </div>
                    <div className="gallery2-Slider">
                    <Slider {...settings}>
                            <div>
                                <img src="http://placehold.it/350x300?text=1" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                            <div>
                                <img src="http://placehold.it/350x300?text=2" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                            <div>
                                <img src="http://placehold.it/350x300?text=3" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                            <div>
                                <img src="http://placehold.it/350x300?text=4" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                            <div>
                                <img src="http://placehold.it/350x300?text=5" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                            <div>
                                <img src="http://placehold.it/350x300?text=6" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                            <div>
                                <img src="http://placehold.it/350x300?text=7" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                            <div>
                                <img src="http://placehold.it/350x300?text=8" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                            <div>
                                <img src="http://placehold.it/350x300?text=9" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                            <div>
                                <img src="http://placehold.it/350x300?text=10" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                            <div>
                                <img src="http://placehold.it/350x300?text=11" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                            <div>
                                <img src="http://placehold.it/350x300?text=12" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                            <div>
                                <img src="http://placehold.it/350x300?text=13" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                            <div>
                                <img src="http://placehold.it/350x300?text=14" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                            <div>
                                <img src="http://placehold.it/350x300?text=15" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                            <div>
                                <img src="http://placehold.it/350x300?text=16" className="image-border" height="150px" width="100%" alt="" />
                            </div>
                    </Slider>
                    </div>
                </div>
            </div>
        )
    }
}


export default Gallery1