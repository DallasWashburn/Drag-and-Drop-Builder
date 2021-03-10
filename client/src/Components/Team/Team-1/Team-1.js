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
                                    <span class="h3 emp-title d-block"><InlineEdit text={this.props.teamH31} onSetText={text => this.props.getTeamInfo(undefined,undefined, text)}/></span>
                                    <span class="h4 emp-position d-block"><InlineEdit text={this.props.job1} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined, text)}/></span>
                                    <p><InlineEdit text={this.props.teamSubtext1} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined, text)}/></p>
                                </div>
                            </div>
                            <div class="team-slide team-column team-2-column">
                                <div class="team-img">
                                    <div class="profile-img">
                                        <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                    </div>
                                </div>
                                <div class="team-bio-content">
                                    <span class="h3 emp-title d-block"><InlineEdit text={this.props.teamH32} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                    <span class="h4 emp-position d-block"><InlineEdit text={this.props.job2} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                    <p><InlineEdit text={this.props.teamSubtext2} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
                                </div>
                            </div>
                            <div class="team-slide team-column team-2-column">
                                <div class="team-img">
                                    <div class="profile-img">
                                        <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                    </div>
                                </div>
                                <div class="team-bio-content">
                                    <span class="h3 emp-title d-block"><InlineEdit text={this.props.teamH33} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                    <span class="h4 emp-position d-block"><InlineEdit text={this.props.job3} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                    <p><InlineEdit text={this.props.teamSubtext3} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
                                </div>
                            </div>
                            <div class="team-slide team-column team-2-column">
                                <div class="team-img">
                                    <div class="profile-img">
                                        <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                    </div>
                                </div>
                                <div class="team-bio-content">
                                    <span class="h3 emp-title d-block"><InlineEdit text={this.props.teamH34} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                    <span class="h4 emp-position d-block"><InlineEdit text={this.props.job4} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                    <p><InlineEdit text={this.props.teamSubtext4} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
                                </div>
                            </div>
                            <div class="team-slide team-column team-2-column">
                                <div class="team-img">
                                    <div class="profile-img">
                                        <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                    </div>
                                </div>
                                <div class="team-bio-content">
                                    <span class="h3 emp-title d-block"><InlineEdit text={this.props.teamH35} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                    <span class="h4 emp-position d-block"><InlineEdit text={this.props.job5} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                    <p><InlineEdit text={this.props.teamSubtext5} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
                                </div>
                            </div>
                            <div class="team-slide team-column team-2-column">
                                <div class="team-img">
                                    <div class="profile-img">
                                        <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                    </div>
                                </div>
                                <div class="team-bio-content">
                                    <span class="h3 emp-title d-block"><InlineEdit text={this.props.teamH36} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                    <span class="h4 emp-position d-block"><InlineEdit text={this.props.job6} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                    <p><InlineEdit text={this.props.teamSubtext6} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></p>
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