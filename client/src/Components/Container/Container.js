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
            //Header Blocks | Links and companyLogo are used for Footer Blocks as well
            companyLogo: "",
            headerLink1: "Services",
            headerLink2: "Company",
            headerLink3: "About",
            headerLink4: "Contact",
            headerButton: "Order Now",
            phoneNumber: "+1-555-555-5555",
            //Intro Blocks
            introHeading: "Cybermark Wireframe",
            introSubtext: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            introImage: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            introButton1: "Button",
            introButton2: "Button",
            introVideo: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
            // Content Blocks
            content0Heading: "Cybermark Wireframe",
            content0Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            content0Image: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            content1Heading: "Cybermark Wireframe",
            content1Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            content1Image: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            content2Heading: "Cybermark Wireframe",
            content2Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            // Gallery Blocks
            galleryHeading: "Gallery",
            gallerySubtext: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            galleryImage1Title: "First One",
            galleryImage2Title: "Second One",
            galleryImage3Title: "Third One",
            galleryImage1Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            galleryImage2Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            galleryImage3Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            galleryImage1: "http://placehold.it/350x300?text=1",
            galleryImage2: "http://placehold.it/350x300?text=2",
            galleryImage3: "http://placehold.it/350x300?text=3",
            galleryImage4: "http://placehold.it/350x300?text=4",
            galleryImage5: "http://placehold.it/350x300?text=5",
            galleryImage6: "http://placehold.it/350x300?text=6",
            galleryImage7: "http://placehold.it/350x300?text=7",
            galleryImage8: "http://placehold.it/350x300?text=8",
            galleryImage9: "http://placehold.it/350x300?text=9",
            galleryImage10: "http://placehold.it/350x300?text=10",
            galleryImage11: "http://placehold.it/350x300?text=11",
            galleryImage12: "http://placehold.it/350x300?text=12",
            galleryImage13: "http://placehold.it/350x300?text=13",
            galleryImage14: "http://placehold.it/350x300?text=14",
            galleryImage15: "http://placehold.it/350x300?text=15",
            galleryImage16: "http://placehold.it/350x300?text=16",
            // Feature Blocks
            featureHeading: "Features",
            featureSubHeading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            featureH31: "First One",
            featureH32: "Second One",
            featureH33: "Third One",
            featureH34: "Fourth One",
            featureH35: "Fifth One",
            featureH36: "Sixth One",
            featureSubtext1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            featureSubtext2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            featureSubtext3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            featureSubtext4: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            featureSubtext5: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            featureSubtext6: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            featureButton: "Learn More",
            // Team Blocks 
            teamHeading: "Our Team",
            teamSubheading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            teamH31: "John Doe",
            teamH32: "John Doe",
            teamH33: "John Doe",
            bigHeadshot: "",
            job1: "Lead Designer",
            job2: "Lead Designer",
            job3: "Lead Designer",
            teamSubtext1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero",
            teamSubtext2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero",
            teamSubtext3: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero",
            teamImage1: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            teamImage2: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            teamImage3: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            teamImage4: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            teamImage5: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            teamImage6: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            teamButton: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            //Pricing Table Blocks
            priceHeading: "Pricing Plans",
            priceSubHeading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero",
            priceH31: "Basic",
            priceH32: "Advanced",
            priceH33: "Professional",
            priceH34: "Expert",
            priceSubText1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            priceSubText2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            priceSubText3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            priceSubText4: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            price1: "12",
            price2: "15",
            price3: "19",
            price4: "22",
            price1Li1: "Users",
            price1Li2: "Capacity",
            price1Li3: "Backup",
            price1Li4: "Support",
            price1Li1Num: "100",
            price1Li2Num: "500 Gb",
            price1Li3Num: "Not Available",
            price1Li4Num: "Not Available",
            price2Li1Num: "200",
            price2Li2Num: "1,000 Gb",
            price2Li3Num: "Not Available",
            price2Li4Num: "Not Available",
            price3Li1Num: "300",
            price3Li2Num: "1,500 Gb",
            price3Li3Num: "Available",
            price3Li4Num: "Available",
            price4Li1Num: "400",
            price4Li2Num: "2,000 Gb",
            price4Li3Num: "Available",
            price4Li4Num: "Available",
            priceButton1: "Click Here",
            priceButton2: "Click Here",
            priceButton3: "Click Here",
            priceButton4: "Click Here",
            //Testimonials Blocks
            testimonialHeading: "Our Clients",
            testimonialSubHeading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero",
            name1: "John Doe",
            name2: "John Doe",
            name3: "John Doe",
            name1Desc: "ABC INC. Owner",
            name2Desc: "ABC INC. Owner",
            name3Desc: "ABC INC. Owner",
            quote1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            quote2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            quote3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet",
            name1Img: "",
            name2Img: "",
            name3Img: "",
            logo1: "",
            logo2: "",
            logo3: "",
            logo4: "",
            logo5: "",
            logo6: "",
            //Contact Blocks
            contactHeading: "Get In Touch",
            ContactSubText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            lat: "",
            lon: "",
            address: "1234 N ABC Lane",
            email: "",
            //Footer Blocks
            link5: "Menu Item",
            link6: "Menu Item",
            link7: "Menu Item",
            link8: "Menu Item",
            link9: "Menu Item",
            footerSubText1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis?",
            footerSubText2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis?",
            footerSubText3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis?"
        }
    }

    componentDidMount=() => {
        this.getProject();
    }

    // Get current projects and set content based on their saved information
    getProject = () => {
        
        API.getUsers()
            .then(users => {
                var theUsers = users.data
                console.log(theUsers);
                var userProjects = []
                for (let i = 0; i < theUsers.length; i++) {
                    const element = theUsers[i];
                    console.log(element);
                    if (element.userEmail === this.props.email) {
                        console.log(element.projects);
                        var Page1 = element.projects[1];
                        Page1.map(item => {
                            console.log(item);
                            if(item.data === "Header-0"){
                                this.setState({
                                    companyLogo:item.info.companyLogo,
                                    headerLink1:item.info.headerLink1,
                                    headerLink2:item.info.headerLink2,
                                    headerLink3:item.info.headerLink3,
                                    headerLink4:item.info.headerLink4,
                                })
                            }
                        })
                    }
                }

                console.log(this.state.projects);
            })
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

    getImage = (event) => {
        var column = event.target.parentElement.parentElement.parentElement;

        console.log(column.children[0].src);
    }

    getHeaderInfo = (link1, link2, link3, link4, logo) => {

        if (link1 !== undefined) {
            this.setState({ headerLink1: link1 })
        } else if (link2 !== undefined) {
            this.setState({ headerLink2: link2 })
        } else if (link3 !== undefined) {
            this.setState({ headerLink3: link3 })
        } else if (link4 !== undefined) {
            this.setState({ headerLink4: link4 })
        } else if (logo !== undefined) {
            this.setState({ companyLogo: logo })
        }

    }

    getIntroInfo = (introHeading, introSubtext, introImage,
        introButton1, introButton2, introVideo) => {

        if (introHeading !== undefined) {
            this.setState({ introHeading: introHeading })
        } else if (introSubtext !== undefined) {
            this.setState({ introSubtext: introSubtext })
        } else if (introImage !== undefined) {
            this.setState({ introImage: introImage })
        } else if (introButton1 !== undefined) {
            this.setState({ introButton1: introButton1 })
        } else if (introButton2 !== undefined) {
            this.setState({ introButton2: introButton2 })
        } else if (introVideo !== undefined) { this.setState({ introVideo: introVideo }) }

    }

    getContentInfo = (content0Heading, content0Text, content0Image, content1Heading, content1Text,content1Image, content2Heading, content2Text) => {
        if (content0Heading !== undefined) {
            this.setState({ content0Heading: content0Heading })
        } else if (content0Text !== undefined) {
            this.setState({ content0Text: content0Text })
        } else if (content0Image !== undefined) {
            this.setState({ content0Image: content0Image })
        } else if (content1Heading !== undefined) {
            this.setState({ content1Heading: content1Heading })
        } else if (content1Text !== undefined) {
            this.setState({ content1Text: content1Text })
        } else if (content1Image !== undefined) {
            this.setState({ content1Image: content1Image })
        } else if (content2Heading !== undefined) {
            this.setState({ content2Heading: content2Heading })
        } else if (content2Text !== undefined) {
            this.setState({ content2Text: content2Text })
        }

    }


    render() {
        // Calling Header Block Info
        var headerLink1 = this.state.headerLink1;
        var headerLink2 = this.state.headerLink2;
        var headerLink3 = this.state.headerLink3;
        var headerLink4 = this.state.headerLink4;
        var headerButton = this.state.headerButton;
        var phoneNumber = this.state.phoneNumber;
        var companyLogo = this.state.companyLogo;
        // Calling Intro Block Info
        var introHeading = this.state.introHeading;
        var introSubtext = this.state.introSubtext;
        var introImage = this.state.introImage;
        var introButton1 = this.state.introButton1;
        var introButton2 = this.state.introButton2;
        var introVideo = this.state.introVideo;
        // Calling Content Block Info
        var content0Heading = this.state.content0Heading;
        var content0Text = this.state.content0Text;
        var content0Image = this.state.content0Image
        var content1Heading = this.state.content1Heading;
        var content1Text = this.state.content1Text;
        var content1Image = this.state.content1Image;
        var content2Heading = this.state.content2Heading;
        var content2Text = this.state.content2Text;



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
                                p.info = { headerLink1, headerLink2, headerLink3, headerLink4, companyLogo }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header0 getHeaderInfo={this.getHeaderInfo} headerLink1={p.info.headerLink1} headerLink2={p.info.headerLink2} headerLink3={p.info.headerLink3} headerLink4={p.info.headerLink4} companyLogo={p.info.companyLogo} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Header-1") {
                                p.info = { headerLink1, headerLink2, headerLink3, headerLink4, headerButton, companyLogo }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header1 getHeaderInfo={this.getHeaderInfo} headerLink1={p.info.headerLink1} headerLink2={p.info.headerLink2} headerLink3={p.info.headerLink3} headerLink4={p.info.headerLink4} headerButton={p.info.headerButton} companyLogo={p.info.companyLogo} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Header-2") {
                                p.info = { headerButton, companyLogo }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header2 getHeaderInfo={this.getHeaderInfo} companyLogo={p.info.companyLogo} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Header-3") {
                                p.info = { headerLink1, headerLink2, headerLink3, headerLink4, phoneNumber, companyLogo }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header3 getHeaderInfo={this.getHeaderInfo} headerLink1={p.info.headerLink1} headerLink2={p.info.headerLink2} headerLink3={p.info.headerLink3} headerLink4={p.info.headerLink4} phoneNumber={p.info.phoneNumber} companyLogo={p.info.companyLogo} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-0") {
                                p.info = { introHeading, introSubtext, introButton1 }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro0 getIntroInfo={this.getIntroInfo} introHeading={p.info.introHeading} introSubtext={p.info.introSubtext} introButton1={p.info.introButton1} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-1") {
                                p.info = { introHeading, introSubtext, introButton1 }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro1 getIntroInfo={this.getIntroInfo} introHeading={p.info.introHeading} introSubtext={p.info.introSubtext} introButton1={p.info.introButton1} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-2") {
                                p.info = { introHeading, introSubtext, introButton1, introButton2, introImage }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro2 getIntroInfo={this.getIntroInfo} introHeading={p.info.introHeading} introSubtext={p.info.introSubtext} introButton1={p.info.introButton1} introButton2={p.info.introButton2} introImage={p.info.introImage} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-3") {
                                p.info = { introHeading, introSubtext, introVideo }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro3 getIntroInfo={this.getIntroInfo} introHeading={p.info.introHeading} introSubtext={p.info.introSubtext} introVideo={p.info.introVideo} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-4") {
                                p.info = { introHeading, introSubtext, introButton1 }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro4 getIntroInfo={this.getIntroInfo} introHeading={p.info.introHeading} introSubtext={p.info.introSubtext} introButton1={p.info.introButton1} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-0") {
                                p.info = { content0Heading, content0Text, content0Image }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item" data-element={p.data}>
                                            <Content0 getImage={this.getImage} getContentInfo={this.getContentInfo} content0Heading={content0Heading} content0Text={content0Text} content0Image={content0Image} />
                                            <div className="button-wrap">
                                                {/* <EditButton data={p.data} openEdit={this.props.openEdit} getElements={this.getElements} /> */}
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-1") {
                                p.info = { content1Heading, content1Text, content1Image }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Content1 getImage={this.getImage} getContentInfo={this.getContentInfo} content1Heading={content1Heading} content1Text={content1Text} content1Image={content1Image} />
                                            <div className="button-wrap">
                                                <EditButton data={p.data} openEdit={this.props.openEdit} getElements={this.getElements} />

                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-2") {
                                p.info = { content2Heading, content2Text }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Content2 getContentInfo={this.getContentInfo} content2Heading={content2Heading} content2Text={content2Text} />
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
