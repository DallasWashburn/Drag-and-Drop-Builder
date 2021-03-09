import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"

class Footer2 extends Component {
    render() {
        return (
            <footer class="site-footer" id="footer_3">
                <div class="container-fluid">
                    <div class="footer__3-wrapper">
                        <div class="footer-branding">
                            <a href="http://localhost/SMB/" rel="home">
                                <img src="https://www.cybermark.com/wp-content/uploads/2018/08/mainLogo.png" alt="" />

                            </a>
                        </div>
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
            </footer>
        )
    }
}


export default Footer2