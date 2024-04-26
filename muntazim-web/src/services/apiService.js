import React from "react";
import axios from "axios";
import { getToken } from "../helpers/getToken";
import appSlice from "../features/appSlice";


const axiosInstance=axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers:{
        "Authorization":`${localStorage.getItem('token') ? localStorage.getItem('token') :''}`
    }
})

export const Login=async (payload)=>{
        const data = await axiosInstance.post("/api/login", payload);
        return data;
}

export const Register=async (payload)=>{
    const data = await axiosInstance.post("/api/register", payload);
    return data;
}

export const VerifyEmail=async (payload)=>{
    const data = await axiosInstance.post("/api/verify-email", payload);
    return data;
}

export const ServiceAvailabilityApi= async (payload)=>{
    const data = await axiosInstance.post("/api/item-price", payload);
    return data;
}
