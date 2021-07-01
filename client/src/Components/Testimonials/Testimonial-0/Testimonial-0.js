import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"


class Testimonial0 extends Component {
    render() {
        return (
            <section className="testimonials_1 section__wrapper">
                <div className="container">
                    <div className="section__heading text-center">
                        <h2><InlineEdit text={this.props.testimonialHeading} onSetText={text => this.props.getTestimonialInfo(text)} /></h2>
                        <InlineEdit text={this.props.testimonialSubHeading} onSetText={text => this.props.getTestimonialInfo(undefined, text)} />
                    </div>

                    <div className="testimonials">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="column testimonial-column testimonial-1-column text-center">
                                    <div className="testimonial">
                                        <div className="testimonial-author">
                                            <span className="h3 customer-title d-block"><InlineEdit text={this.props.name1} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, text)} /></span>
                                            <span className="h4 customer-details d-block"><InlineEdit text={this.props.name1Desc} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, text)} /></span>
                                        </div>
                                        <div className="testimonial-content">
                                            <InlineEdit text={this.props.quote1} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, text)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column testimonial-column testimonial-1-column text-center">
                                    <div className="testimonial">
                                        <div className="testimonial-author">
                                            <span className="h3 customer-title d-block"><InlineEdit text={this.props.name2} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                            <span className="h4 customer-details d-block"><InlineEdit text={this.props.name2Desc} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                        </div>
                                        <div className="testimonial-content">
                                            <InlineEdit text={this.props.quote2} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column testimonial-column testimonial-1-column text-center">
                                    <div className="testimonial">
                                        <div className="testimonial-author">
                                            <span className="h3 customer-title d-block"><InlineEdit text={this.props.name3} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                            <span className="h4 customer-details d-block"><InlineEdit text={this.props.name3Desc} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                        </div>
                                        <div className="testimonial-content">
                                            <InlineEdit text={this.props.quote3} onSetText={text => this.props.getTestimonialInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} />
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