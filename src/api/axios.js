import axios from "axios";

export const API = axios.create({
    baseURL: "https://umc.hsuumc.site/",
    //baseURL: "http://localhost:8080/",
    //baseURL: "http://3.37.128.0/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
