import  axios  from "axios";
import { CONSTANTS } from "../Config/constants";

export const Backend = axios.create({
    baseURL: CONSTANTS.BASE_API_URL,
    responseType: "json",
  });
  
  //request interceptor to add the auth token header to requests
  Backend.interceptors.request.use((config) => {
    if (config.url === "/login") {
      return config;
    }
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
  
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  
    return config;
  });
  
  Backend.interceptors.response.use((response) => {
    return response;
}, (error) => { // Anything except 2XX goes to here
    const status = error.response?.status || 500;
    if (status === 401) {
         window.location = window.location.protocol + "//" + window.location.host + "/login"
    } else {
        return Promise.reject(error); // Delegate error to calling side
    }
});