import axios from "axios";
import {getToken} from "../helpers/getToken";
import {logout} from "../features/appSlice";
import {toast} from "react-toastify";
import { Token } from "@mui/icons-material";

export const resetPassword       = async (email, dispatch) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_URL}/api/users/find/${email}`);
        return res;
    } catch (error) {
        throw error;
    }
}

export const passwordReset = async (data, dispatch) => {
    try {
        const res = await axios.put(`${process.env.REACT_APP_URL}/api/reset-password`, {

            confirm_password: data.confirm_password,
            new_password: data.new_password,
            token: data.token,
            email: data.email,
        }, {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        });

        if(res?.data?.message) {
            return true;
        }
    } catch (error) {
        throw error;
    }
}

export const Logout = async (dispatch) => {
    try {
        await axios.post(`${process.env.REACT_APP_URL}/api/auth/logout`, {}, {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        });

        localStorage.clear();

        dispatch(logout());
    } catch (error) {
        throw error;
    }
}

export const isSession = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/session`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        });
        return res?.data;
    } catch (error) {
        toast.error('Session has expired');
        return false;
    }
}
