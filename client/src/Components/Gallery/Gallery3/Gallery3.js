import React, { Component } from "react"
import "./Gallery3.css"
import Slider from "react-slick";

class Gallery3 extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3
          };
        return (
            <div class="section_wrapper">
            <div class="container gallery4">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2>Gallery</h2>
                        <br></br>
                    </div>
                </div>
            </div>
    
            <div class="container gallery4-slider">
                <Slider {...settings}>
                    <div>
                        <img alt="" height="150px"  src="http://placehold.it/350x300?text=1"/>
                    </div>
                    <div>
                        <img alt="" height="150px" src="http://placehold.it/350x300?text=2"/>
                    </div>
                    <div>
                        <img alt="" height="150px" src="http://placehold.it/350x300?text=3"/>
                    </div>
                    <div>
                        <img alt="" height="150px" src="http://placehold.it/350x300?text=4"/>
                    </div>
                    <div>
                        <img alt="" height="150px" src="http://placehold.it/350x300?text=5"/>
                    </div>
                    <div>
                        <img alt="" height="150px" src="http://placehold.it/350x300?text=6"/>
                    </div>
                </Slider>
            </div>
        </div>
        )
    }
}


export default Gallery3