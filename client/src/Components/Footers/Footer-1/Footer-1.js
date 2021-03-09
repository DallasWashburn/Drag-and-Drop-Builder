

import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"

class Footer1 extends Component {
    render() {
        return (
            <footer class="site-footer" id="footer_2">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="footer-branding mb-3">
                                <a rel="home">
                                    <img src="https://www.cybermark.com/wp-content/uploads/2018/08/mainLogo.png" alt="" />

                                </a>
                            </div>
                            <div class="footer-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            </div>
                        </div>
                        <div class="col-lg-6 text-right">
                            <nav class="footer-navigation">
                                <div class="menu-footer-container">
                                    <ul id="menu-footer" class="primary-menu">
                                        <li id="menu-item-259" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-259"><a href="http://localhost/SMB/">Home</a></li>
                                        <li id="menu-item-260" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-260"><a href="http://localhost/SMB/blog/">Blog</a></li>
                                        <li id="menu-item-261" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-261"><a href="http://localhost/SMB/about/">About</a></li>
                                        <li id="menu-item-262" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-262"><a href="http://localhost/SMB/contact-us/">Contact Us</a></li>
                                    </ul>
                                </div>
                            </nav>
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


export default Footer1