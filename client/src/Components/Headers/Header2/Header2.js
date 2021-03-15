import React, { Component } from "react"
import "./Header2.css"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"


class Header2 extends Component {
    render() {
        return (
            <>
                <header className="header" id="header_3">
                    <div className="top__bar">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="top__phone">
                                        <a><InlineEdit text={this.props.phoneNumber} onSetText={text => this.props.getHeaderInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,text)}/></a>
                                    </div>
                                </div>
                                <div className="col-md-6 text-right">
                                    <div className="top__bar-social">
                                        <ul className="social-list">
                                            <li><a title="Facebook"><span className="fab fa-facebook-f"></span></a></li>
                                            <li><a title="Twitter"><span className="fab fa-twitter"></span></a></li>
                                            <li><a title="LinkedIn"><span className="fab fa-linkedin"></span></a></li>
                                            <li><a title="Instagram"><span className="fab fa-instagram"></span></a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="site-header-main">
                            <div className="site-branding">
                                <div className="main-logo">
                                    <a rel="home">
                                    <div className="Header-2">
                                        <ImageButton getImage={this.props.getImage} />
                                        <img src={this.props.companyLogo} alt="" />
                                    </div>
                                    </a>
                                </div>
                            </div>

                            <div id="site-header-menu" className="site-header-menu">
                                <div className="menu-wrapper">
                                    <nav id="site-navigation" className="main-navigation" >
                                        <div className="primary-menu">
                                            <ul id="menu-main-menu" className="primary-menu">
                                                <li id="menu-item-22" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-8 current_page_item menu-item-22">
                                                    <a aria-current="page"><InlineEdit text={this.props.headerLink1} onSetText={text => this.props.getHeaderInfo(text)}/></a>
                                                </li>
                                                <li id="menu-item-24" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24">
                                                    <a><InlineEdit text={this.props.headerLink2} onSetText={text => this.props.getHeaderInfo(undefined, text)}/></a>
                                                </li>
                                                <li id="menu-item-26" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26">
                                                    <a><InlineEdit text={this.props.headerLink3} onSetText={text => this.props.getHeaderInfo(undefined,undefined, text)}/></a>
                                                </li>
                                                <li id="menu-item-233" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-233">
                                                    <a><InlineEdit text={this.props.headerLink4} onSetText={text => this.props.getHeaderInfo(undefined,undefined,undefined, text)}/></a>
                                                </li>
                                                <li id="menu-item-23" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23">
                                                    <a><InlineEdit text={this.props.headerLink5} onSetText={text => this.props.getHeaderInfo(undefined,undefined,undefined,undefined, text)}/></a>
                                                </li>
                                                <li id="menu-item-25" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25">
                                                    <a><InlineEdit text={this.props.headerLink6} onSetText={text => this.props.getHeaderInfo(undefined,undefined,undefined,undefined,undefined, text)}/></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="ult-fs-search">
                    <button type="button" className="close">×</button>
                    <form className="form-search" >
                        <input type="text" name="s" placeholder="Type Your Keywords Here" />
                        <button  className="btn primary-btn clear-btn">Search</button>
                    </form>
                </div>
            </>
        )
    }
}


export default Header2