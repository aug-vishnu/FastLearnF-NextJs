import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

export const axiosAuth = axios.create({
  baseURL: process.env.API,
});

axiosAuth.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log(error);
    if (error.response.status === 404) {
      // alert("Session ended. Please login.");
      window.localStorage.removeItem("auth");
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
