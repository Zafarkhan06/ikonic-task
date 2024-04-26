import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CiImageOn } from "react-icons/ci";

import { generateInitials } from "../helpers/string";

import { getBookmarks } from "../services/bookmarkService";
import { getFavoriteCategories } from "../services/categoryService";

import Spinner from "./Spinner";

const ProfilePicture = ({ user, file, setFile, handleSubmit }) => {
    const dispatch = useDispatch();

    const { isLoading, bookmarks } = useSelector(state => state.app);
    const [myCategories, setMyCategories] = useState([]);

    useEffect(() => {
        getBookmarks(dispatch);

        getFavoriteCategories(dispatch).then(result => setMyCategories(result)).catch(console.error)
    }, [dispatch]);

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="col-span-1 flex flex-col h-[70vh] rounded border mt-8 mx-8 gap-y-2 bg-gray-50">

            <div className="mt-8 flex flex-col items-center">
                {file ? (
                    <img
                        className="rounded-full object-cover w-60 h-60"
                        src={URL.createObjectURL(file)}
                        alt='profile'
                    />
                ) : !user?.avatar ? (
                    <div className="relative">
                        <div
                            className="relative inline-flex items-center justify-center w-60 h-60 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <span
                                className="font-medium text-gray-600 text-3xl dark:text-gray-300">{generateInitials(user?.name)}</span>
                        </div>
                        <div>
                            <label htmlFor="fileInput">
                                <CiImageOn size={40}
                                    className="absolute bottom-0 bg-blue p-1.5 rounded-full right-8 text-white cursor-pointer" />
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                accept=".jpg, .jpeg, .png, .gif"
                                style={{ display: 'none' }}
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="relative">
                        <img
                            className="rounded-full object-cover w-60 h-60"
                            src={`${process.env.REACT_APP_URL}${user?.avatar}`}
                            alt="profile"
                        />
                        <div>
                            <label htmlFor="fileInput">
                                <CiImageOn size={40}
                                    className="absolute bottom-0 bg-blue p-1.5 rounded-full right-8 text-white cursor-pointer" />
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                accept=".jpg, .jpeg, .png, .gif"
                                style={{ display: 'none' }}
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                    </div>
                )}
                {file && (
                    <div>
                        <button
                            onClick={() => setFile('')}
                            className="p-2 px-9 bg-white border-2 rounded-full"
                        >
                            Clear
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="p-2 px-9 bg-blue text-white rounded-full"
                        >
                            Upload Profile
                        </button>
                    </div>
                )}
            </div>

            <h1 className="text-4xl text-left ms-4 mt-4 font-semibold">{user?.name}</h1>

            <h1 className="text-xl text-left ms-4">Doctor</h1>

            <hr class="mx-2 my-1 h-[1px] border-t-0 bg-neutral-200" />

            <p className="text-lg text-left text-gray-400 ms-4">Bookmarks: <span className="text-black">{bookmarks?.length}</span></p>

            <p className="text-lg text-left text-gray-400 ms-4">Categories Selected: <span className="text-black">{myCategories?.length}</span></p>
        </div>
    );
};

export default ProfilePicture;
