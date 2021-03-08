import React, { Component } from "react"
import "./Content0.css"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"

class Content0 extends Component {
    render() {
        return (


            <section className="content_2 section__wrapper">
                <div className="container">
                    <div className="row align-items-center">
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
                                    <img width="1160" height="773" src={this.props.content0Image} class="image-border attachment-full size-full" alt="" loading="lazy" srcset="" sizes="100vw" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Content0