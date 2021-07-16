import React, { Component } from 'react';
import "./Admin-Drop-Down.css"

import API from '../../utils/API';

class AdminDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allEmails:[]
        }
    }

    
    getAllProjects = () => {
        API.getUsers()
            .then(users => {
                var theUsers = users.data
                // console.log(theUsers);
                this.setState({allEmails:theUsers})
            })
    }

    componentDidMount(){
        this.getAllProjects()
    }

    render() {
        return (
            <>
                <div className="admindropdown text-center">
                    <button  className="btn btn-secondary dropdownBtn" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Client Projects <i className="fas fa-angle-down"></i>
                    </button>
                    <div  className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {this.state.allEmails.map(user => {
                        return (
                            <button key={user.userEmail} data-idenity={user._id} value={user.userEmail} onClick={this.props.handleSelect} className="dropdown-item" type="button">{user.userEmail}</button>
                        )
                    })
                }
                    </div>
                </div>
            </>
        );
    }
}

export default AdminDropDown;