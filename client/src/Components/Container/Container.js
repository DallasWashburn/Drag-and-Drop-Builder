import React, { Component } from 'react';
import API from '../../utils/API';
import { Container, Draggable } from 'react-smooth-dnd';
import XButton from "../XButton/XButton"
import DuplicateButton from "../Duplicate-Button/Duplicate-Button"
import Header0 from "../Headers/Header0/Header0"
import Header1 from "../Headers/Header1/Header1"
import Header2 from "../Headers/Header2/Header2"
import Header3 from "../Headers/Header3/Header3"
import Intro0 from "../Intros/Intro0/Intro0"
import Intro1 from "../Intros/Intro1/Intro1"
import Intro2 from "../Intros/Intro2/Intro2"
import Intro3 from "../Intros/Intro3/Intro3"
import Intro4 from "../Intros/Intro4/Intro4"
import Content0 from "../Content/Content0/Content0"
import Content1 from "../Content/Content1/Content1"
import Content2 from "../Content/Content2/Content2"
import Gallery0 from "../Gallery/Gallery0/Gallery0"
import Gallery1 from "../Gallery/Gallery1/Gallery1"
import Gallery3 from "../Gallery/Gallery3/Gallery3"
import EditButton from "../Edit-Button/Edit-Button"



class Container1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companyLogo:"",
            headerLink1:"Services",
            headerLink2:"Company",
            headerLink3:"About",
            headerLink4:"Contact",
            headerButton:"Order Now",
            phoneNumber:"+1-555-555-5555",
            introHeading:"Cybermark Wireframe",
            introSubtext:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            introImage:"https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            introButton1:"Button",
            introButton2:"Button",
            introVideo:"https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
            content0Heading:"Cybermark Wireframe",
            content0Text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            content0Image:"https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            content1Heading:"Cybermark Wireframe",
            content1Text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            content1Image:"https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            content2Heading:"Cybermark Wireframe",
            content2Text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            galleryHeading:"Gallery",
            gallerySubtext:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            galleryImage1Title:"First One",
            galleryImage2Title:"Second One",
            galleryImage3Title:"Third One",
            galleryImage1Desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            galleryImage2Desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            galleryImage3Desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            galleryImage1:"http://placehold.it/350x300?text=1",
            galleryImage2:"http://placehold.it/350x300?text=2",
            galleryImage3:"http://placehold.it/350x300?text=3",
            galleryImage4:"http://placehold.it/350x300?text=4",
            galleryImage5:"http://placehold.it/350x300?text=5",
            galleryImage6:"http://placehold.it/350x300?text=6",
            galleryImage7:"http://placehold.it/350x300?text=7",
            galleryImage8:"http://placehold.it/350x300?text=8",
            galleryImage9:"http://placehold.it/350x300?text=9",
            galleryImage10:"http://placehold.it/350x300?text=10",
            galleryImage11:"http://placehold.it/350x300?text=11",
            galleryImage12:"http://placehold.it/350x300?text=12",
            galleryImage13:"http://placehold.it/350x300?text=13",
            galleryImage14:"http://placehold.it/350x300?text=14",
            galleryImage15:"http://placehold.it/350x300?text=15",
            galleryImage16:"http://placehold.it/350x300?text=16",
            featureHeading:"Features",
            featureSubHeading:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            featureH31:"First One",
            featureH32:"Second One",
            featureH33:"Third One",
            featureH34:"Fourth One",
            featureH35:"Fifth One",
            featureH36:"Sixth One",
            featureSubtext1:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            featureSubtext2:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            featureSubtext3:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            featureSubtext4:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            featureSubtext5:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            featureSubtext6:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            featureButton:"Learn More",
            teamHeading:"Our Team",
        }
    }


    handleXButton = (event, id) => {
        event.stopPropagation();
        event.preventDefault();

        const noScroll = () => {
            window.scrollTo(0, 0);
        }

        window.addEventListener("scroll", noScroll)
        const selectedDiv = event.target.parentElement;
        let parentDiv = selectedDiv.parentElement;
        console.log(parentDiv.id);
        parentDiv.remove();
        window.removeEventListener('scroll', noScroll);
    }

    getImage= (event) => {
        var column = event.target.parentElement.parentElement.parentElement;
        
        console.log(column.children[0].src);
    }

    getHeaderInfo = (link1, link2, link3, link4, logo) => {

        if(link1 !== undefined){
            this.setState({
                headerLink1:link1,
            })
            
        } else if(link2 !== undefined){
            this.setState({
                headerLink2:link2
            })
            console.log(this.state.headerLink2);

        } else if(link3 !== undefined){
            this.setState({
                headerLink3:link3
            })
        } else if(link4 !== undefined){
            this.setState({
                headerLink4:link4
            })
        } else if(logo !== undefined){
            this.setState({
                companyLogo:logo
            })
        }


    }


    render() {
        var headerLink1 = this.state.headerLink1;
        var headerLink2 = this.state.headerLink2;
        var headerLink3 = this.state.headerLink3;
        var headerLink4 = this.state.headerLink4;
        var companyLogo = this.state.companyLogo

        return (
            <>
                <Container dragClass="opacity-ghost" dropClass="opacity-ghost-drop" id="dropZone" groupName="1" getChildPayload={this.props.getChildPayload} onDrop={this.props.onDrop}
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'drop-preview'
                    }}
                    dropPlaceholderAnimationDuration={200}>
                    {
                        this.props.generateItems.map((p, i) => {
                            if (p.data === "Header-0") {
                                p.info={headerLink1, headerLink2, headerLink3, headerLink4, companyLogo}
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header0 getHeaderInfo={this.getHeaderInfo} headerLink1={p.info.headerLink1} headerLink2={p.info.headerLink2} headerLink3={p.info.headerLink3} headerLink4={p.info.headerLink4} companyLogo={p.info.companyLogo}/>
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Header-1") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header1 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Header-2") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header2 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Header-3") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header3 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-0") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro0 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-1") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro1 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-2") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro2 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-3") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro3 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-4") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro4 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-0") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item" data-element={p.data}>
                                            <Content0 getImage={this.getImage} getInfo={this.props.getInfo}/>
                                            <div className="button-wrap">
                                                {/* <EditButton data={p.data} openEdit={this.props.openEdit} getElements={this.getElements} /> */}
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-1") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Content1 />
                                            <div className="button-wrap">
                                                <EditButton data={p.data} openEdit={this.props.openEdit} getElements={this.getElements} />

                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-2") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Content2 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Gallery-0") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Gallery0 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Gallery-1") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Gallery1 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Gallery-3") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Gallery3 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                            <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                        </div>
                                    </Draggable>
                                );
                            }

                        })
                    }
                </Container>
            </>


        );
    }
}


export default Container1;


// var id = p.data
// switch(id){
//     case "Header-0":<Draggable key={i}><div id={p.data} className="draggable-item"><Header2 /></div><Draggable>;
//     break;

// }
