// src/lib/api/axiosBase.js

import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/",
  timeout: 25000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const apiJson = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/",
  timeout: 25000,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const apiJsonAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/",
  timeout: 25000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Dynamically inject token into request headers
const addAuthTokenInterceptor = (instance) => {
  instance.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null;
      if (auth?.token) {
        config.headers.Authorization = `Bearer ${auth.token}`;
      }
    }
    return config;
  });
};

addAuthTokenInterceptor(apiAuth);
addAuthTokenInterceptor(apiJsonAuth);

export { apiAuth, apiJsonAuth };
