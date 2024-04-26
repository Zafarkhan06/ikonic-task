import React, { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { FaFolderPlus } from "react-icons/fa";

import Spinner from "./Spinner";

import { getToken } from "../helpers/getToken";

import { bookmarkCopyToFolders, createBookmarkGroup, getUserFolders } from "../services/bookmarkService";
import BookmarkGroupModal from "./BookmarkGroupModal";

const AnnotateAsset = ({
    isOpen,
    onClose,
    asset,
    setBookmarks,
}) => {
    const { currentCategory } = useSelector(state => state.app);

    const [userFolders, setUserFolders] = useState([]);
    const [checkedFolders, setCheckedFolders] = useState([]);

    const [isBookmarkGroupModalOpen, setIsBookmarkGroupModalOpen] = useState(false);
    const [bookmarkGroupNameError, setBookmarkGroupNameError] = useState(false);
    const [bookmarkGroupInputValue, setBookmarkGroupInputValue] = useState('');

    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        getUserFolders().then(setUserFolders);
    }, []);

    const handleCheckboxChange = (folderId) => {
        setCheckedFolders((prevCheckedFolders) => {
            if (prevCheckedFolders.includes(folderId)) {
                return prevCheckedFolders.filter(id => id !== folderId);
            } else {
                return [...prevCheckedFolders, folderId];
            }
        });
    };

    const handleSubmit = async () => {

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_URL}/api/bookmark/store`,
                { ...asset, category_id: currentCategory.id, app_asset_id: asset.id, is_folder: 0 },
                {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`
                    }
                }
            );

            if (res.data?.data) {
                const bookmark = res.data?.data;

                if (checkedFolders.length > 0) {

                    await bookmarkCopyToFolders(checkedFolders, bookmark.id);

                }

                setBookmarks(bookmark);
                toast.success(res.data?.message);

                onClose();
                setIsSubmitted(false);
                setCheckedFolders([]);
            }
        } catch (error) {
            if (typeof error === 'string') {
                toast.error(error);
            } else {
                toast.error('An error while processing your request!');
            }
        }

    }

    const handleBookmarkGroupSubmit = () => {
        setIsSubmitted(true);

        if (bookmarkGroupInputValue === '' || bookmarkGroupInputValue === null) {
            setBookmarkGroupNameError(true)
            setIsSubmitted(false)
            return;
        }

        createBookmarkGroup(bookmarkGroupInputValue).then(result => {
            if (typeof result !== 'undefined') {
                getUserFolders().then(setUserFolders);
                setBookmarkGroupInputValue('');
                setIsBookmarkGroupModalOpen(false);
            }
            setIsSubmitted(false)
        })
    }

    const bookmarkGroupModalClose = () => {
        setIsBookmarkGroupModalOpen(false)
    }

    return (
        <div>
            <BookmarkGroupModal
                isOpen={isBookmarkGroupModalOpen}
                handleBookmarkGroupSubmit={handleBookmarkGroupSubmit}
                bookmarkGroupInputValue={bookmarkGroupInputValue}
                onClose={bookmarkGroupModalClose}
                setBookmarkGroupInputValue={setBookmarkGroupInputValue}
                bookmarkGroupNameError={bookmarkGroupNameError}
                setBookmarkGroupNameError={setBookmarkGroupNameError}
                isLoading={isSubmitted}
                style='!max-w-[30rem]'
            />

            {isOpen && <div style={{ zIndex: 99 }} id="static-modal" className="backdrop-brightness-50 rounded-[20px] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex" aria-modal="true" role="dialog" aria-hidden="true">
                <div className={`relative p-4 w-full max-w-2xl max-h-full`}>

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div className="flex items-center justify-between p-3 md:p-3 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Add To Bookmark Group
                            </h3>
                            <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                                <RxCross2 size="24" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="text-left p-4 md:p-5 space-y-4">
                            <ul className="list-none overflow-auto  max-h-[200px] px-2">
                                {
                                    userFolders.map(folder => (
                                        <li key={folder.id} className="flex items-center gap-[10px] mt-1">
                                            <input
                                                id={`checkbox-${folder.id}`}
                                                name="folder_ids[]"
                                                type="checkbox"
                                                value={folder.id}
                                                checked={checkedFolders.includes(folder.id)}
                                                onChange={() => handleCheckboxChange(folder.id)}
                                                className="w-4 h-4 text-[#38A3BD] bg-gray-100 border-gray-300 rounded focus:ring-[#38A3BD] dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <span>{folder.name}</span>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>

                        <div className="flex  items-center gap-2 justify-end p-2 md:p-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                                onClick={() => {
                                    setIsBookmarkGroupModalOpen(true)
                                    setBookmarkGroupInputValue('')
                                    setBookmarkGroupNameError(false)
                                }}
                                className="bg-[#38A3BD] text-white text-[10px] !p-1 flex items-center gap-1 rounded" >
                                <span><FaFolderPlus size="24" /> </span>
                                <span className="text-[12px]"> New Bookmark Group</span>
                            </button>

                            <button onClick={onClose} type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                Close
                            </button>
                            <button onClick={handleSubmit}
                                type="button" className={'text-white bg-[#38A3BD]  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center'} disabled={isSubmitted}>
                                {isSubmitted ? <Spinner styles="!w-4 !h-4" /> : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    );
}

export default AnnotateAsset