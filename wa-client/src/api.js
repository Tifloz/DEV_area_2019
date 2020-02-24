import axios from "axios";
const headers = {
    "Content-Type": "application/json"
};
const burl = "http://localhost:8080";
const user_id = "4rNDRwj7ZYNI8QgazGK2I9cJvo22";

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

    getAreasByUserId: function() {
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
        localStorage.clear();
    },
};
