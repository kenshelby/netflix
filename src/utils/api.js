import axios from "axios";

const backendAPI = axios.create({
    baseURL: "http://localhost:3000/api/",
    headers: {
        'Content-Type': 'application/json'
    }
}) //withCredential:true

export default backendAPI;