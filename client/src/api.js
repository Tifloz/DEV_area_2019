import axios from "axios";
const headers = {
    "Content-Type": "application/json"
};
const burl = "http://localhost:3000";

export default {
    signin: function(email, password) {
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
    signup: function(email, password) {
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
    }
};
