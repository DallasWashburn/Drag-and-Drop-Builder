import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"

class Team3 extends Component {
    render() {
        return (
            <section class="team_4 section__wrapper">
                <div class="container">
                    <div class="section__heading text-center">
                        <h2><InlineEdit text={this.props.teamHeading} onSetText={text => this.props.getTeamInfo(text)}/></h2>
                        <p><InlineEdit text={this.props.teamSubheading} onSetText={text => this.props.getTeamInfo(undefined, text)}/></p>
                    </div>
                    <div class="team__wrapper">
                        <div class="row justify-content-center">
                            <div class="col-md-4">
                                <div class="column team-column team-4-column text-center">
                                    <div class="team-img">
                                        <div class="profile-img-sq">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="team-bio-content hidden-content">
                                        <span class="h3 emp-title d-block"><InlineEdit text={this.props.teamH31} onSetText={text => this.props.getTeamInfo(undefined,undefined, text)}/></span>
                                        <span class="h4 emp-position d-block"><InlineEdit text={this.props.job1} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined, text)}/></span>
                                        <InlineEdit text={this.props.teamSubtext1} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined, text)}/>							</div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="column team-column team-4-column text-center">
                                    <div class="team-img">
                                        <div class="profile-img-sq">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="team-bio-content hidden-content">
                                        <span class="h3 emp-title d-block"><InlineEdit text={this.props.teamH32} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                        <span class="h4 emp-position d-block"><InlineEdit text={this.props.job2} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                        <InlineEdit text={this.props.teamSubtext2} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/>							</div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="column team-column team-4-column text-center">
                                    <div class="team-img">
                                        <div class="profile-img-sq">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="team-bio-content hidden-content">
                                        <span class="h3 emp-title d-block"><InlineEdit text={this.props.teamH33} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                        <span class="h4 emp-position d-block"><InlineEdit text={this.props.job3} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                        <InlineEdit text={this.props.teamSubtext3} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/>							</div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="column team-column team-4-column text-center">
                                    <div class="team-img">
                                        <div class="profile-img-sq">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="team-bio-content hidden-content">
                                        <span class="h3 emp-title d-block"><InlineEdit text={this.props.teamH34} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                        <span class="h4 emp-position d-block"><InlineEdit text={this.props.job4} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                        <InlineEdit text={this.props.teamSubtext4} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/>							</div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="column team-column team-4-column text-center">
                                    <div class="team-img">
                                        <div class="profile-img-sq">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="team-bio-content hidden-content">
                                        <span class="h3 emp-title d-block"><InlineEdit text={this.props.teamH35} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                        <span class="h4 emp-position d-block"><InlineEdit text={this.props.job5} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                        <InlineEdit text={this.props.teamSubtext5} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/>							</div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="column team-column team-4-column text-center">
                                    <div class="team-img">
                                        <div class="profile-img-sq">
                                            <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="team-bio-content hidden-content">
                                        <span class="h3 emp-title d-block"><InlineEdit text={this.props.teamH36} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                        <span class="h4 emp-position d-block"><InlineEdit text={this.props.job6} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/></span>
                                        <InlineEdit text={this.props.teamSubtext6} onSetText={text => this.props.getTeamInfo(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined, text)}/>							</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Team3