import React, { Component } from "react"
import "./Content1.css"
import InlineEdit from "../../inlineEdit"


class Content1 extends Component {
    render() {
        return (
            <section className="content_3 section__wrapper">
                <div className="container">
                    <div className="row flex-row-reverse align-items-center">
                        <div className="col-md-6">
                            <div className="section__container">
                                <div className="section__content">
                                    <h2>Lorem ipsum dolor</h2>
                                    <h3>Lorem ipsum dolor sit amet</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className="section__button ">
                                        <a className="btn primary-btn" href="#" target="_self">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section__img">
                                <div className="section_img_wrapper">
                                    <img className="image-border" src={this.props.content1Image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Content1