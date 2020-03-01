import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

const headers = {
    'Accept': 'application/json',
    "Content-Type": "application/json"
};
const burl = "http://192.168.43.137:8080";

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
        const user_id = AsyncStorage.getItem("token");
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
        return AsyncStorage.getItem("token") !== null;
    },
    logout: function() {
        AsyncStorage.clear();
    },
};
