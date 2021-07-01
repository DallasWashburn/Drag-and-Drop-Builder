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
            <section className="team_2 section__wrapper">
                <div className="container">
                    <div className="team__wrapper team__slider">
                        <Slider {...settings}>
                            <div className="team-slide team-column team-2-column">
                                <div className="team-img">
                                    <div className="profile-img">
                                        <div className="Team-1-1">
                                            <ImageButton getImage={this.props.getImage} />
                                            <img src={this.props.teamImage1} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="team-bio-content">
                                    <span className="h3 emp-title d-block"><InlineEdit text={this.props.teamH31} onSetText={text => this.props.getTeamInfo(undefined, undefined, text)} /></span>
                                    <span className="h4 emp-position d-block"><InlineEdit text={this.props.job1} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, text)} /></span>
                                    <InlineEdit text={this.props.teamSubtext1} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, text)} />
                                </div>
                            </div>
                            <div className="team-slide team-column team-2-column">
                                <div className="team-img">
                                    <div className="profile-img">
                                        <div className="Team-1-2">
                                            <ImageButton getImage={this.props.getImage} />
                                            <img src={this.props.teamImage2} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="team-bio-content">
                                    <span className="h3 emp-title d-block"><InlineEdit text={this.props.teamH32} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                    <span className="h4 emp-position d-block"><InlineEdit text={this.props.job2} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                    <InlineEdit text={this.props.teamSubtext2} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} />
                                </div>
                            </div>
                            <div className="team-slide team-column team-2-column">
                                <div className="team-img">
                                    <div className="profile-img">
                                        <div className="Team-1-3">
                                            <ImageButton getImage={this.props.getImage} />
                                            <img src={this.props.teamImage3} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="team-bio-content">
                                    <span className="h3 emp-title d-block"><InlineEdit text={this.props.teamH33} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                    <span className="h4 emp-position d-block"><InlineEdit text={this.props.job3} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                    <InlineEdit text={this.props.teamSubtext3} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} />
                                </div>
                            </div>
                            <div className="team-slide team-column team-2-column">
                                <div className="team-img">
                                    <div className="profile-img">
                                        <div className="Team-1-4">
                                            <ImageButton getImage={this.props.getImage} />
                                            <img src={this.props.teamImage4} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="team-bio-content">
                                    <span className="h3 emp-title d-block"><InlineEdit text={this.props.teamH34} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                    <span className="h4 emp-position d-block"><InlineEdit text={this.props.job4} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                    <InlineEdit text={this.props.teamSubtext4} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} />
                                </div>
                            </div>
                            <div className="team-slide team-column team-2-column">
                                <div className="team-img">
                                    <div className="profile-img">
                                        <div className="Team-1-5">
                                            <ImageButton getImage={this.props.getImage} />
                                            <img src={this.props.teamImage5} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="team-bio-content">
                                    <span className="h3 emp-title d-block"><InlineEdit text={this.props.teamH35} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                    <span className="h4 emp-position d-block"><InlineEdit text={this.props.job5} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                    <InlineEdit text={this.props.teamSubtext5} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} />
                                </div>
                            </div>
                            <div className="team-slide team-column team-2-column">
                                <div className="team-img">
                                    <div className="profile-img">
                                        <div className="Team-1-6">
                                            <ImageButton getImage={this.props.getImage} />
                                            <img src={this.props.teamImage6} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="team-bio-content">
                                    <span className="h3 emp-title d-block"><InlineEdit text={this.props.teamH36} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                    <span className="h4 emp-position d-block"><InlineEdit text={this.props.job6} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                    <InlineEdit text={this.props.teamSubtext6} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} />
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