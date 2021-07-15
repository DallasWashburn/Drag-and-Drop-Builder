import React, { Component } from "react";
import UserPreview from "../User-Preview/User-Preview";
import PDFGenerate from "../PDF-Generate/PDF-Generate";
import ToggleButton from "../Toggle-Button/Toggle-Button";
import API from "../../utils/API"

class ProjectPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designCheck: this.props.designFinalized,
            finalized: this.props.finalized
        }
    }


    render() {
        return (
            <>
                <div className="col-6 user-preview" key={this.props.toggleId}>
                    <UserPreview designCheck={this.state.designCheck} projects={this.props.projects} company={this.props.company} email={this.props.email} url={this.props.url} />
                    <PDFGenerate
                        userEmail={this.props.email}
                        dataFromContainer1={this.props.dataFromContainer1}
                        dataFromContainer2={this.props.dataFromContainer2}
                        dataFromContainer3={this.props.dataFromContainer3}
                        dataFromContainer4={this.props.dataFromContainer4}
                        dataFromContainer5={this.props.dataFromContainer5}
                        dataFromContainer6={this.props.dataFromContainer6}
                        dataFromContainer7={this.props.dataFromContainer7}
                        dataFromContainer8={this.props.dataFromContainer8}
                        dataFromContainer9={this.props.dataFromContainer9}
                        dataFromContainer10={this.props.dataFromContainer10}
                        dataFromContainer11={this.props.dataFromContainer11}
                        dataFromContainer12={this.props.dataFromContainer12}
                        dataFromContainer13={this.props.dataFromContainer13}
                        dataFromContainer14={this.props.dataFromContainer14}
                        dataFromContainer15={this.props.dataFromContainer15}
                        dataFromContainer16={this.props.dataFromContainer16}
                        dataFromContainer17={this.props.dataFromContainer17}
                        dataFromContainer18={this.props.dataFromContainer18}
                        dataFromContainer19={this.props.dataFromContainer19}
                        dataFromContainer20={this.props.dataFromContainer20}
                        pageTitles={this.props.pageTitles}
                    />
                    <div id="toggleButtons">
                        <div className="togglebtn">
                            <p>Finalize Design</p>
                            <ToggleButton toggleId={this.props.toggleId} designCheck={this.state.designCheck} onColor="#ce9e7c" />
                        </div>
                        <div className="togglebtn">
                            <p>Finalize Project</p>
                            <ToggleButton toggleId={this.props.toggleId} finalized={this.state.finalized} onColor="#ce9e7c" />
                        </div>
                        

                    </div>
                </div>
            </>

        );
    }
}

export default ProjectPreview;