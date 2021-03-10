import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"

class Testimonial0 extends Component {
    render() {
        return (
            <section class="testimonials_1 section__wrapper">
                <div class="container">
                    <div class="section__heading text-center">
                        <h2><InlineEdit text={this.props.testimonialHeading} onSetText={text => this.props.getTestimonialInfo(text)} /></h2>
                        <p><InlineEdit text={this.props.testimonialSubHeading} onSetText={text => this.props.getTestimonialInfo(undefined, text)} /></p>
                    </div>

                    <div class="testimonials">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="column testimonial-column testimonial-1-column text-center">
                                    <div class="testimonial">
                                        <div class="testimonial-author">
                                            <span class="h3 customer-title d-block"><InlineEdit text={this.props.name1} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, text)} /></span>
                                            <span class="h4 customer-details d-block"><InlineEdit text={this.props.name1Desc} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, text)} /></span>
                                        </div>
                                        <div class="testimonial-content">
                                            <p><InlineEdit text={this.props.quote1} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, text)} /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="column testimonial-column testimonial-1-column text-center">
                                    <div class="testimonial">
                                        <div class="testimonial-author">
                                            <span class="h3 customer-title d-block"><InlineEdit text={this.props.name2} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                            <span class="h4 customer-details d-block"><InlineEdit text={this.props.name2Desc} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                        </div>
                                        <div class="testimonial-content">
                                            <p><InlineEdit text={this.props.quote2} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="column testimonial-column testimonial-1-column text-center">
                                    <div class="testimonial">
                                        <div class="testimonial-author">
                                            <span class="h3 customer-title d-block"><InlineEdit text={this.props.name3} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                            <span class="h4 customer-details d-block"><InlineEdit text={this.props.name3Desc} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                        </div>
                                        <div class="testimonial-content">
                                            <p><InlineEdit text={this.props.quote3} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></p>
                                        </div>
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


export default Testimonial0