import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Breadcrumbs, Link as MUILink, Slide, Typography } from "@mui/material";
import { FaFolderPlus } from "react-icons/fa";

import EditBookmark from "../components/EditBookmarks";
import EditBookmarkGroups from "../components/EditBookmarkGroups";
import BookmarkGroupModal from "../components/BookmarkGroupModal";
import WarningAlert from "../components/WarningAlert";

import { createBookmarkGroup, deleteBookmark } from "../services/bookmarkService"

import { setBookmarks } from "../features/appSlice";

const EditBookmarks = () => {
    const { bookmarks } = useSelector(state => state.app);

    const [bookmarkId, setBookmarkId] = useState(null);
    const [folderId, setFolderId] = useState(null);
    const [isFolder, setIsFolder] = useState(false);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [bookmarkGroupInputValue, setBookmarkGroupInputValue] = useState('');
    const [bookmarkGroupSubmittedError, setBookmarkGroupSubmittedError] = useState(false);

    const [open, setOpen] = React.useState(false);

    const dispatch = useDispatch();


    const [isBookmarkGroupModalOpen, setIsBookmarkGroupModalOpen] = useState(false);
    const [bookmarkGroupNameError, setBookmarkGroupNameError] = useState(false);

    const handleBookmarkGroupSubmit = () => {
        setIsSubmitted(true)
        if (bookmarkGroupInputValue === '' || bookmarkGroupInputValue === null) {
            setBookmarkGroupNameError(true)
            setIsSubmitted(false)
            return
        }
        createBookmarkGroup(bookmarkGroupInputValue).then(result => {
            if (typeof result !== 'undefined') {
                dispatch(setBookmarks([...bookmarks, result]))
                setBookmarkGroupInputValue('')
                setBookmarkGroupSubmittedError(true)
                setIsBookmarkGroupModalOpen(false)
            }
            setIsSubmitted(false)
        })
    }

    const handleDeleteBookmark = (bookmark_id, is_folder, folder_id) => {
        setBookmarkId(bookmark_id)
        setFolderId(folder_id)
        setIsFolder(is_folder)
        setOpen(true);
    }

    const handleConfirm = () => {
        let data = {};
        data[isFolder ? 'folder_id' : 'bookmark_id'] = isFolder ? folderId : bookmarkId;
        deleteBookmark(data).then(result => {
            if (result?.status === 200) {
                dispatch(setBookmarks(bookmarks.filter(item => item.id !== bookmarkId)));
                setOpen(false);
            }
        })

    };

    const handleCancel = () => {
        setBookmarkId(null)
        setFolderId(null)
        setIsFolder(false);
        setOpen(false);
    };

    const bookmarkGroupModalClose = () => {
        setIsBookmarkGroupModalOpen(false)
    }

    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <div>
                <WarningAlert
                    open={open}
                    handleConfirm={handleConfirm}
                    handleCancel={handleCancel}
                    alertMessage='Are you sure you want to delete this bookmark?'
                />

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

                <div className="items-center rounded-lg dark:text-white  dark:border-gray-700 ">

                    <Breadcrumbs aria-label="breadcrumb" className="mb-4">
                        <MUILink underline="hover" color="inherit" href="/">
                            Home
                        </MUILink>

                        <Typography color="text.primary">Bookmarks</Typography>
                    </Breadcrumbs>

                    <EditBookmark deleteBookmark={handleDeleteBookmark} />


                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => {
                                setIsBookmarkGroupModalOpen(true)
                                setBookmarkGroupInputValue('')
                                setBookmarkGroupNameError(false)
                                setBookmarkGroupSubmittedError(false)
                            }}
                            className="bg-[#38A3BD] text-white text-[10px] !p-1 flex items-center gap-1 rounded" >
                            <span><FaFolderPlus size="24" /> </span>
                            <span className="text-[12px]"> New Bookmark Group</span>
                        </button>
                    </div>

                    <EditBookmarkGroups deleteBookmark={handleDeleteBookmark} />
                </div>
            </div>
        </Slide>
    )
}
export default EditBookmarks
