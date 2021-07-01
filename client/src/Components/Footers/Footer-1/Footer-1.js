

import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"


class Footer1 extends Component {
    render() {
        return (
            <footer className="site-footer" id="footer_2">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="footer-branding mb-3">
                                <a href="#" rel="home">
                                    <img src={this.props.companyLogo} alt="" />
                                </a>
                            </div>
                            <div className="footer-content">
                                <InlineEdit text={this.props.footerSubText} onSetText={text => this.props.getFooterInfo(text)}/>
                            </div>
                        </div>
                        <div className="col-lg-6 text-right">
                            <nav className="footer-navigation">
                                <div className="menu-footer-container">
                                    <ul id="menu-footer" className="primary-menu">
                                        <li id="menu-item-259" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-259"><a href="#" >{this.props.headerLink1}</a></li>
                                        <li id="menu-item-260" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-260"><a href="#">{this.props.headerLink2}</a></li>
                                        <li id="menu-item-261" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-261"><a href="#">{this.props.headerLink3}</a></li>
                                        <li id="menu-item-262" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-262"><a href="#">{this.props.headerLink4}</a></li>
                                        <li id="menu-item-263" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-262"><a href="#">{this.props.headerLink5}</a></li>
                                        <li id="menu-item-264" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-262"><a href="#">{this.props.headerLink6}</a></li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="footer-social">
                                <ul className="social-list">
                                    <li><a href="#" title="Facebook"><span className="fab fa-facebook-f"></span></a></li>
                                    <li><a href="#" title="Twitter"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#" title="LinkedIn"><span className="fab fa-linkedin"></span></a></li>
                                    <li><a href="#" title="Instagram"><span className="fab fa-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}


export default Footer1