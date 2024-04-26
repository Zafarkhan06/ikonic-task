import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FaAngleDown } from "react-icons/fa6";
import { Menu, MenuItem } from "@mui/material";
import { Avatar, Divider } from "@mui/material";

import QuestionMark from "./QuestionMark";
import { VideoModal } from "./VideoModal";
import Button from "./Button";

import { getGeneralAssetVideo } from "../helpers/api";

import { Logout } from "../services/authService";

const Navbar = () => {
    const dispatch = useDispatch();

    const [videoList, setVideoList] = useState([]);
    const [modalTitle, setModalTitle] = useState('');

    const [isVideoModal, setVideoModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleGeneralVideo = () => {
        setModalTitle('General Tutorial');
        let videoArray = getGeneralAssetVideo()
        setVideoList(videoArray);
        setVideoModal(true);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div className="flex justify-between bg-white px-8 py-4 mb-4 border-b border-gray-200">
            <div className="flex items-center">
                <Link to="/">
                    <div className="flex flex-row items-center">
                        <img src="/assets/logo.png" alt="logo" className="h-10 w-10 object-contain" />
                        <h1 className="text-2xl text-yellow font-semibold">
                            Edge
                        </h1>
                    </div>
                </Link>
            </div>

            <div className="w-64">
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>

                    <input
                        type="search"
                        id="default-search"
                        class="w-full px-2 py-3 ps-10 text-lg font-thin text-gray-500 border border-1 border-gray-200 rounded-lg focus:ring-blue-50 focus:border-blue-50"
                        placeholder="Search"
                        required
                    />
                </div>
            </div>

            {isVideoModal &&
                <VideoModal
                    setVideoModal={setVideoModal}
                    isVideoModal={isVideoModal}
                    videoList={videoList}
                    currentVideo={0}
                    showVideoList={false}
                    title={modalTitle} />}

            <div className="flex items-center gap-x-2">
                <div onClick={() => { handleGeneralVideo() }}>
                    <Button text="Tutorials" styles="text-[#38A3BD] font-semibold !p-2" />
                </div>

                <div
                    class="inline-block w-[1px] h-6 bg-gray-200 opacity-100 dark:opacity-50"></div>

                <div className="z-20">
                    <QuestionMark />
                </div>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem><Link className="w-full font-medium pe-8 my-1" to='/password-reset'>Change Password</Link></MenuItem>

                    <Divider />

                    <MenuItem onClick={() => Logout(dispatch)}><span className="text-red-500 font-semibold text-sm pe-8">Logout</span></MenuItem>
                </Menu>

                <div
                    class="inline-block w-[1px] h-6 bg-gray-200 opacity-100 dark:opacity-50"></div>

                <div className="ml-2 flex items-center gap-3">
                    <Link to='/profile'>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Link>

                    <FaAngleDown size={20} className="bg-gray-200 p-1 rounded cursor-pointer" onClick={handleClick} />
                </div>
            </div>
        </div>
    );
};

export default memo(Navbar);
