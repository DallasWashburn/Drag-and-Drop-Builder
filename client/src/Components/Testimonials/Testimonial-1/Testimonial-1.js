import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"
import Slider from "react-slick";


class Testimonial1 extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <section class="testimonials_2 section__wrapper">
                <div class="container">
                    <div class="section__heading text-center quotes">
                        <h2>Testimonials</h2>
                    </div>

                    <div class="testimonial-container">
                        <Slider {...settings}>
                            <div class="testimonial-slide">
                                <div class="testimonial-content">
                                    <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                    </blockquote>
                                </div>
                                <div class="testimonial-author">
                                    <span class="h3 customer-title d-block">John Doe</span>
                                    <span class="h4 customer-details d-block">Professional</span>
                                </div>
                            </div>

                            <div class="testimonial-slide">
                                <div class="testimonial-content">
                                    <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                    </blockquote>
                                </div>
                                <div class="testimonial-author">
                                    <span class="h3 customer-title d-block">John Doe</span>
                                    <span class="h4 customer-details d-block">Professional</span>
                                </div>
                            </div>

                            <div class="testimonial-slide">
                                <div class="testimonial-content">
                                    <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                    </blockquote>
                                </div>
                                <div class="testimonial-author">
                                    <span class="h3 customer-title d-block">John Doe</span>
                                    <span class="h4 customer-details d-block">Professional</span>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section >
        )
    }
}


export default Testimonial1