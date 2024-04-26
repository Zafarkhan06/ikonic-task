import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { toast } from 'react-toastify';
import { FaAngleRight } from "react-icons/fa6";

import EditProfileForm from "../components/EditProfileForm";
import ProfilePicture from "../components/ProfilePIcture";

import { setUser } from "../features/appSlice";

import { getToken } from "../helpers/getToken";
import { Link } from "react-router-dom";

const Profile = () => {
    const { user } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const [file, setFile] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        if (file) {
            formData.append("image", file);

            try {
                const res = await axios.post(
                    process.env.REACT_APP_URL + "/api/upload/profile",
                    formData,
                    {
                        "Content-type": "multipart/form-data ",
                        headers: {
                            'Authorization': `Bearer ${getToken()}`
                        }
                    }
                );

                if (res) {
                    toast.success('Profile Uploaded Successfully');
                    dispatch(setUser(res?.data?.data));
                    setFile('');
                }
            } catch (error) {
                toast.error(error?.response?.data?.message)
            }
        }
    };

    return (
        <div className="mx-4">
            <div className="bg-gray-100 flex flex-row items-center p-3 px-4 mx-8 rounded-lg w-auto gap-x-1">
                <Link to="/" className="text-gray-500 text-lg font-light">Home</Link>

                <FaAngleRight color="#6b7280" />

                <span className="text-lg font-medium">Profile</span>
            </div>

            <div className="grid grid-cols-3">
                <ProfilePicture user={user} file={file} setFile={setFile} handleSubmit={handleSubmit} />
                <EditProfileForm user={user} />
            </div>
        </div>
    );
};

export default Profile;
