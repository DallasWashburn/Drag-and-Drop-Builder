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
            <section className="testimonials_2 section__wrapper">
                <div className="container">
                    <div className="section__heading text-center quotes">
                        <h2><InlineEdit text={this.props.testimonialHeading} onSetText={text => this.props.getTestimonialInfo(text)} /></h2>
                    </div>

                    <div className="testimonial-container">
                        <Slider {...settings}>
                            <div className="testimonial-slide">
                                <div className="testimonial-content">
                                    <blockquote><InlineEdit text={this.props.quote1} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, text)} />
                                    </blockquote>
                                </div>
                                <div className="testimonial-author">
                                    <span className="h3 customer-title d-block"><InlineEdit text={this.props.name1} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, text)} /></span>
                                    <span className="h4 customer-details d-block"><InlineEdit text={this.props.name1Desc} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, text)} /></span>
                                </div>
                            </div>

                            <div className="testimonial-slide">
                                <div className="testimonial-content">
                                    <blockquote><InlineEdit text={this.props.quote2} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} />
                                    </blockquote>
                                </div>
                                <div className="testimonial-author">
                                    <span className="h3 customer-title d-block"><InlineEdit text={this.props.name2} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                    <span className="h4 customer-details d-block"><InlineEdit text={this.props.name2Desc} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                </div>
                            </div>

                            <div className="testimonial-slide">
                                <div className="testimonial-content">
                                    <blockquote><InlineEdit text={this.props.quote3} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} />
                                    </blockquote>
                                </div>
                                <div className="testimonial-author">
                                    <span className="h3 customer-title d-block"><InlineEdit text={this.props.name3} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                    <span className="h4 customer-details d-block"><InlineEdit text={this.props.name3Desc} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
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