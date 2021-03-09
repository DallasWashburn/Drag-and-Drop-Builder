import React, { Component } from 'react';
import API from '../../utils/API';
import { Container, Draggable } from 'react-smooth-dnd';
import XButton from "../XButton/XButton"
import DuplicateButton from "../Duplicate-Button/Duplicate-Button"
import Header0 from "../Headers/Header0/Header0"
import Header1 from "../Headers/Header1/Header1"
import Header2 from "../Headers/Header2/Header2"
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
import Gallery2 from "../Gallery/Gallery2/Gallery2"
import Feature0 from "../Featues/Feature-0/Feature-0"
import Feature1 from "../Featues/Feature-1/Feature-1"
import Feature2 from "../Featues/Feature-2/Feature-2"
import Feature3 from "../Featues/Feature-3/Feature-3"
import Team0 from "../Team/Team-0/Team-0"
import Team1 from "../Team/Team-1/Team-1"
import Team2 from "../Team/Team-2/Team-2"
import Team3 from "../Team/Team-3/Team-3"
import Testimonial0 from "../Testimonials/Testimonial-0/Testimonial-0"
import Testimonial1 from "../Testimonials/Testimonial-1/Testimonial-1"
import Contact0 from "../Contact/Contact-0/Contact-0"
import Contact1 from "../Contact/Contact-1/Contact-1"
import Contact2 from "../Contact/Contact-2/Contact-2"
import Contact3 from "../Contact/Contact-3/Contact-3"
import Footer0 from "../Footers/Footer-0/Footer-0"
import Footer1 from "../Footers/Footer-1/Footer-1"
import Footer2 from "../Footers/Footer-2/Footer-2"







