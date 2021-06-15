import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"


class Footer0 extends Component {
    render() {
        return (
            <footer class="site-footer" id="footer_1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 offset-md-3 text-center mb-3">
                            <div class="footer-branding">
                                <a  rel="home">
                                    <img src={this.props.companyLogo} alt="" />

                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 offset-md-3 text-center mb-3">
                            <div class="footer-content">
                                <p><InlineEdit text={this.props.footerSubText} onSetText={text => this.props.getFooterInfo(text)}/></p>
                            </div>
                        </div>
                        <div class="col-md-6 offset-md-3 text-center mb-3">
                            <div class="footer-social">
                                <ul class="social-list">
                                    <li><a title="Facebook"><span class="fab fa-facebook-f"></span></a></li>
                                    <li><a title="Twitter"><span class="fab fa-twitter"></span></a></li>
                                    <li><a title="LinkedIn"><span class="fab fa-linkedin"></span></a></li>
                                    <li><a title="Instagram"><span class="fab fa-instagram"></span></a></li>

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