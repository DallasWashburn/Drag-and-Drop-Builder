import React, { Component } from "react"
import "./Header0.css"
import InlineEdit from "../../inlineEdit"



class Header0 extends Component {

    render() {
        return (
            <header className="header" id="header_1">
                <div className="container-fluid">
                    <div className="site-header-main">
                        <div className="site-branding">
                            <div className="main-logo">
                                <a rel="home">
                                    <img src="https://www.cybermark.com/wp-content/uploads/2018/08/mainLogo.png" alt="" />
                                </a>
                            </div>
                        </div>

                        <div id="site-header-menu" className="site-header-menu">
                            <div className="menu-wrapper">
                                <nav id="site-navigation" className="main-navigation" >
                                    <div className="primary-menu"><ul id="menu-main-menu" className="primary-menu">
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
        )
    }
}


export default Header0




{/* <nav className="navbar navbar-expand-md navbar-light">
<span className="navbar-brand">
    <img src="../logo.png" width="250" height="60" className="d-inline-block align-top"
        alt="" loading="lazy" />
</span>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
            <span className="nav-link" id="link1" ><InlineEdit text={this.props.headerLink1} onSetText={text => this.props.getHeaderInfo(text)}/></span>
        </li>
        <li className="nav-item">
            <span className="nav-link" id="link2" ><InlineEdit text={this.props.headerLink2} onSetText={text => this.props.getHeaderInfo(undefined, text)}/></span>
        </li>
        <li className="nav-item">
            <span className="nav-link" id="link3" ><InlineEdit text={this.props.headerLink3} onSetText={text => this.props.getHeaderInfo(undefined,undefined, text)}/></span>
        </li>
        <li className="nav-item">
            <span className="nav-link" id="link4" ><InlineEdit text={this.props.headerLink4} onSetText={text => this.props.getHeaderInfo(undefined,undefined,undefined, text)}/></span>
        </li>
    </ul>

</div>
</nav> */}