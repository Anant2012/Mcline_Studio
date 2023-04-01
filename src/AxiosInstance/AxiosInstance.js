import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: "http://ec2-54-215-146-73.us-west-1.compute.amazonaws.com:7000",
});
