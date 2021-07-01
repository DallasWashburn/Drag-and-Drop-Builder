import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"


class Footer0 extends Component {
    render() {
        return (
            <footer className="site-footer" id="footer_1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center mb-3">
                            <div className="footer-branding">
                                <a  rel="home">
                                    <img src={this.props.companyLogo} alt="" />

                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 text-center mb-3">
                            <div className="footer-content">
                                <InlineEdit text={this.props.footerSubText} onSetText={text => this.props.getFooterInfo(text)}/>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 text-center mb-3">
                            <div className="footer-social">
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
            </footer>
        )
    }
}


export default Footer0