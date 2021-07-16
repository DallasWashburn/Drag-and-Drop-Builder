import React, { Component, useReducer } from 'react';
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
                console.log(theUsers);
                this.setState({allEmails:theUsers}, () => {
                    console.log(this.state.allEmails);
                    })
            })
    }

    componentDidMount(){
        this.getAllProjects()
    }

    render() {
        return (
            <>
                <div class="admindropdown text-center">
                    <button  class="btn btn-secondary dropdownBtn" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        What project would you like to work on? <i class="fas fa-angle-down"></i>
                    </button>
                    <div  class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {this.state.allEmails.map(user => {
                        return (
                            <button data-idenity={user._id} value={user.userEmail} onClick={this.props.handleSelect} class="dropdown-item" type="button">{user.userEmail}</button>
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