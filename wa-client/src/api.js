import axios from "axios";
const headers = {
    "Content-Type": "application/json"
};
const burl = "http://localhost:8080";

export default {
    getCurrentUser: function() {
      return axios.get(
        `${burl}/user/getCurrentUser`,
        {
          headers: headers
        }
      )
    },
    signIn: function(email, password) {
        return axios.post(
            `${burl}/user/signIn`,
            {
                email,
                password
            },
            {
                headers: headers
            }
        );
    },
    googleSign: function(tokenId, fName, lName) {
        return axios.post(
            `${burl}/user/google`,
            {
                tokenId,
                fName,
                lName,
            },
            {
                headers: headers
            }
        );
    },
    signUp: function(userInfos) {
        return axios.post(
            `${burl}/user/signUp`,
            {
                email: userInfos.email,
                password: userInfos.password,
                fName: userInfos.fName,
                lName: userInfos.lName,
            },
            {
                 headers: headers
            });
    },
    createArea: function(userId, action, reaction) {
        return axios.post(
            `${burl}/user/${userId}/create-area`,
            {
              action: action,
              reaction: reaction,
            },
            {
              headers: headers
            }
        );
    },
    linkTwitterAccount: function(token, userId) {
      return axios.put(
        `${burl}/user/${userId}/twitter`,
        {
          twitter_token: token,
        },
        {
          headers: headers
        }
      )
    },
    getAreasByUserId: function() {
        const user_id = localStorage.getItem("token");
        return axios.get(
            `${burl}/user/${user_id}/areas`,
            {
                 headers: headers
            });
    },

    getAllServices: function() {
        return axios.get(
            `${burl}/services`,
            {
                 headers: headers
            });
    },
    getAllTasks: function(area_id) {
        return axios.get(
            `${burl}/user/area/${area_id}/event`,
            {
                 headers: headers
            });
    },
    isAuth: function() {
        return localStorage.getItem("token") !== null;
    },
    logout: function() {
      return axios.get(
        `${burl}/user/signOut`,
        {
          headers: headers
        });
    },
};
