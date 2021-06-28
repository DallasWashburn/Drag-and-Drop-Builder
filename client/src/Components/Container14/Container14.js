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
import Content01 from '../Content/Content01/Content01';
import Content02 from '../Content/Content02/Content02';
import Content03 from '../Content/Content03/Content03';
import Content11 from '../Content/Content11/Content11';
import Content12 from '../Content/Content12/Content12';
import Content13 from '../Content/Content13/Content13';
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


class Container14 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //Header Blocks | Links and companyLogo are used for Footer Blocks as well
            companyLogo: "https://www.cybermark.com/wp-content/uploads/2018/08/mainLogo.png",
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
            introSubHeading: "Lorem ipsum dolor sit amet",
            introSubtext: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            introImage: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            introButton1: "Learn More",
            introButton2: "Learn More",
            introBackgroundImage: "https://resources.owllabs.com/hs-fs/hubfs/fog-3622519_1920-jpg.jpeg?width=882&name=fog-3622519_1920-jpg.jpeg",
            // Content Blocks
            content0Heading: "Cybermark Wireframe",
            content0SubHeading: "Lorem ipsum, dolor sit amet",
            content0Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            content0Image: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",

            content01Heading: "Cybermark Wireframe",
            content01SubHeading: "Lorem ipsum, dolor sit amet",
            content01Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            content01Image: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",

            content02Heading: "Cybermark Wireframe",
            content02SubHeading: "Lorem ipsum, dolor sit amet",
            content02Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            content02Image: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            
            content03Heading: "Cybermark Wireframe",
            content03SubHeading: "Lorem ipsum, dolor sit amet",
            content03Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            content03Image: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",

            content1Heading: "Cybermark Wireframe",
            content1SubHeading: "Lorem ipsum, dolor sit amet",
            content1Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            content1Image: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",

            content11Heading: "Cybermark Wireframe",
            content11SubHeading: "Lorem ipsum, dolor sit amet",
            content11Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            content11Image: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",

            content12Heading: "Cybermark Wireframe",
            content12SubHeading: "Lorem ipsum, dolor sit amet",
            content12Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            content12Image: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",
            
            content13Heading: "Cybermark Wireframe",
            content13SubHeading: "Lorem ipsum, dolor sit amet",
            content13Text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            content13Image: "https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png",

            content2Heading: "Cybermark Wireframe",
            content2SubHeading: "Lorem ipsum, dolor sit amet",
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
            galleryImage1: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            galleryImage2: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            galleryImage3: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            galleryImage4: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            galleryImage5: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            galleryImage6: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            galleryImage7: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            galleryImage8: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            galleryImage9: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            galleryImage10: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            // Feature Blocks
            featureHeading: "Key Features",
            featureSubHeading: "Lorem ipsum",
            featuresSubHeadingText: "Lorem Ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            featureH31: "First One",
            featureH32: "Second One",
            featureH33: "Third One",
            featureH34: "Fourth One",
            featureH35: "Fifth One",
            featureH36: "Sixth One",
            featureSubtext1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            featureSubtext2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            featureSubtext3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            featureSubtext4: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            featureSubtext5: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            featureSubtext6: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis? Excepturi odit veritatis impedit eveniet explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            featureButton: "View All",
            // Team Blocks 
            teamHeading: "Our Team",
            teamSubheading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            teamH31: "John Doe",
            teamH32: "John Doe",
            teamH33: "John Doe",
            teamH34: "John Doe",
            teamH35: "John Doe",
            teamH36: "John Doe",
            bigHeadshot: "",
            job1: "Lead Designer",
            job2: "Lead Designer",
            job3: "Lead Designer",
            job4: "Lead Designer",
            job5: "Lead Designer",
            job6: "Lead Designer",
            teamSubtext1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero",
            teamSubtext2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero",
            teamSubtext3: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero",
            teamSubtext4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero",
            teamSubtext5: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero",
            teamSubtext6: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero",
            teamImage1: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            teamImage2: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            teamImage3: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            teamImage4: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            teamImage5: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",
            teamImage6: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png",

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
            contactSubText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sint corrupti aliquam exercitationem ullam numquam explicabo sequi reprehenderit culpa est accusamus accusantium magni provident in expedita harum libero, quasi perspiciatis!",
            lat: "",
            lon: "",
            address: "1234 N ABC Lane",
            email: "",
            //Footer Blocks
            footerSubText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iusto ipsa distinctio veritatis?",

            contentTest: [this.props.generateItems]

        }

    }

    componentDidMount = () => {
        this.getProject()
    }

    getOccurance = (array, value) => {
        var count = 0;
        array.forEach((v) => {
            (v.data === value && count++)

        });

        console.log(count);
        return count;
    }

    // Get current projects and set content based on their saved information
    getProject = () => {

        API.getUsers()
            .then(users => {
                var theUsers = users.data
                for (let i = 0; i < theUsers.length; i++) {
                    const element = theUsers[i];
                    if (element.userEmail === this.props.userEmail) {
                        var Page1 = element.projects[27];
                        Page1.map(item => {
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
                            } else if (item.data === "Header-1") {
                                this.setState({
                                    companyLogo: item.info.companyLogo,
                                    headerLink1: item.info.headerLink1,
                                    headerLink2: item.info.headerLink2,
                                    headerLink3: item.info.headerLink3,
                                    headerLink4: item.info.headerLink4,
                                    headerLink5: item.info.headerLink5,
                                    headerLink6: item.info.headerLink6,
                                    phoneNumber: item.info.phoneNumber
                                })
                            } else if (item.data === "Header-2") {
                                this.setState({
                                    companyLogo: item.info.companyLogo,
                                    headerLink1: item.info.headerLink1,
                                    headerLink2: item.info.headerLink2,
                                    headerLink3: item.info.headerLink3,
                                    headerLink4: item.info.headerLink4,
                                    headerLink5: item.info.headerLink5,
                                    headerLink6: item.info.headerLink6,
                                    phoneNumber: item.info.phoneNumber
                                })
                            } else if (item.data === "Intro-0") {
                                this.setState({
                                    introHeading: item.info.introHeading,
                                    introSubHeading: item.info.introSubHeading,
                                    introSubtext: item.info.introSubtext,
                                    introButton1: item.info.introButton1
                                })
                            } else if (item.data === "Intro-1") {
                                this.setState({
                                    introHeading: item.info.introHeading,
                                    introSubHeading: item.info.introSubHeading,
                                    introSubtext: item.info.introSubtext,
                                })
                            } else if (item.data === "Intro-2") {
                                this.setState({
                                    introHeading: item.info.introHeading,
                                    introSubHeading: item.info.introSubHeading,
                                    introSubtext: item.info.introSubtext,
                                    introButton1: item.info.introButton1,
                                    introButton2: item.info.introButton2,
                                    introImage: item.info.introImage
                                })
                            } else if (item.data === "Intro-3") {
                                this.setState({
                                    introHeading: item.info.introHeading,
                                    introSubHeading: item.info.introSubHeading,
                                    introBackgroundImage: item.info.introBackgroundImage
                                })
                            } else if (item.data === "Intro-4") {
                                this.setState({
                                    introHeading: item.info.introHeading,
                                    introSubHeading: item.info.introSubHeading,
                                    introSubtext: item.info.introSubtext

                                })
                            } else if (item.data === "Content-0") {
                                // console.log("content-0");
                                this.setState({
                                    content0Heading: item.info.content0Heading,
                                    content0SubHeading: item.info.content0SubHeading,
                                    content0Text: item.info.content0Text,
                                    content0Image: item.info.content0Image
                                })

                            } else if (item.data === "Content-01") {
                                this.setState({
                                    content01Heading: item.info.content01Heading,
                                    content01SubHeading: item.info.content01SubHeading,
                                    content01Text: item.info.content01Text,
                                    content01Image: item.info.content01Image
                                })

                            } else if (item.data === "Content-02") {
                                this.setState({
                                    content02Heading: item.info.content02Heading,
                                    content02SubHeading: item.info.content02SubHeading,
                                    content02Text: item.info.content02Text,
                                    content02Image: item.info.content02Image
                                })

                            } else if (item.data === "Content-03") {
                                this.setState({
                                    content03Heading: item.info.content03Heading,
                                    content03SubHeading: item.info.content03SubHeading,
                                    content03Text: item.info.content03Text,
                                    content03Image: item.info.content03Image
                                })

                            } else if (item.data === "Content-1") {
                                this.setState({
                                    content1Heading: item.info.content1Heading,
                                    content1SubHeading: item.info.content1SubHeading,
                                    content1Text: item.info.content1Text,
                                    content1Image: item.info.content1Image

                                })
                            } else if (item.data === "Content-11") {
                                this.setState({
                                    content11Heading: item.info.content11Heading,
                                    content11SubHeading: item.info.content11SubHeading,
                                    content11Text: item.info.content11Text,
                                    content11Image: item.info.content11Image

                                })
                            } else if (item.data === "Content-12") {
                                this.setState({
                                    content12Heading: item.info.content12Heading,
                                    content12SubHeading: item.info.content12SubHeading,
                                    content12Text: item.info.content12Text,
                                    content12Image: item.info.content12Image

                                })
                            } else if (item.data === "Content-13") {
                                this.setState({
                                    content13Heading: item.info.content13Heading,
                                    content13SubHeading: item.info.content13SubHeading,
                                    content13Text: item.info.content13Text,
                                    content13Image: item.info.content13Image

                                })
                            } else if (item.data === "Content-2") {
                                this.setState({
                                    content2Heading: item.info.content2Heading,
                                    content2SubHeading: item.info.content2SubHeading,
                                    content2Text: item.info.content2Text
                                })
                            } else if (item.data === "Gallery-0") {
                                this.setState({
                                    galleryHeading: item.info.galleryHeading,
                                    gallerySubtext: item.info.gallerySubtext,
                                    galleryImage1Title: item.info.galleryImage1Title,
                                    galleryImage2Title: item.info.galleryImage2Title,
                                    galleryImage3Title: item.info.galleryImage3Title,
                                    galleryImage1Desc: item.info.galleryImage1Desc,
                                    galleryImage2Desc: item.info.galleryImage2Desc,
                                    galleryImage3Desc: item.info.galleryImage3Desc,
                                    galleryImage1: item.info.galleryImage1,
                                    galleryImage2: item.info.galleryImage2,
                                    galleryImage3: item.info.galleryImage3,
                                })
                            } else if (item.data === "Gallery-1") {
                                this.setState({
                                    galleryHeading: item.info.galleryHeading,
                                    gallerySubtext: item.info.gallerySubtext,
                                    galleryImage1: item.info.galleryImage1,
                                    galleryImage2: item.info.galleryImage2,
                                    galleryImage3: item.info.galleryImage3,
                                    galleryImage4: item.info.galleryImage4,
                                    galleryImage5: item.info.galleryImage5,
                                    galleryImage6: item.info.galleryImage6,
                                })
                            } else if (item.data === "Gallery-2") {
                                this.setState({
                                    galleryImage1: item.info.galleryImage1,
                                    galleryImage2: item.info.galleryImage2,
                                    galleryImage3: item.info.galleryImage3,
                                    galleryImage4: item.info.galleryImage4,
                                    galleryImage5: item.info.galleryImage5,
                                    galleryImage6: item.info.galleryImage6,
                                    galleryImage7: item.info.galleryImage7,
                                    galleryImage8: item.info.galleryImage8,
                                    galleryImage9: item.info.galleryImage9,
                                    galleryImage10: item.info.galleryImage10
                                })
                            } else if (item.data === "Features-0") {
                                this.setState({
                                    featureHeading: item.info.featureHeading,
                                    featureSubHeading: item.info.featureSubHeading,
                                    featuresSubHeadingText: item.info.featuresSubHeadingText,
                                    featureH31: item.info.featureH31,
                                    featureSubtext1: item.info.featureSubtext1,
                                    featureH32: item.info.featureH32,
                                    featureSubtext2: item.info.featureSubtext2,
                                    featureH33: item.info.featureH33,
                                    featureSubtext3: item.info.featureSubtext3,
                                    featureH34: item.info.featureH34,
                                    featureSubtext4: item.info.featureSubtext4,
                                })
                            } else if (item.data === "Features-1") {
                                this.setState({
                                    featureHeading: item.info.featureHeading,
                                    featuresSubHeadingText: item.info.featuresSubHeadingText,
                                    featureH31: item.info.featureH31,
                                    featureSubtext1: item.info.featureSubtext1,
                                    featureH32: item.info.featureH32,
                                    featureSubtext2: item.info.featureSubtext2,
                                    featureH33: item.info.featureH33,
                                    featureSubtext3: item.info.featureSubtext3,
                                })
                            } else if (item.data === "Features-2") {
                                this.setState({
                                    featureHeading: item.info.featureHeading,
                                    featureSubHeading: item.info.featureSubHeading,
                                    featuresSubHeadingText: item.info.featuresSubHeadingText,
                                    featureH31: item.info.featureH31,
                                    featureSubtext1: item.info.featureSubtext1,
                                    featureH32: item.info.featureH32,
                                    featureSubtext2: item.info.featureSubtext2,
                                    featureH33: item.info.featureH33,
                                    featureSubtext3: item.info.featureSubtext3,
                                    featureH34: item.info.featureH34,
                                    featureSubtext4: item.info.featureSubtext4,
                                    featureH35: item.info.featureH35,
                                    featureSubtext5: item.info.featureSubtext5,
                                    featureH36: item.info.featureH36,
                                    featureSubtext6: item.info.featureSubtext6,
                                    featureButton: item.info.featureButton
                                })
                            } else if (item.data === "Features-3") {
                                this.setState({
                                    featureHeading: item.info.featureHeading,
                                    featuresSubHeadingText: item.info.featuresSubHeadingText,
                                    featureH31: item.info.featureH31,
                                    featureSubtext1: item.info.featureSubtext1,
                                    featureH32: item.info.featureH32,
                                    featureSubtext2: item.info.featureSubtext2,
                                    featureH33: item.info.featureH33,
                                    featureSubtext3: item.info.featureSubtext3,
                                    featureH34: item.info.featureH34,
                                    featureSubtext4: item.info.featureSubtext4,
                                    featureButton: item.info.featureButton
                                })
                            } else if (item.data === "Team-0") {
                                this.setState({
                                    teamHeading: item.info.teamHeading,
                                    teamSubheading: item.info.teamSubheading,
                                    teamH31: item.info.teamH31,
                                    job1: item.info.job1,
                                    teamSubtext1: item.info.teamSubtext1,
                                    teamH32: item.info.teamH32,
                                    job2: item.info.job2,
                                    teamSubtext2: item.info.teamSubtext2,
                                    teamH33: item.info.teamH33,
                                    job3: item.info.job3,
                                    teamSubtext3: item.info.teamSubtext3,
                                    teamImage1: item.info.teamImage1,
                                    teamImage2: item.info.teamImage2,
                                    teamImage3: item.info.teamImage3,

                                })
                            } else if (item.data === "Team-1") {
                                this.setState({
                                    teamH31: item.info.teamH31,
                                    job1: item.info.job1,
                                    teamSubtext1: item.info.teamSubtext1,
                                    teamH32: item.info.teamH32,
                                    job2: item.info.job2,
                                    teamSubtext2: item.info.teamSubtext2,
                                    teamH33: item.info.teamH33,
                                    job3: item.info.job3,
                                    teamSubtext3: item.info.teamSubtext3,
                                    teamH34: item.info.teamH34,
                                    job4: item.info.job4,
                                    teamSubtext4: item.info.teamSubtext4,
                                    teamH35: item.info.teamH35,
                                    teamSubtext5: item.info.teamSubtext5,
                                    teamH36: item.info.teamH36,
                                    job6: item.info.job6,
                                    teamSubtext6: item.info.teamSubtext6,
                                    teamImage1: item.info.teamImage1,
                                    teamImage2: item.info.teamImage2,
                                    teamImage3: item.info.teamImage3,
                                    teamImage4: item.info.teamImage4,
                                    teamImage5: item.info.teamImage5,
                                    teamImage6: item.info.teamImage6
                                })
                            } else if (item.data === "Team-2") {
                                this.setState({
                                    teamH31: item.info.teamH31,
                                    job1: item.info.job1,
                                    teamSubtext1: item.info.teamSubtext1,
                                    teamH32: item.info.teamH32,
                                    job2: item.info.job2,
                                    teamSubtext2: item.info.teamSubtext2,
                                    teamH33: item.info.teamH33,
                                    job3: item.info.job3,
                                    teamSubtext3: item.info.teamSubtext3,
                                    teamH34: item.info.teamH34,
                                    job4: item.info.job4,
                                    teamSubtext4: item.info.teamSubtext4,
                                    teamH35: item.info.teamH35,
                                    teamSubtext5: item.info.teamSubtext5,
                                    teamH36: item.info.teamH36,
                                    job6: item.info.job6,
                                    teamSubtext6: item.info.teamSubtext6,
                                    teamImage1: item.info.teamImage1,
                                    teamImage2: item.info.teamImage2,
                                    teamImage3: item.info.teamImage3,
                                    teamImage4: item.info.teamImage4,
                                    teamImage5: item.info.teamImage5,
                                    teamImage6: item.info.teamImage6
                                })
                            } else if (item.data === "Team-3") {
                                this.setState({
                                    teamHeading: item.info.teamHeading,
                                    teamSubheading: item.info.teamSubheading,
                                    teamH31: item.info.teamH31,
                                    job1: item.info.job1,
                                    teamSubtext1: item.info.teamSubtext1,
                                    teamH32: item.info.teamH32,
                                    job2: item.info.job2,
                                    teamSubtext2: item.info.teamSubtext2,
                                    teamH33: item.info.teamH33,
                                    job3: item.info.job3,
                                    teamSubtext3: item.info.teamSubtext3,
                                    teamH34: item.info.teamH34,
                                    job4: item.info.job4,
                                    teamSubtext4: item.info.teamSubtext4,
                                    teamH35: item.info.teamH35,
                                    teamSubtext5: item.info.teamSubtext5,
                                    teamH36: item.info.teamH36,
                                    job6: item.info.job6,
                                    teamSubtext6: item.info.teamSubtext6,
                                    teamImage1: item.info.teamImage1,
                                    teamImage2: item.info.teamImage2,
                                    teamImage3: item.info.teamImage3,
                                    teamImage4: item.info.teamImage4,
                                    teamImage5: item.info.teamImage5,
                                    teamImage6: item.info.teamImage6
                                })
                            } else if (item.data === "Testimonial-0") {
                                this.setState({
                                    testimonialHeading: item.info.testimonialHeading,
                                    testimonialSubHeading: item.info.testimonialSubHeading,
                                    name1: item.info.name1,
                                    name1Desc: item.info.name1Desc,
                                    quote1: item.info.quote1,
                                    name2: item.info.name2,
                                    name2Desc: item.info.name2Desc,
                                    quote2: item.info.quote2,
                                    name3: item.info.name3,
                                    name3Desc: item.info.name3Desc,
                                    quote3: item.info.quote3,
                                })
                            } else if (item.data === "Testimonial-1") {
                                this.setState({
                                    testimonialHeading: item.info.testimonialHeading,
                                    testimonialSubHeading: item.info.testimonialSubHeading,
                                    name1: item.info.name1,
                                    name1Desc: item.info.name1Desc,
                                    quote1: item.info.quote1,
                                    name2: item.info.name2,
                                    name2Desc: item.info.name2Desc,
                                    quote2: item.info.quote2,
                                    name3: item.info.name3,
                                    name3Desc: item.info.name3Desc,
                                    quote3: item.info.quote3,
                                })
                            } else if (item.data === "Contact-0") {
                                this.setState({
                                    contactHeading: item.info.contactHeading,
                                    contactSubText: item.info.contactSubText,
                                })
                            } else if (item.data === "Contact-1") {
                                this.setState({
                                    contactHeading: item.info.contactHeading,
                                    contactSubText: item.info.contactSubText,
                                })
                            } else if (item.data === "Contact-2") {
                                this.setState({
                                    contactHeading: item.info.contactHeading,
                                    contactSubText: item.info.contactSubText,
                                    address: item.info.address,
                                    email: item.info.email
                                })
                            } else if (item.data === "Contact-3") {
                                this.setState({
                                    contactHeading: item.info.contactHeading,
                                    contactSubText: item.info.contactSubText,
                                })
                            }

                        })
                    }
                }

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
        parentDiv.remove();
        window.removeEventListener('scroll', noScroll);
    }

    getImage = (event) => {
        var column = event.target.parentElement.parentElement.parentElement
        // console.log(column);

        window.cloudinary.createUploadWidget({
            cloudName: "dallas",
            uploadPreset: "bpdpgvfm"
        },
            (error, result) => {
                if (result.event === 'success' && column.className === 'Intro-2') {
                    this.setState({
                        introImage: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'intro_4_hero') {
                    this.setState({
                        introBackgroundImage: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Content-0') {
                    this.setState({
                        content0Image: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Content-01') {
                    this.setState({
                        content01Image: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Content-02') {
                    this.setState({
                        content02Image: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Content-03') {
                    this.setState({
                        content03Image: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Content-1') {
                    this.setState({
                        content1Image: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Content-11') {
                    this.setState({
                        content11Image: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Content-12') {
                    this.setState({
                        content12Image: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Content-13') {
                    this.setState({
                        content13Image: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-0-1') {
                    this.setState({
                        galleryImage1: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-0-2') {
                    this.setState({
                        galleryImage2: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-0-3') {
                    this.setState({
                        galleryImage3: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-1-1') {
                    this.setState({
                        galleryImage1: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-1-2') {
                    this.setState({
                        galleryImage2: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-1-3') {
                    this.setState({
                        galleryImage3: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-1-4') {
                    this.setState({
                        galleryImage4: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-1-5') {
                    this.setState({
                        galleryImage5: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-1-6') {
                    this.setState({
                        galleryImage6: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-2-1') {
                    this.setState({
                        galleryImage1: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-2-2') {
                    this.setState({
                        galleryImage2: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-2-3') {
                    this.setState({
                        galleryImage3: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-2-4') {
                    this.setState({
                        galleryImage4: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-2-5') {
                    this.setState({
                        galleryImage5: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-2-6') {
                    this.setState({
                        galleryImage6: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-2-7') {
                    this.setState({
                        galleryImage7: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-2-8') {
                    this.setState({
                        galleryImage8: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-2-9') {
                    this.setState({
                        galleryImage9: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Gallery-2-10') {
                    this.setState({
                        galleryImage10: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-0-1') {
                    this.setState({
                        teamImage1: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-0-2') {
                    this.setState({
                        teamImage2: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-0-3') {
                    this.setState({
                        teamImage3: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-1-1') {
                    this.setState({
                        teamImage1: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-1-2') {
                    this.setState({
                        teamImage2: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-1-3') {
                    this.setState({
                        teamImage3: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-1-4') {
                    this.setState({
                        teamImage4: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-1-5') {
                    this.setState({
                        teamImage5: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-1-6') {
                    this.setState({
                        teamImage6: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-2-1') {
                    this.setState({
                        teamImage1: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-2-2') {
                    this.setState({
                        teamImage2: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-2-3') {
                    this.setState({
                        teamImage3: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-2-4') {
                    this.setState({
                        teamImage4: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-2-5') {
                    this.setState({
                        teamImage5: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-2-6') {
                    this.setState({
                        teamImage6: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-3-1') {
                    this.setState({
                        teamImage1: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-3-2') {
                    this.setState({
                        teamImage2: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-3-3') {
                    this.setState({
                        teamImage3: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-3-4') {
                    this.setState({
                        teamImage4: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-3-5') {
                    this.setState({
                        teamImage5: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Team-3-6') {
                    this.setState({
                        teamImage6: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Header-0') {
                    this.setState({
                        companyLogo: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Header-1') {
                    this.setState({
                        companyLogo: result.info.secure_url
                    })
                } else if (result.event === 'success' && column.className === 'Header-2') {
                    this.setState({
                        companyLogo: result.info.secure_url
                    })
                }
            }
        ).open();
    }

    getHeaderInfo = (link1, link2, link3, link4, link5, link6, phoneNumber) => {

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
        } else if (phoneNumber !== undefined) {
            this.setState({ phoneNumber: phoneNumber })
        }

    }

    getIntroInfo = (introHeading, introSubHeading, introSubtext,
        introButton1, introButton2) => {

        if (introHeading !== undefined) {
            this.setState({ introHeading: introHeading })
        } else if (introSubHeading !== undefined) {
            this.setState({ introSubHeading: introSubHeading })
        } else if (introSubtext !== undefined) {
            this.setState({ introSubtext: introSubtext })
        } else if (introButton1 !== undefined) {
            this.setState({ introButton1: introButton1 })
        } else if (introButton2 !== undefined) {
            this.setState({ introButton2: introButton2 })
        }

    }

    getContentInfo = (content0Heading, content0SubHeading, content0Text, content1Heading, content1SubHeading, content1Text, content2Heading, content2SubHeading, content2Text, content01Heading, content01SubHeading, content01Text,) => {
        if (content0Heading !== undefined) {
            this.setState({ content0Heading: content0Heading })
        } else if (content0SubHeading !== undefined) {
            this.setState({ content0SubHeading: content0SubHeading })
        } else if (content0Text !== undefined) {
            this.setState({ content0Text: content0Text })
        } else if (content1Heading !== undefined) {
            this.setState({ content1Heading: content1Heading })
        } else if (content1SubHeading !== undefined) {
            this.setState({ content1SubHeading: content1SubHeading })
        } else if (content1Text !== undefined) {
            this.setState({ content1Text: content1Text })
        } else if (content01Heading !== undefined) {
            this.setState({ content01Heading: content01Heading })
        } else if (content01SubHeading !== undefined) {
            this.setState({ content01SubHeading: content01SubHeading })
        } else if (content01Text !== undefined) {
            this.setState({ content01Text: content01Text })
        } else if (content2Heading !== undefined) {
            this.setState({ content2Heading: content2Heading })
        } else if (content2SubHeading !== undefined) {
            this.setState({ content2SubHeading: content2SubHeading })
        } else if (content2Text !== undefined) {
            this.setState({ content2Text: content2Text })
        }

    }

    getDuplicateContent0 = (content02Heading, content02SubHeading, content02Text, content03Heading, content03SubHeading, content03Text ) => {
        if (content02Heading !== undefined) {
            this.setState({ content02Heading: content02Heading })
        } else if (content02SubHeading !== undefined) {
            this.setState({ content02SubHeading: content02SubHeading })
        } else if (content02Text !== undefined) {
            this.setState({ content02Text: content02Text })
        } else if (content03Heading !== undefined) {
            this.setState({ content03Heading: content03Heading })
        } else if (content03SubHeading !== undefined) {
            this.setState({ content03SubHeading: content03SubHeading })
        } else if (content03Text !== undefined) {
            this.setState({ content03Text: content03Text })
        }
    }

    getDuplicateContent1 = (content11Heading, content11SubHeading, content11Text, content12Heading, content12SubHeading, content12Text,  content13Heading, content13SubHeading, content13Text ) => {
        if (content11Heading !== undefined) {
            this.setState({ content11Heading: content11Heading })
        } else if (content11SubHeading !== undefined) {
            this.setState({ content11SubHeading: content11SubHeading })
        } else if (content11Text !== undefined) {
            this.setState({ content11Text: content11Text })
        } else if (content12Heading !== undefined) {
            this.setState({ content12Heading: content12Heading })
        } else if (content12SubHeading !== undefined) {
            this.setState({ content12SubHeading: content12SubHeading })
        } else if (content12Text !== undefined) {
            this.setState({ content12Text: content12Text })
        } else if (content13Heading !== undefined) {
            this.setState({ content13Heading: content13Heading })
        } else if (content13SubHeading !== undefined) {
            this.setState({ content13SubHeading: content13SubHeading })
        } else if (content13Text !== undefined) {
            this.setState({ content13Text: content13Text })
        }
    }

    getGalleryInfo = (galleryHeading, gallerySubtext, galleryImage1Title, galleryImage1Desc, galleryImage2Title, galleryImage2Desc, galleryImage3Title, galleryImage3Desc) => {
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
        }
    }

    getFeaturesInfo = (featureHeading, featureSubHeading, featuresSubHeadingText, featureH31, featureSubtext1, featureH32, featureSubtext2, featureH33, featureSubtext3, featureH34, featureSubtext4, featureH35, featureSubtext5, featureH36, featureSubtext6, featureButton) => {
        if (featureHeading !== undefined) {
            this.setState({ featureHeading: featureHeading })
        } else if (featureSubHeading !== undefined) {
            this.setState({ featureSubHeading: featureSubHeading })
        } else if (featuresSubHeadingText !== undefined) {
            this.setState({ featuresSubHeadingText: featuresSubHeadingText })
        } else if (featureH31 !== undefined) {
            this.setState({ featureH31: featureH31 })
        } else if (featureSubtext1 !== undefined) {
            this.setState({ featureSubtext1: featureSubtext1 })
        } else if (featureH32 !== undefined) {
            this.setState({ featureH32: featureH32 })
        } else if (featureSubtext2 !== undefined) {
            this.setState({ featureSubtext2: featureSubtext2 })
        } else if (featureH33 !== undefined) {
            this.setState({ featureH33: featureH33 })
        } else if (featureSubtext3 !== undefined) {
            this.setState({ featureSubtext3: featureSubtext3 })
        } else if (featureH34 !== undefined) {
            this.setState({ featureH34: featureH34 })
        } else if (featureSubtext4 !== undefined) {
            this.setState({ featureSubtext4: featureSubtext4 })
        } else if (featureH35 !== undefined) {
            this.setState({ featureH35: featureH35 })
        } else if (featureH35 !== undefined) {
            this.setState({ featureH35: featureH35 })
        } else if (featureSubtext5 !== undefined) {
            this.setState({ featureSubtext5: featureSubtext5 })
        } else if (featureH36 !== undefined) {
            this.setState({ featureH36: featureH36 })
        } else if (featureH36 !== undefined) {
            this.setState({ featureH36: featureH36 })
        } else if (featureSubtext6 !== undefined) {
            this.setState({ featureSubtext6: featureSubtext6 })
        } else if (featureButton !== undefined) {
            this.setState({ featureButton: featureButton })
        }
    }
    getTeamInfo = (teamHeading, teamSubheading, teamH31, job1, teamSubtext1, teamH32, job2, teamSubtext2, teamH33, job3, teamSubtext3, teamH34, job4, teamSubtext4, teamH35, job5, teamSubtext5, teamH36, job6, teamSubtext6) => {
        if (teamHeading !== undefined) {
            this.setState({ teamHeading: teamHeading })
        } else if (teamSubheading !== undefined) {
            this.setState({ teamSubheading: teamSubheading })
        } else if (teamH31 !== undefined) {
            this.setState({ teamH31: teamH31 })
        } else if (job1 !== undefined) {
            this.setState({ job1: job1 })
        } else if (teamSubtext1 !== undefined) {
            this.setState({ teamSubtext1: teamSubtext1 })
        } else if (teamH32 !== undefined) {
            this.setState({ teamH32: teamH32 })
        } else if (teamSubtext2 !== undefined) {
            this.setState({ teamSubtext2: teamSubtext2 })
        } else if (teamH33 !== undefined) {
            this.setState({ teamH33: teamH33 })
        } else if (teamSubtext3 !== undefined) {
            this.setState({ teamSubtext3: teamSubtext3 })
        } else if (teamH34 !== undefined) {
            this.setState({ teamH34: teamH34 })
        } else if (teamSubtext4 !== undefined) {
            this.setState({ teamSubtext4: teamSubtext4 })
        } else if (teamH35 !== undefined) {
            this.setState({ teamH35: teamH35 })
        } else if (teamSubtext5 !== undefined) {
            this.setState({ teamSubtext5: teamSubtext5 })
        } else if (teamH36 !== undefined) {
            this.setState({ teamH36: teamH36 })
        } else if (teamSubtext6 !== undefined) {
            this.setState({ teamSubtext6: teamSubtext6 })
        } else if (job2 !== undefined) {
            this.setState({ job2: job2 })
        } else if (job3 !== undefined) {
            this.setState({ job3: job3 })
        } else if (job4 !== undefined) {
            this.setState({ job4: job4 })
        } else if (job5 !== undefined) {
            this.setState({ job5: job5 })
        } else if (job6 !== undefined) {
            this.setState({ job6: job6 })
        }
    }

    getTestimonialInfo = (testimonialHeading, testimonialSubHeading, name1, name1Desc, quote1, name2, name2Desc, quote2, name3, name3Desc, quote3) => {
        if (testimonialHeading !== undefined) {
            this.setState({ testimonialHeading: testimonialHeading })
        } else if (testimonialSubHeading !== undefined) {
            this.setState({ testimonialSubHeading: testimonialSubHeading })
        } else if (name1 !== undefined) {
            this.setState({ name1: name1 })
        } else if (name1Desc !== undefined) {
            this.setState({ name1Desc: name1Desc })
        } else if (quote1 !== undefined) {
            this.setState({ quote1: quote1 })
        } else if (name2 !== undefined) {
            this.setState({ name2: name2 })
        } else if (name2Desc !== undefined) {
            this.setState({ name2Desc: name2Desc })
        } else if (quote2 !== undefined) {
            this.setState({ quote2: quote2 })
        } else if (name3 !== undefined) {
            this.setState({ name3: name3 })
        } else if (name3Desc !== undefined) {
            this.setState({ name3Desc: name3Desc })
        } else if (quote3 !== undefined) {
            this.setState({ quote3: quote3 })
        }
    }

    getContactInfo = (contactHeading, contactSubText, address, phoneNumber) => {
        if (contactHeading !== undefined) {
            this.setState({ contactHeading: contactHeading })
        } else if (contactSubText !== undefined) {
            this.setState({ contactSubText: contactSubText })
        } else if (address !== undefined) {
            this.setState({ address: address })
        } else if (phoneNumber !== undefined) {
            this.setState({ phoneNumber: phoneNumber })
        }
    }

    getFooterInfo = (footerSubText) => {
        if (footerSubText !== undefined) {
            this.setState({ footerSubText: footerSubText })
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
        var introBackgroundImage = this.state.introBackgroundImage;

        // Calling Content Block Info
        var content0Heading = this.state.content0Heading;
        var content0SubHeading = this.state.content0SubHeading
        var content0Text = this.state.content0Text;
        var content0Image = this.state.content0Image

        var content01Heading = this.state.content01Heading;
        var content01SubHeading = this.state.content01SubHeading
        var content01Text = this.state.content01Text;
        var content01Image = this.state.content01Image

        var content02Heading = this.state.content02Heading;
        var content02SubHeading = this.state.content02SubHeading
        var content02Text = this.state.content02Text;
        var content02Image = this.state.content02Image

        var content03Heading = this.state.content03Heading;
        var content03SubHeading = this.state.content03SubHeading
        var content03Text = this.state.content03Text;
        var content03Image = this.state.content03Image

        var content1Heading = this.state.content1Heading;
        var content1SubHeading = this.state.content1SubHeading
        var content1Text = this.state.content1Text;
        var content1Image = this.state.content1Image;

        var content11Heading = this.state.content11Heading;
        var content11SubHeading = this.state.content11SubHeading
        var content11Text = this.state.content11Text;
        var content11Image = this.state.content11Image;

        var content12Heading = this.state.content12Heading;
        var content12SubHeading = this.state.content12SubHeading
        var content12Text = this.state.content12Text;
        var content12Image = this.state.content12Image;

        var content13Heading = this.state.content13Heading;
        var content13SubHeading = this.state.content13SubHeading
        var content13Text = this.state.content13Text;
        var content13Image = this.state.content13Image;

        var content2Heading = this.state.content2Heading;
        var content2SubHeading = this.state.content2SubHeading
        var content2Text = this.state.content2Text;

        // Calling Gallery Block Info
        var galleryHeading = this.state.galleryHeading;
        var gallerySubtext = this.state.gallerySubtext;
        var galleryImage1Title = this.state.galleryImage1Title;
        var galleryImage2Title = this.state.galleryImage2Title;
        var galleryImage3Title = this.state.galleryImage3Title;
        var galleryImage1Desc = this.state.galleryImage1Desc;
        var galleryImage2Desc = this.state.galleryImage2Desc;
        var galleryImage3Desc = this.state.galleryImage3Desc;
        var galleryImage1 = this.state.galleryImage1;
        var galleryImage2 = this.state.galleryImage2;
        var galleryImage3 = this.state.galleryImage3;
        var galleryImage4 = this.state.galleryImage4;
        var galleryImage5 = this.state.galleryImage5;
        var galleryImage6 = this.state.galleryImage6;
        var galleryImage7 = this.state.galleryImage7;
        var galleryImage8 = this.state.galleryImage8;
        var galleryImage9 = this.state.galleryImage9;
        var galleryImage10 = this.state.galleryImage10;

        // Calling Features Block Info
        var featureHeading = this.state.featureHeading
        var featureSubHeading = this.state.featureSubHeading
        var featuresSubHeadingText = this.state.featuresSubHeadingText
        var featureH31 = this.state.featureH31
        var featureSubtext1 = this.state.featureSubtext1
        var featureH32 = this.state.featureH32
        var featureSubtext2 = this.state.featureSubtext2
        var featureH33 = this.state.featureH33
        var featureSubtext3 = this.state.featureSubtext3
        var featureH34 = this.state.featureH34
        var featureSubtext4 = this.state.featureSubtext4
        var featureH35 = this.state.featureH35
        var featureSubtext5 = this.state.featureSubtext5
        var featureH36 = this.state.featureH36
        var featureSubtext6 = this.state.featureSubtext6
        var featureButton = this.state.featureButton

        // Calling Team Block Info 
        var teamHeading = this.state.teamHeading
        var teamSubheading = this.state.teamSubheading
        var teamH31 = this.state.teamH31
        var job1 = this.state.job1
        var teamSubtext1 = this.state.teamSubtext1
        var teamH32 = this.state.teamH32
        var job2 = this.state.job2
        var teamSubtext2 = this.state.teamSubtext2
        var teamH33 = this.state.teamH33
        var job3 = this.state.job3
        var teamSubtext3 = this.state.teamSubtext3
        var teamH34 = this.state.teamH34
        var job4 = this.state.job4
        var teamSubtext4 = this.state.teamSubtext4
        var teamH35 = this.state.teamH35
        var job5 = this.state.job5
        var teamSubtext5 = this.state.teamSubtext5
        var teamH36 = this.state.teamH36
        var job6 = this.state.job6
        var teamSubtext6 = this.state.teamSubtext6
        var teamImage1 = this.state.teamImage1
        var teamImage2 = this.state.teamImage2
        var teamImage3 = this.state.teamImage3
        var teamImage4 = this.state.teamImage4
        var teamImage5 = this.state.teamImage5
        var teamImage6 = this.state.teamImage6

        // Calling Testimonial Block Info 
        var testimonialHeading = this.state.testimonialHeading;
        var testimonialSubHeading = this.state.testimonialSubHeading;
        var name1 = this.state.name1;
        var name1Desc = this.state.name1Desc;
        var quote1 = this.state.quote1;
        var name2 = this.state.name2;
        var name2Desc = this.state.name2Desc;
        var quote2 = this.state.quote2;
        var name3 = this.state.name3;
        var name3Desc = this.state.name3Desc;
        var quote3 = this.state.quote3;
        // Calling Contact Block Info
        var contactHeading = this.state.contactHeading;
        var contactSubText = this.state.contactSubText;
        var address = this.state.address;
        var email = this.state.email;
        // Calling Footer Block Info
        var footerSubText = this.state.footerSubText;

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
                                            <Header0
                                                getImage={this.getImage}
                                                getHeaderInfo={this.getHeaderInfo}
                                                headerLink1={p.info.headerLink1}
                                                headerLink2={p.info.headerLink2}
                                                headerLink3={p.info.headerLink3}
                                                headerLink4={p.info.headerLink4}
                                                headerLink5={p.info.headerLink5}
                                                headerLink6={p.info.headerLink6}
                                                companyLogo={p.info.companyLogo} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Header-1") {
                                p.info = { headerLink1, headerLink2, headerLink3, headerLink4, headerLink5, headerLink6, headerButton, companyLogo, phoneNumber }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header1
                                                getImage={this.getImage}
                                                getHeaderInfo={this.getHeaderInfo}
                                                headerLink1={p.info.headerLink1}
                                                headerLink2={p.info.headerLink2}
                                                headerLink3={p.info.headerLink3}
                                                headerLink4={p.info.headerLink4}
                                                headerLink5={p.info.headerLink5}
                                                headerLink6={p.info.headerLink6}
                                                headerButton={p.info.headerButton}
                                                companyLogo={p.info.companyLogo}
                                                phoneNumber={p.info.phoneNumber} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Header-2") {
                                p.info = { headerLink1, headerLink2, headerLink3, headerLink4, headerLink5, headerLink6, companyLogo, phoneNumber }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Header2
                                                getImage={this.getImage}
                                                getHeaderInfo={this.getHeaderInfo}
                                                headerLink1={p.info.headerLink1}
                                                headerLink2={p.info.headerLink2}
                                                headerLink3={p.info.headerLink3}
                                                headerLink4={p.info.headerLink4}
                                                headerLink5={p.info.headerLink5}
                                                headerLink6={p.info.headerLink6}
                                                companyLogo={p.info.companyLogo}
                                                phoneNumber={p.info.phoneNumber} />
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
                                            <Intro0
                                                getIntroInfo={this.getIntroInfo}
                                                introHeading={p.info.introHeading}
                                                introSubHeading={p.info.introSubHeading}
                                                introSubtext={p.info.introSubtext}
                                                introButton1={p.info.introButton1} />
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
                                            <Intro1
                                                getIntroInfo={this.getIntroInfo}
                                                introHeading={p.info.introHeading}
                                                introSubHeading={p.info.introSubHeading}
                                                introSubtext={p.info.introSubtext} />
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
                                            <Intro2
                                                getImage={this.getImage}
                                                getIntroInfo={this.getIntroInfo}
                                                introHeading={p.info.introHeading}
                                                introSubHeading={p.info.introSubHeading}
                                                introSubtext={p.info.introSubtext}
                                                introButton1={p.info.introButton1}
                                                introButton2={p.info.introButton2}
                                                introImage={p.info.introImage} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Intro-3") {
                                p.info = { introHeading, introSubHeading, introBackgroundImage }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="draggable-item">
                                            <Intro3
                                                getImage={this.getImage}
                                                getIntroInfo={this.getIntroInfo}
                                                introBackgroundImage={introBackgroundImage}
                                                introHeading={p.info.introHeading}
                                                introSubHeading={p.info.introSubHeading} />
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
                                            <Intro4
                                                getIntroInfo={this.getIntroInfo}
                                                introHeading={p.info.introHeading}
                                                introSubtext={p.info.introSubtext}
                                                introSubHeading={p.info.introSubHeading} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-0") {
                                // console.log("content-0");
                                // var contentCount = this.getOccurance(this.props.generateItems, "Content-0")
                                // var contentTest = [...this.props.generateItems]

                                // if (contentCount > 1) {
                                //     console.log("work");
                                //     p.data = "Content-01"
                                //     p.info = { content01Heading, content01SubHeading, content01Text, content01Image }
                                //     console.log(this.props.generateItems);
                                //     return
                                // } else {
                                    p.info = { content0Heading, content0SubHeading, content0Text, content0Image }
                                    return (
                                        <Draggable key={i}>
                                            <div id={p.data} className="component draggable-item" data-element={p.data}>
                                                <Content0
                                                    getImage={this.getImage}
                                                    getContentInfo={this.getContentInfo}
                                                    content0Heading={p.info.content0Heading}
                                                    content0SubHeading={p.info.content0SubHeading}
                                                    content0Text={p.info.content0Text}
                                                    content0Image={p.info.content0Image} />
                                                <div className="button-wrap">
                                                    <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                    <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                                </div>
                                            </div>
                                        </Draggable>
                                    )
                                // }
                            } else if (p.data === "Content-01") {
                                // console.log("content-01");
                                // var contentCount = this.getOccurance(this.props.generateItems, "Content-01")
                                // var contentTest = [...this.props.generateItems]
                                // if (contentCount > 1) {
                                //     console.log("work");
                                //     p.data = "Content-02"
                                //     p.info = { content02Heading, content02SubHeading, content02Text, content02Image }
                                //     console.log(this.props.generateItems);
                                //     return
                                // } else {

                                    p.info = { content01Heading, content01SubHeading, content01Text, content01Image }
                                    return (
                                        <Draggable key={i}>
                                            <div id={p.data} className="component draggable-item" data-element={p.data}>
                                                <Content01
                                                    getImage={this.getImage}
                                                    getContentInfo={this.getContentInfo}
                                                    content01Heading={p.info.content01Heading}
                                                    content01SubHeading={p.info.content01SubHeading}
                                                    content01Text={p.info.content01Text}
                                                    content01Image={p.info.content01Image} />
                                                <div className="button-wrap">
                                                    <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                    <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                                </div>
                                            </div>
                                        </Draggable>
                                    )
                                // }
                            } else if (p.data === "Content-02") {
                                // var contentCount = this.getOccurance(this.props.generateItems, "Content-02")

                                    p.info = { content02Heading, content02SubHeading, content02Text, content02Image }
                                    return (
                                        <Draggable key={i}>
                                            <div id={p.data} className="component draggable-item">
                                                <Content02
                                                    getImage={this.getImage}
                                                    getContentInfo={this.getDuplicateContent0}
                                                    content02Heading={p.info.content02Heading}
                                                    content02SubHeading={p.info.content02SubHeading}
                                                    content02Text={p.info.content02Text}
                                                    content02Image={p.info.content02Image} />
                                                <div className="button-wrap">
                                                    <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                    <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                                </div>
                                            </div>
                                        </Draggable>
                                    )
                                
                            } else if (p.data === "Content-03") {
                                p.info = { content03Heading, content03SubHeading, content03Text, content03Image }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Content03
                                                getImage={this.getImage}
                                                getContentInfo={this.getDuplicateContent0}
                                                content03Heading={p.info.content03Heading}
                                                content03SubHeading={p.info.content03SubHeading}
                                                content03Text={p.info.content03Text}
                                                content03Image={p.info.content03Image} />
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
                                            <Content1
                                                getImage={this.getImage}
                                                getContentInfo={this.getContentInfo}
                                                content1Heading={p.info.content1Heading}
                                                content1SubHeading={p.info.content1SubHeading}
                                                content1Text={p.info.content1Text}
                                                content1Image={p.info.content1Image} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-11") {
                                p.info = { content11Heading, content11SubHeading, content11Text, content11Image }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Content11
                                                getImage={this.getImage}
                                                getContentInfo={this.getDuplicateContent1}
                                                content11Heading={p.info.content11Heading}
                                                content11SubHeading={p.info.content11SubHeading}
                                                content11Text={p.info.content11Text}
                                                content11Image={p.info.content11Image} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-12") {
                                p.info = { content12Heading, content12SubHeading, content12Text, content12Image }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Content12
                                                getImage={this.getImage}
                                                getContentInfo={this.getDuplicateContent1}
                                                content12Heading={p.info.content12Heading}
                                                content12SubHeading={p.info.content12SubHeading}
                                                content12Text={p.info.content12Text}
                                                content12Image={p.info.content12Image} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Content-13") {
                                p.info = { content13Heading, content13SubHeading, content13Text, content13Image }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Content13
                                                getImage={this.getImage}
                                                getContentInfo={this.getDuplicateContent1}
                                                content13Heading={p.info.content13Heading}
                                                content13SubHeading={p.info.content13SubHeading}
                                                content13Text={p.info.content13Text}
                                                content13Image={p.info.content13Image} />
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
                                            <Content2
                                                getContentInfo={this.getContentInfo}
                                                content2Heading={p.info.content2Heading}
                                                content2SubHeading={p.info.content2SubHeading}
                                                content2Text={p.info.content2Text} />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Gallery-0") {
                                p.info = { galleryHeading, gallerySubtext, galleryImage1Title, galleryImage1Desc, galleryImage2Title, galleryImage2Desc, galleryImage3Title, galleryImage3Desc, galleryImage1, galleryImage2, galleryImage3 }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Gallery0
                                                getImage={this.getImage}
                                                getGalleryInfo={this.getGalleryInfo}
                                                galleryHeading={p.info.galleryHeading}
                                                gallerySubtext={p.info.gallerySubtext}
                                                galleryImage1Title={p.info.galleryImage1Title}
                                                galleryImage1Desc={p.info.galleryImage1Desc}
                                                galleryImage2Title={p.info.galleryImage2Title}
                                                galleryImage2Desc={p.info.galleryImage2Desc}
                                                galleryImage3Title={p.info.galleryImage3Title}
                                                galleryImage3Desc={p.info.galleryImage3Desc}
                                                galleryImage1={p.info.galleryImage1}
                                                galleryImage2={p.info.galleryImage2}
                                                galleryImage3={p.info.galleryImage3}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Gallery-1") {
                                p.info = { galleryHeading, gallerySubtext, galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6 }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Gallery1
                                                getImage={this.getImage}
                                                getGalleryInfo={this.getGalleryInfo}
                                                galleryHeading={p.info.galleryHeading}
                                                gallerySubtext={p.info.gallerySubtext}
                                                galleryImage1={p.info.galleryImage1}
                                                galleryImage2={p.info.galleryImage2}
                                                galleryImage3={p.info.galleryImage3}
                                                galleryImage4={p.info.galleryImage4}
                                                galleryImage5={p.info.galleryImage5}
                                                galleryImage6={p.info.galleryImage6}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Gallery-2") {
                                p.info = { galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6, galleryImage7, galleryImage8, galleryImage9, galleryImage10 }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Gallery2
                                                getImage={this.getImage}
                                                getGalleryInfo={this.getGalleryInfo}
                                                galleryImage1={p.info.galleryImage1}
                                                galleryImage2={p.info.galleryImage2}
                                                galleryImage3={p.info.galleryImage3}
                                                galleryImage4={p.info.galleryImage4}
                                                galleryImage5={p.info.galleryImage5}
                                                galleryImage6={p.info.galleryImage6}
                                                galleryImage7={p.info.galleryImage7}
                                                galleryImage8={p.info.galleryImage8}
                                                galleryImage9={p.info.galleryImage9}
                                                galleryImage10={p.info.galleryImage10}

                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Features-0") {
                                p.info = { featureHeading, featureSubHeading, featuresSubHeadingText, featureH31, featureSubtext1, featureH32, featureSubtext2, featureH33, featureSubtext3, featureH34, featureSubtext4 }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Feature0
                                                getFeaturesInfo={this.getFeaturesInfo}
                                                featureHeading={p.info.featureHeading}
                                                featureSubHeading={p.info.featureSubHeading}
                                                featuresSubHeadingText={p.info.featuresSubHeadingText}
                                                featureH31={p.info.featureH31}
                                                featureSubtext1={p.info.featureSubtext1}
                                                featureH32={p.info.featureH32}
                                                featureSubtext2={p.info.featureSubtext2}
                                                featureH33={p.info.featureH33}
                                                featureSubtext3={p.info.featureSubtext3}
                                                featureH34={p.info.featureH34}
                                                featureSubtext4={p.info.featureSubtext4}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Features-1") {
                                p.info = { featureHeading, featureSubHeading, featuresSubHeadingText, featureH31, featureSubtext1, featureH32, featureSubtext2, featureH33, featureSubtext3 }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Feature1
                                                getFeaturesInfo={this.getFeaturesInfo}
                                                featureHeading={p.info.featureHeading}
                                                featuresSubHeadingText={p.info.featuresSubHeadingText}
                                                featureH31={p.info.featureH31}
                                                featureSubtext1={p.info.featureSubtext1}
                                                featureH32={p.info.featureH32}
                                                featureSubtext2={p.info.featureSubtext2}
                                                featureH33={p.info.featureH33}
                                                featureSubtext3={p.info.featureSubtext3}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Features-2") {
                                p.info = { featureHeading, featureSubHeading, featuresSubHeadingText, featureH31, featureSubtext1, featureH32, featureSubtext2, featureH33, featureSubtext3, featureH34, featureSubtext4, featureH35, featureSubtext5, featureH36, featureSubtext6, featureButton }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Feature2
                                                getFeaturesInfo={this.getFeaturesInfo}
                                                featureHeading={p.info.featureHeading}
                                                featureSubHeading={p.info.featureSubHeading}
                                                featuresSubHeadingText={p.info.featuresSubHeadingText}
                                                featureH31={p.info.featureH31}
                                                featureSubtext1={p.info.featureSubtext1}
                                                featureH32={p.info.featureH32}
                                                featureSubtext2={p.info.featureSubtext2}
                                                featureH33={p.info.featureH33}
                                                featureSubtext3={p.info.featureSubtext3}
                                                featureH34={p.info.featureH34}
                                                featureSubtext4={p.info.featureSubtext4}
                                                featureH35={p.info.featureH35}
                                                featureSubtext5={p.info.featureSubtext5}
                                                featureH36={p.info.featureH36}
                                                featureSubtext6={p.info.featureSubtext6}
                                                featureButton={p.info.featureButton}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Features-3") {
                                p.info = { featureHeading, featuresSubHeadingText, featureH31, featureSubtext1, featureH32, featureSubtext2, featureH33, featureSubtext3, featureH34, featureSubtext4, featureButton }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Feature3
                                                getFeaturesInfo={this.getFeaturesInfo}
                                                featureHeading={p.info.featureHeading}
                                                featuresSubHeadingText={p.info.featuresSubHeadingText}
                                                featureH31={p.info.featureH31}
                                                featureSubtext1={p.info.featureSubtext1}
                                                featureH32={p.info.featureH32}
                                                featureSubtext2={p.info.featureSubtext2}
                                                featureH33={p.info.featureH33}
                                                featureSubtext3={p.info.featureSubtext3}
                                                featureH34={p.info.featureH34}
                                                featureSubtext4={p.info.featureSubtext4}
                                                featureButton={p.info.featureButton}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Team-0") {
                                p.info = { teamHeading, teamSubheading, teamH31, job1, teamSubtext1, teamH32, job2, teamSubtext2, teamH33, job3, teamSubtext3, teamImage1, teamImage2, teamImage3 }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Team0
                                                getImage={this.getImage}
                                                getTeamInfo={this.getTeamInfo}
                                                teamHeading={p.info.teamHeading}
                                                teamSubheading={p.info.teamSubheading}
                                                teamH31={p.info.teamH31}
                                                job1={p.info.job1}
                                                teamSubtext1={p.info.teamSubtext1}
                                                teamH32={p.info.teamH32}
                                                job2={p.info.job2}
                                                teamSubtext2={p.info.teamSubtext2}
                                                teamH33={p.info.teamH33}
                                                job3={p.info.job3}
                                                teamSubtext3={p.info.teamSubtext3}
                                                teamImage1={p.info.teamImage1}
                                                teamImage2={p.info.teamImage2}
                                                teamImage3={p.info.teamImage3}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Team-1") {
                                p.info = { teamH31, job1, teamSubtext1, teamH32, job2, teamSubtext2, teamH33, job3, teamSubtext3, teamH34, job4, teamSubtext4, teamH35, job5, teamSubtext5, teamH36, job6, teamSubtext6, teamImage1, teamImage2, teamImage3, teamImage4, teamImage5, teamImage6 }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Team1
                                                getImage={this.getImage}
                                                getTeamInfo={this.getTeamInfo}
                                                teamH31={p.info.teamH31}
                                                job1={p.info.job1}
                                                teamSubtext1={p.info.teamSubtext1}
                                                teamH32={p.info.teamH32}
                                                job2={p.info.job2}
                                                teamSubtext2={p.info.teamSubtext2}
                                                teamH33={p.info.teamH33}
                                                job3={p.info.job3}
                                                teamSubtext3={p.info.teamSubtext3}
                                                teamH34={p.info.teamH34}
                                                job4={p.info.job4}
                                                teamSubtext4={p.info.teamSubtext4}
                                                teamH35={p.info.teamH35}
                                                job5={p.info.job5}
                                                teamSubtext5={p.info.teamSubtext5}
                                                teamH36={p.info.teamH36}
                                                job6={p.info.job6}
                                                teamSubtext6={p.info.teamSubtext6}
                                                teamImage1={p.info.teamImage1}
                                                teamImage2={p.info.teamImage2}
                                                teamImage3={p.info.teamImage3}
                                                teamImage4={p.info.teamImage4}
                                                teamImage5={p.info.teamImage5}
                                                teamImage6={p.info.teamImage6}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Team-2") {
                                p.info = { teamH31, job1, teamSubtext1, teamH32, job2, teamSubtext2, teamH33, job3, teamSubtext3, teamH34, job4, teamSubtext4, teamH35, job5, teamSubtext5, teamH36, job6, teamSubtext6, teamImage1, teamImage2, teamImage3, teamImage4, teamImage5, teamImage6 }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Team2
                                                getImage={this.getImage}
                                                getTeamInfo={this.getTeamInfo}
                                                teamH31={p.info.teamH31}
                                                job1={p.info.job1}
                                                teamSubtext1={p.info.teamSubtext1}
                                                teamH32={p.info.teamH32}
                                                job2={p.info.job2}
                                                teamSubtext2={p.info.teamSubtext2}
                                                teamH33={p.info.teamH33}
                                                job3={p.info.job3}
                                                teamSubtext3={p.info.teamSubtext3}
                                                teamH34={p.info.teamH34}
                                                job4={p.info.job4}
                                                teamSubtext4={p.info.teamSubtext4}
                                                teamH35={p.info.teamH35}
                                                job5={p.info.job5}
                                                teamSubtext5={p.info.teamSubtext5}
                                                teamH36={p.info.teamH36}
                                                job6={p.info.job6}
                                                teamSubtext6={p.info.teamSubtext6}
                                                teamImage1={p.info.teamImage1}
                                                teamImage2={p.info.teamImage2}
                                                teamImage3={p.info.teamImage3}
                                                teamImage4={p.info.teamImage4}
                                                teamImage5={p.info.teamImage5}
                                                teamImage6={p.info.teamImage6}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Team-3") {
                                p.info = { teamHeading, teamSubheading, teamH31, job1, teamSubtext1, teamH32, job2, teamSubtext2, teamH33, job3, teamSubtext3, teamH34, job4, teamSubtext4, teamH35, job5, teamSubtext5, teamH36, job6, teamSubtext6, teamImage1, teamImage2, teamImage3, teamImage4, teamImage5, teamImage6 }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Team3
                                                getImage={this.getImage}
                                                getTeamInfo={this.getTeamInfo}
                                                teamHeading={p.info.teamHeading}
                                                teamSubheading={p.info.teamSubheading}
                                                teamH31={p.info.teamH31}
                                                job1={p.info.job1}
                                                teamSubtext1={p.info.teamSubtext1}
                                                teamH32={p.info.teamH32}
                                                job2={p.info.job2}
                                                teamSubtext2={p.info.teamSubtext2}
                                                teamH33={p.info.teamH33}
                                                job3={p.info.job3}
                                                teamSubtext3={p.info.teamSubtext3}
                                                teamH34={p.info.teamH34}
                                                job4={p.info.job4}
                                                teamSubtext4={p.info.teamSubtext4}
                                                teamH35={p.info.teamH35}
                                                job5={p.info.job5}
                                                teamSubtext5={p.info.teamSubtext5}
                                                teamH36={p.info.teamH36}
                                                job6={p.info.job6}
                                                teamSubtext6={p.info.teamSubtext6}
                                                teamImage1={p.info.teamImage1}
                                                teamImage2={p.info.teamImage2}
                                                teamImage3={p.info.teamImage3}
                                                teamImage4={p.info.teamImage4}
                                                teamImage5={p.info.teamImage5}
                                                teamImage6={p.info.teamImage6}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Testimonial-0") {
                                p.info = { testimonialHeading, testimonialSubHeading, name1, name1Desc, quote1, name2, name2Desc, quote2, name3, name3Desc, quote3 }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Testimonial0
                                                getTestimonialInfo={this.getTestimonialInfo}
                                                testimonialHeading={p.info.testimonialHeading}
                                                testimonialSubHeading={p.info.testimonialSubHeading}
                                                name1={p.info.name1}
                                                name1Desc={p.info.name1Desc}
                                                quote1={p.info.quote1}
                                                name2={p.info.name2}
                                                name2Desc={p.info.name2Desc}
                                                quote2={p.info.quote2}
                                                name3={p.info.name3}
                                                name3Desc={p.info.name3Desc}
                                                quote3={p.info.quote3}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Testimonial-1") {
                                p.info = { testimonialHeading, testimonialSubHeading, name1, name1Desc, quote1, name2, name2Desc, quote2, name3, name3Desc, quote3 }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Testimonial1
                                                getTestimonialInfo={this.getTestimonialInfo}
                                                testimonialHeading={p.info.testimonialHeading}
                                                testimonialSubHeading={p.info.testimonialSubHeading}
                                                name1={p.info.name1}
                                                name1Desc={p.info.name1Desc}
                                                quote1={p.info.quote1}
                                                name2={p.info.name2}
                                                name2Desc={p.info.name2Desc}
                                                quote2={p.info.quote2}
                                                name3={p.info.name3}
                                                name3Desc={p.info.name3Desc}
                                                quote3={p.info.quote3}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Contact-0") {
                                p.info = { contactHeading, contactSubText }

                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Contact0
                                                getContactInfo={this.getContactInfo}
                                                contactHeading={p.info.contactHeading}
                                                contactSubText={p.info.contactSubText}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Contact-1") {
                                p.info = { contactHeading, contactSubText }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Contact1
                                                getContactInfo={this.getContactInfo}
                                                contactHeading={p.info.contactHeading}
                                                contactSubText={p.info.contactSubText}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Contact-2") {
                                p.info = { contactHeading, contactSubText, address, phoneNumber }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Contact2
                                                getContactInfo={this.getContactInfo}
                                                contactHeading={p.info.contactHeading}
                                                contactSubText={p.info.contactSubText}
                                                address={p.info.address}
                                                email={p.info.email}
                                                phoneNumber={p.info.phoneNumber}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Contact-3") {
                                p.info = { contactHeading, contactSubText }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Contact3
                                                getContactInfo={this.getContactInfo}
                                                contactHeading={p.info.contactHeading}
                                                contactSubText={p.info.contactSubText}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Footer-0") {
                                p.info = { footerSubText, companyLogo }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Footer0
                                                getFooterInfo={this.getFooterInfo}
                                                footerSubText={p.info.footerSubText}
                                                companyLogo={p.info.companyLogo}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Footer-1") {
                                p.info = { headerLink1, headerLink2, headerLink3, headerLink4, headerLink5, headerLink6, footerSubText, companyLogo }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Footer1
                                                getFooterInfo={this.getFooterInfo}
                                                footerSubText={p.info.footerSubText}
                                                headerLink1={p.info.headerLink1}
                                                headerLink2={p.info.headerLink2}
                                                headerLink3={p.info.headerLink3}
                                                headerLink4={p.info.headerLink4}
                                                headerLink5={p.info.headerLink5}
                                                headerLink6={p.info.headerLink6}
                                                companyLogo={p.info.companyLogo}
                                            />
                                            <div className="button-wrap">
                                                <DuplicateButton duplicateElement={this.props.duplicateElement} />
                                                <XButton removeElement={this.props.removeElement} handleXButton={this.handleXButton} />
                                            </div>
                                        </div>
                                    </Draggable>
                                )
                            } else if (p.data === "Footer-2") {
                                p.info = { headerLink1, headerLink2, headerLink3, headerLink4, headerLink5, headerLink6, companyLogo }
                                return (
                                    <Draggable key={i}>
                                        <div id={p.data} className="component draggable-item">
                                            <Footer2
                                                headerLink1={p.info.headerLink1}
                                                headerLink2={p.info.headerLink2}
                                                headerLink3={p.info.headerLink3}
                                                headerLink4={p.info.headerLink4}
                                                headerLink5={p.info.headerLink5}
                                                headerLink6={p.info.headerLink6}
                                                companyLogo={p.info.companyLogo}
                                            />
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


export default Container14;

