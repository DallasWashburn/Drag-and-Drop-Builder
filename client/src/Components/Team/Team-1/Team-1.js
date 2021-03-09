import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"
import Slider from "react-slick";


class Team1 extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <section class="team_2 section__wrapper">
                <div class="container">
                    <div class="team__wrapper team__slider">
                        <Slider {...settings}>
                            <div class="team-slide team-column team-2-column">
                                <div class="team-img">
                                    <div class="profile-img">
                                        <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                    </div>
                                </div>
                                <div class="team-bio-content">
                                    <span class="h3 emp-title d-block">John Doe</span>
                                    <span class="h4 emp-position d-block">Job Position</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                </div>
                            </div>
                            <div class="team-slide team-column team-2-column">
                                <div class="team-img">
                                    <div class="profile-img">
                                        <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                    </div>
                                </div>
                                <div class="team-bio-content">
                                    <span class="h3 emp-title d-block">John Doe</span>
                                    <span class="h4 emp-position d-block">Job Position</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                </div>
                            </div>
                            <div class="team-slide team-column team-2-column">
                                <div class="team-img">
                                    <div class="profile-img">
                                        <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                    </div>
                                </div>
                                <div class="team-bio-content">
                                    <span class="h3 emp-title d-block">Jane Doe</span>
                                    <span class="h4 emp-position d-block">Job Position</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                </div>
                            </div>
                            <div class="team-slide team-column team-2-column">
                                <div class="team-img">
                                    <div class="profile-img">
                                        <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                    </div>
                                </div>
                                <div class="team-bio-content">
                                    <span class="h3 emp-title d-block">Jane Doe</span>
                                    <span class="h4 emp-position d-block">Job Position</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                </div>
                            </div>
                            <div class="team-slide team-column team-2-column">
                                <div class="team-img">
                                    <div class="profile-img">
                                        <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                    </div>
                                </div>
                                <div class="team-bio-content">
                                    <span class="h3 emp-title d-block">John Doe</span>
                                    <span class="h4 emp-position d-block">Job Position</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                </div>
                            </div>
                            <div class="team-slide team-column team-2-column">
                                <div class="team-img">
                                    <div class="profile-img">
                                        <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                    </div>
                                </div>
                                <div class="team-bio-content">
                                    <span class="h3 emp-title d-block">John Doe</span>
                                    <span class="h4 emp-position d-block">Job Position</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}


export default Team1