class Container1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //Header Blocks | Links and companyLogo are used for Footer Blocks as well
            companyLogo: "",
            headerLink1: "Home",
            headerLink2: "About",
            headerLink3: "Services",
            headerLink4: "Projects",
            headerLink5: "Blog",
            headerLink6: "Contact Us",
            headerButton: "623.456.9876",
            phoneNumber: "623.456.9876",
            //Intro Blocks
            introHeading: "Cybermark Wireframe",
            introSubHeading:"Lorem ipsum dolor sit amet",
            introSubtext: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            introImage: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            introButton1: "Learn More",
            introButton2: "Learn More",
            // Content Blocks
            content0Heading: "Cybermark Wireframe",
            content0SubHeading:"Lorem ipsum, dolor sit amet",
            content0Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            content0Image: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            content1Heading: "Cybermark Wireframe",
            content1SubHeading:"Lorem ipsum, dolor sit amet",
            content1Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            content1Image: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            content2Heading: "Cybermark Wireframe",
            content2SubHeading:"Lorem ipsum, dolor sit amet",
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
            //Contact Blocks
            contactHeading: "Get In Touch",
            ContactSubText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            lat: "",
            lon: "",
            address: "1234 N ABC Lane",
            email: "",
            //Footer Blocks
            footerSubText1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis?",
            footerSubText2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis?",
            footerSubText3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis?"
        }
    }

    componentDidMount = () => {
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
                            if (item.data === "Header-0") {
                                this.setState({
                                    companyLogo: item.info.companyLogo,
                                    headerLink1: item.info.headerLink1,
                                    headerLink2: item.info.headerLink2,
                                    headerLink3: item.info.headerLink3,
                                    headerLink4: item.info.headerLink4,
                                    headerLink5: item.info.headerLink5,
                                    headerLink6: item.info.headerLink6,

                                })
                            } else if (item.data === "Header-1"){
                                this.setState({
                                    companyLogo: item.info.companyLogo,
                                    headerLink1: item.info.headerLink1,
                                    headerLink2: item.info.headerLink2,
                                    headerLink3: item.info.headerLink3,
                                    headerLink4: item.info.headerLink4,
                                    headerLink5: item.info.headerLink5,
                                    headerLink6: item.info.headerLink6,

                                })
                            } else if (item.data === "Header-2"){
                                this.setState({
                                    companyLogo: item.info.companyLogo,
                                    headerLink1: item.info.headerLink1,
                                    headerLink2: item.info.headerLink2,
                                    headerLink3: item.info.headerLink3,
                                    headerLink4: item.info.headerLink4,
                                    headerLink5: item.info.headerLink5,
                                    headerLink6: item.info.headerLink6,

                                })
                            } else if (item.data === "Intro-0"){
                                this.setState({
                                    introHeading: item.info.introHeading,
                                    introSubHeading: item.info.introSubHeading,
                                    introSubtext: item.info.introSubtext,
                                    introButton1: item.info.introButton1
                                })
                            } else if (item.data === "Intro-1"){
                                this.setState({
                                    introHeading: item.info.introHeading,
                                    introSubHeading: item.info.introSubHeading,
                                    introSubtext: item.info.introSubtext,
                                })
                            } else if (item.data === "Intro-2"){
                                this.setState({
                                    introHeading: item.info.introHeading,
                                    introSubHeading: item.info.introSubHeading,
                                    introSubtext: item.info.introSubtext,
                                    introButton1:item.info.introButton1,
                                    introButton2:item.info.introButton2
                                })
                            } else if (item.data === "Intro-3"){
                                this.setState({
                                    introHeading: item.info.introHeading,
                                    introSubHeading: item.info.introSubHeading
                                })
                            } else if (item.data === "Intro-4"){
                                this.setState({
                                    introHeading: item.info.introHeading,
                                    introSubHeading: item.info.introSubHeading,
                                    introSubtext: item.info.introSubtext

                                })
                            } else if (item.data === "Content-0"){
                                this.setState({
                                    content0Heading: item.info.content0Heading,
                                    content0SubHeading: item.info.content0SubHeading,
                                    content0Text: item.info.content0Text
                                })
                            } else if (item.data === "Content-1"){
                                this.setState({
                                    content1Heading: item.info.content1Heading,
                                    content1SubHeading: item.info.content1SubHeading,
                                    content1Text: item.info.content1Text
                                })
                            } else if (item.data === "Content-2"){
                                this.setState({
                                    content2Heading: item.info.content2Heading,
                                    content2SubHeading: item.info.content2SubHeading,
                                    content2Text: item.info.content2Text
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

    getHeaderInfo = (link1, link2, link3, link4, link5, link6, logo) => {

        if (link1 !== undefined) {
            this.setState({ headerLink1: link1 })
        } else if (link2 !== undefined) {
            this.setState({ headerLink2: link2 })
        } else if (link3 !== undefined) {
            this.setState({ headerLink3: link3 })
        } else if (link4 !== undefined) {
            this.setState({ headerLink4: link4 })
        } else if (link5 !== undefined) {
            this.setState({ headerLink5: link5 })
        } else if (link6 !== undefined) {
            this.setState({ headerLink6: link6 })
        } else if (logo !== undefined) {
            this.setState({ companyLogo: logo })
        }

    }

    getIntroInfo = (introHeading, introSubHeading, introSubtext, introImage,
        introButton1, introButton2) => {

        if (introHeading !== undefined) {
            this.setState({ introHeading: introHeading })
        } else if (introSubHeading !== undefined) {
            this.setState({ introSubHeading: introSubHeading })
        } else if (introSubtext !== undefined) {
            this.setState({ introSubtext: introSubtext })
        } else if (introImage !== undefined) {
            this.setState({ introImage: introImage })
        } else if (introButton1 !== undefined) {
            this.setState({ introButton1: introButton1 })
        } else if (introButton2 !== undefined) {
            this.setState({ introButton2: introButton2 })
        }

    }

    getContentInfo = (content0Heading, content0SubHeading, content0Text, content0Image, content1Heading, content1SubHeading, content1Text, content1Image, content2Heading,content2SubHeading, content2Text) => {
        if (content0Heading !== undefined) {
            this.setState({ content0Heading: content0Heading })
        } else if (content0SubHeading !== undefined) {
            this.setState({ content0SubHeading: content0SubHeading })
        } else if (content0Text !== undefined) {
            this.setState({ content0Text: content0Text })
        } else if (content0Image !== undefined) {
            this.setState({ content0Image: content0Image })
        } else if (content1Heading !== undefined) {
            this.setState({ content1Heading: content1Heading })
        } else if (content1SubHeading !== undefined) {
            this.setState({ content1SubHeading: content1SubHeading })
        } else if (content1Text !== undefined) {
            this.setState({ content1Text: content1Text })
        } else if (content1Image !== undefined) {
            this.setState({ content1Image: content1Image })
        } else if (content2Heading !== undefined) {
            this.setState({ content2Heading: content2Heading })
        } else if (content2SubHeading !== undefined) {
            this.setState({ content2SubHeading: content2SubHeading })
        } else if (content2Text !== undefined) {
            this.setState({ content2Text: content2Text })
        }

    }

    getGalleryInfo = (galleryHeading, gallerySubtext, galleryImage1Title, galleryImage1Desc, galleryImage2Title, galleryImage2Desc ,galleryImage3Title, galleryImage3Desc, galleryImage1,galleryImage2,galleryImage3,galleryImage4,galleryImage5,galleryImage6 ) => {
        if (galleryHeading !== undefined) {
            this.setState({ galleryHeading: galleryHeading })
        } else if (gallerySubtext !== undefined) {
            this.setState({ gallerySubtext: gallerySubtext })
        } else if (galleryImage1Title !== undefined) {
            this.setState({ galleryImage1Title: galleryImage1Title })
        } else if (galleryImage1Desc !== undefined) {
            this.setState({ galleryImage1Desc: galleryImage1Desc })
        } else if (galleryImage2Title !== undefined) {
            this.setState({ galleryImage2Title: galleryImage2Title })
        } else if (galleryImage2Desc !== undefined) {
            this.setState({ galleryImage2Desc: galleryImage2Desc })
        } else if (galleryImage3Title !== undefined) {
            this.setState({ galleryImage3Title: galleryImage3Title })
        } else if (galleryImage3Desc !== undefined) {
            this.setState({ galleryImage3Desc: galleryImage3Desc })
        } else if (galleryImage1 !== undefined) {
            this.setState({ galleryImage1: galleryImage1 })
        } else if (galleryImage2 !== undefined) {
            this.setState({ galleryImage2: galleryImage2 })
        } else if (galleryImage3 !== undefined) {
            this.setState({ galleryImage3: galleryImage3 })
        } else if (galleryImage4 !== undefined) {
            this.setState({ galleryImage4: galleryImage4 })
        } else if (galleryImage5 !== undefined) {
            this.setState({ galleryImage5: galleryImage5 })
        } else if (galleryImage6 !== undefined) {
            this.setState({ galleryImage6: galleryImage6 })
        }
    }


    render() {
        // Calling Header Block Info
        var headerLink1 = this.state.headerLink1;
        var headerLink2 = this.state.headerLink2;
        var headerLink3 = this.state.headerLink3;
        var headerLink4 = this.state.headerLink4;
        var headerLink5 = this.state.headerLink5;
        var headerLink6 = this.state.headerLink6;
        var headerButton = this.state.headerButton;
        var phoneNumber = this.state.phoneNumber;
        var companyLogo = this.state.companyLogo;
        // Calling Intro Block Info
        var introHeading = this.state.introHeading;
        var introSubHeading = this.state.introSubHeading;
        var introSubtext = this.state.introSubtext;
        var introImage = this.state.introImage;
        var introButton1 = this.state.introButton1;
        var introButton2 = this.state.introButton2;
        // Calling Content Block Info
        var content0Heading = this.state.content0Heading;
        var content0SubHeading = this.state.content0SubHeading
        var content0Text = this.state.content0Text;
        var content0Image = this.state.content0Image
        var content1Heading = this.state.content1Heading;
        var content1SubHeading = this.state.content1SubHeading
        var content1Text = this.state.content1Text;
        var content1Image = this.state.content1Image;
        var content2Heading = this.state.content2Heading;
        var content2SubHeading = this.state.content2SubHeading
        var content2Text = this.state.content2Text;
        // Calling Gallery Block Info


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
                                p.info = { headerLink1, headerLink2, headerLink3, headerLink4, headerLink5, headerLink6, companyLogo }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header0 getHeaderInfo={this.getHeaderInfo} headerLink1={p.info.headerLink1} headerLink2={p.info.headerLink2} headerLink3={p.info.headerLink3} headerLink4={p.info.headerLink4} headerLink5={p.info.headerLink5} headerLink6={p.info.headerLink6} companyLogo={p.info.companyLogo} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Header-1") {
                                p.info = { headerLink1, headerLink2, headerLink3, headerLink4, headerLink5, headerLink6, headerButton, companyLogo }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header1 getHeaderInfo={this.getHeaderInfo} headerLink1={p.info.headerLink1} headerLink2={p.info.headerLink2} headerLink3={p.info.headerLink3} headerLink4={p.info.headerLink4} headerLink5={p.info.headerLink5} headerLink6={p.info.headerLink6} headerButton={p.info.headerButton} companyLogo={p.info.companyLogo} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Header-2") {
                                p.info = { headerLink1, headerLink2, headerLink3, headerLink4, headerLink5, headerLink6, companyLogo }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header2 getHeaderInfo={this.getHeaderInfo} headerLink1={p.info.headerLink1} headerLink2={p.info.headerLink2} headerLink3={p.info.headerLink3} headerLink4={p.info.headerLink4} headerLink5={p.info.headerLink5} headerLink6={p.info.headerLink6}  companyLogo={p.info.companyLogo} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-0") {
                                p.info = { introHeading, introSubHeading, introSubtext, introButton1 }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro0 getIntroInfo={this.getIntroInfo} introHeading={p.info.introHeading} introSubHeading={p.info.introSubHeading} introSubtext={p.info.introSubtext} introButton1={p.info.introButton1} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-1") {
                                p.info = { introHeading, introSubHeading, introSubtext }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro1 getIntroInfo={this.getIntroInfo} introHeading={p.info.introHeading} 
                                            introSubHeading={p.info.introSubHeading}introSubtext={p.info.introSubtext}  />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-2") {
                                p.info = { introHeading, introSubHeading, introSubtext, introButton1, introButton2, introImage }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro2 getIntroInfo={this.getIntroInfo} introHeading={p.info.introHeading} 
                                            introSubHeading={p.info.introSubHeading}introSubtext={p.info.introSubtext} introButton1={p.info.introButton1} introButton2={p.info.introButton2} introImage={p.info.introImage} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-3") {
                                p.info = { introHeading, introSubHeading }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro3 getIntroInfo={this.getIntroInfo} introHeading={p.info.introHeading} introSubHeading={p.info.introSubHeading}  />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-4") {
                                p.info = { introHeading, introSubHeading, introSubtext }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro4 getIntroInfo={this.getIntroInfo} introHeading={p.info.introHeading} introSubtext={p.info.introSubtext}
                                            introSubHeading={p.info.introSubHeading} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-0") {
                                p.info = { content0Heading, content0SubHeading, content0Text, content0Image }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item" data-element={p.data}>
                                            <Content0 getImage={this.getImage} getContentInfo={this.getContentInfo} content0Heading={content0Heading} content0SubHeading={content0SubHeading} content0Text={content0Text} content0Image={content0Image} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-1") {
                                p.info = { content1Heading, content1SubHeading, content1Text, content1Image }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Content1 getImage={this.getImage} getContentInfo={this.getContentInfo} content1Heading={content1Heading}
                                            content1SubHeading={content1SubHeading} content1Text={content1Text} content1Image={content1Image} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-2") {
                                p.info = { content2Heading, content2SubHeading, content2Text }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Content2 getContentInfo={this.getContentInfo} content2Heading={content2Heading}
                                            content2SubHeading={content2SubHeading}
                                            content2Text={content2Text} />
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
                            } else if (p.data === "Gallery-2") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Gallery2 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Features-0") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Feature0 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Features-1") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Feature1 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Features-2") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Feature2 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Features-3") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Feature3 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Team-0") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Team0 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Team-1") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Team1 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Team-2") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Team2 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Team-3") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Team3 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Testimonial-0") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Testimonial0 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Testimonial-1") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Testimonial1 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Contact-0") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Contact0 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Contact-1") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Contact1 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Contact-2") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Contact2 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Contact-3") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Contact3 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Footer-0") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Footer0 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Footer-1") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Footer1 />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Footer-2") {
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Footer2 />
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
