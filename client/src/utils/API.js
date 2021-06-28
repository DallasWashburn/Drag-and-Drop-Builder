/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {

  // Gets all users
  getUsers: async function () {
    let response = axios.get("/api/users")
      .catch(err => console.log(err.response));
    return response;
  },
  // Gets the user with the given id
  getUser: async function (id) {
    let response = axios.get("/api/users/" + id)
      .catch(err => console.log("error: ", err.response.data));
    return response;
  },
  // update the users project with the given id
  updateUser: async function (id, items) {
    let response = axios.put("/api/users/" + id, {
      projects: items
    })
      .then(x => console.log("the response from updating the user is", x))
      .catch(err => console.log("error: ", err));
    return response;
  },

  updateProject:  async function (id, index, items) {
    let response = axios.put("/api/users/" + id, {
      projects: items
    })
      .then(x => console.log("the response from updating the user is", x))
      .catch(err => console.log("error: ", err));
    return response;
  },
  // update the user with the given id
  updateUserStatus: async function (id, answer) {
    let response = axios.put("/api/users/" + id, {
      finalized: answer
    })
      .then(x => console.log("the response from updating the user is", x))
      .catch(err => console.log("error: ", err));
    return response;
  },
  // update the users design status with the given id
  updateUserDesignStatus: async function (id, toggleSwitch) {
    let response = axios.put("/api/users/" + id, {
      designFinalized: toggleSwitch
    })
      .then(x => console.log("the response from updating the user is", x))
      .catch(err => console.log("error: ", err));
    return response;
  },

  // Deletes the user with the given id
  deleteUser: async function (id) {
    let response = axios.delete("/api/users/" + id)
      .then(x => console.log("the response from deleting the user is:", x))
      .catch(err => console.log("error: ", err));
    return response;
  },
  // Saves a user to the database
  saveUser: async function (userData) {
    let response = axios.post("/api/users/", userData)
      .then(x => console.log("the response from posting the user is", x))
      .catch(error => {
        if (error.response) {
          console.log("error: ", error.response);
        }
      });
    return response;
  }
};
