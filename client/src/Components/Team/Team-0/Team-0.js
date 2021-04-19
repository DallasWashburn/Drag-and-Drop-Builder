import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"

class Team0 extends Component {
    render() {
        return (
            <section className="team_1 section__wrapper">
                <div className="container">
                    <div className="section__heading text-center">
                        <h2><InlineEdit text={this.props.teamHeading} onSetText={text => this.props.getTeamInfo(text)} /></h2>
                        <p><InlineEdit text={this.props.teamSubheading} onSetText={text => this.props.getTeamInfo(undefined, text)} /></p>
                    </div>
                    <div className="team__wrapper">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="column team-column team-1-column text-center">
                                    <div className="team-img">
                                        <div className="profile-img">
                                            <div className="Team-0-1">
                                                <ImageButton getImage={this.props.getImage} />
                                                <img src={this.props.teamImage1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-bio-content">
                                        <span className="h3 emp-title d-block"><InlineEdit text={this.props.teamH31} onSetText={text => this.props.getTeamInfo(undefined, undefined, text)} /></span>
                                        <span className="h4 emp-position d-block"><InlineEdit text={this.props.job1} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, text)} /></span>
                                        <p><InlineEdit text={this.props.teamSubtext1} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, text)} /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column team-column team-1-column text-center">
                                    <div className="team-img">
                                        <div className="profile-img">
                                            <div classNameName="Team-0-2">
                                                <ImageButton getImage={this.props.getImage} />
                                                <img src={this.props.teamImage2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-bio-content">
                                        <span className="h3 emp-title d-block"><InlineEdit text={this.props.teamH32} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                        <span className="h4 emp-position d-block"><InlineEdit text={this.props.job2} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                        <p><InlineEdit text={this.props.teamSubtext2} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="column team-column team-1-column text-center">
                                    <div className="team-img">
                                        <div className="profile-img">
                                            <div className="Team-0-3">
                                                <ImageButton getImage={this.props.getImage} />
                                                <img src={this.props.teamImage3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-bio-content">
                                        <span className="h3 emp-title d-block"><InlineEdit text={this.props.teamH33} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                        <span className="h4 emp-position d-block"><InlineEdit text={this.props.job3} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></span>
                                        <p><InlineEdit text={this.props.teamSubtext3} onSetText={text => this.props.getTeamInfo(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text)} /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Team0