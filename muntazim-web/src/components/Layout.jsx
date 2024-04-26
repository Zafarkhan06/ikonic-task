import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { isSession } from "../services/authService";
import { logout } from "../features/appSlice";

import { getToken } from "../helpers/getToken";

import Navbar from "./Navbar";

const Layout = ({ colorTheme, setTheme, children }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        checkUser();
    }, [location]);

    const checkUser = async () => {
        if (!getToken()) {
            dispatch(logout());
        } else {
            const session = await isSession();
            !session && dispatch(logout());
        }
    }

    return (
        <div
            className="relative dark:bg-slate-950 dark:text-white min-h-screen transition ease-in-out duration-150">
            <div>
                <Navbar colorTheme={colorTheme} setTheme={setTheme} />
                <div
                    className=" bg-white dark:bg-slate-900 p-2 min-h-[80vh]">
                    {children}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
