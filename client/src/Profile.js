import React, { Component } from "react";
import API from "./utils/API";



class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {
            user:""
        }
    }

    loadUser() {
        API.getUser()
            .then(user => {
                const theUser = user;
                // console.log("the top x properties", theProperties);
                
                console.log("this is user: ", theUser )
                this.setState({user:theUser})
            })
            .catch(err => console.log(err));
    }

    componentDidMount(){
        this.loadUser()
    }


    render() {
        return (
            <>
                <h1>Welcome {this.state.user}</h1>
            </>
        );
    }
}



export default Profile;
