import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"

class Footer0 extends Component {
    render() {
        return (
            <footer class="site-footer" id="footer_1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 offset-md-3 text-center mb-3">
                            <div class="footer-branding">
                                <a  rel="home">
                                    <img src="https://www.cybermark.com/wp-content/uploads/2018/08/mainLogo.png" alt="" />

                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 offset-md-3 text-center mb-3">
                            <div class="footer-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
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