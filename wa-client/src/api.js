import axios from "axios";
const headers = {
    "Content-Type": "application/json"
};
const burl = "http://localhost:8080";

export default {
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
    googleSign: function(tokenId) {
        return axios.post(
            `${burl}/user/google`,
            {
                tokenId,
            },
            {
                headers: headers
            }
        );
    },
    signUp: function(email, password) {
        return axios.post(
            `${burl}/user/signUp`,
            {
                email,
                password
            },
            {
                 headers: headers
            });
    },

    isAuth: function() {
        return localStorage.getItem("token") !== null;
    },
    logout: function() {
        localStorage.clear();
    },
};
