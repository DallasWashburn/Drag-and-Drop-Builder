import React, { Component } from "react"
import "./Intro2.css"

class Intro2 extends Component {
    render() {
        return (
            <section className="intro_3 section__wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section__img">
                                <div className="section_img_wrapper">
                                    <img width="1218" height="812" src="http://localhost/SMB/wp-content/uploads/2021/03/d93c3afd-9e62-33f6-bf32-8bf488ecd3f2.jpg" className="attachment-full size-full" alt="" loading="lazy" srcset="http://localhost/SMB/wp-content/uploads/2021/03/d93c3afd-9e62-33f6-bf32-8bf488ecd3f2.jpg 1218w, http://localhost/SMB/wp-content/uploads/2021/03/d93c3afd-9e62-33f6-bf32-8bf488ecd3f2-300x200.jpg 300w, http://localhost/SMB/wp-content/uploads/2021/03/d93c3afd-9e62-33f6-bf32-8bf488ecd3f2-1024x683.jpg 1024w, http://localhost/SMB/wp-content/uploads/2021/03/d93c3afd-9e62-33f6-bf32-8bf488ecd3f2-768x512.jpg 768w" sizes="100vw" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section__container">
                                <div className="section__content">
                                    <h2>Lorem ipsum dolor</h2>
                                    <h3>Lorem ipsum dolor sit amet</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className="section__button ">
                                        <a className="btn primary-btn" href="#" target="_self">Learn More</a>
                                        <a className="btn primary-btn clear-btn" href="#" target="_self">Learn More</a>
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


export default Intro2