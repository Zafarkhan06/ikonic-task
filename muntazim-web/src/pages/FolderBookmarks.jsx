import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { RxCross2 } from "react-icons/rx";
import { Slide } from "@mui/material";
import { FaAngleRight } from "react-icons/fa6";

import Pulse from "../components/Pulse";
import WarningAlert from "../components/WarningAlert";
import { VideoModal } from "../components/VideoModal";

import { setAsset } from "../features/appSlice";

import { deleteBookmark, getFolderBookmarks } from "../services/bookmarkService";

const FolderBookmarks = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { folderId } = useParams();
    const [folderBookmarks, setFolderBookmarks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [bookmarkId, setBookmarkId] = useState(null);
    const [deletedFolderId, setDeletedFolderId] = useState(null);
    const [isFolder, setIsFolder] = useState(false);
    const [open, setOpen] = useState(false);

    const [folder, setFolder] = useState({})

    const [videoList, setVideoList] = useState([]);
    const [modalTitle, setModalTitle] = useState('');
    const [isVideoModal, setVideoModal] = useState(false);

    const handleDeleteBookmark = (bookmark_id, is_folder, folder_id) => {
        setBookmarkId(bookmark_id)
        setDeletedFolderId(folder_id)
        setIsFolder(is_folder)
        setOpen(true);
    }

    const handleCancel = () => {
        setBookmarkId(null)
        setDeletedFolderId(null)
        setIsFolder(false);
        setOpen(false);
    };

    const handleConfirm = () => {
        let data = {
            folder_id: deletedFolderId,
            bookmark_id: bookmarkId,
            is_folder: isFolder
        };
        deleteBookmark(data).then(result => {
            if (result?.status === 200) {
                setFolderBookmarks(folderBookmarks.filter(item => item.id !== bookmarkId));
                setOpen(false);
            }
        })

    };

    useEffect(() => {
        getFolderBookmarks(folderId).then(result => {
            if (result !== 'undefined') {
                setFolderBookmarks([...result?.bookmarks])
                setFolder([...result?.bookmarks])
                setIsLoading(false)
            }
        })
    }, []);

    useEffect(() => {
        if (folderBookmarks.length > 0) {
            setFolder(folderBookmarks[0])
        }
    }, [folderBookmarks]);

    const handleAssetClick = (asset) => {
        dispatch(setAsset(asset))
        if (((asset.has_tutorial_video || asset.has_video) && asset.type !== 'program')) {
            let url = asset.has_video ? asset.video : asset.tutorial_video;
            setModalTitle(asset?.title);
            const videoArray = [
                { video: url }
            ]
            setVideoList(videoArray);
            setVideoModal(true);
        } else if (asset.type === 'program') {
            let assetParameters = `programs/chapters/bookmarks`;
            navigate(`/category-guide/${assetParameters}`);
        } else {
            navigate('/annotation');
        }
    };

    if (isLoading) {
        return <Pulse />
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

                {isVideoModal &&
                    <VideoModal
                        setVideoModal={setVideoModal}
                        isVideoModal={isVideoModal}
                        videoList={videoList}
                        currentVideo={0}
                        showVideoList={false}
                        title={modalTitle} />}

                <div className="items-center rounded-lg dark:text-white  dark:border-gray-700 ">
                    <div className="bg-gray-100 flex flex-row items-center p-3 mx-4 rounded-lg w-auto gap-x-1">
                        <Link to="/" className="text-gray-500 text-lg font-light">Home</Link>

                        <FaAngleRight color="#6b7280" />

                        <span className="text-lg font-medium">Bookmarks</span>
                    </div>

                    <div className='grid grid-cols-2 max-h-[80vh] overflow-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-6 m-6'>

                        {folderBookmarks.filter(bookmark => !bookmark.is_folder).length > 0 ? folderBookmarks.filter(bookmark => !bookmark.is_folder)
                            .map(bookmark => (
                                <div key={bookmark.id} className="w-full cursor-pointer relative">
                                    <div className="absolute flex w-[87%]  top-0 right-[6px] md:right-[0px] sm:right-[10px]">
                                        <span onClick={() => handleDeleteBookmark(bookmark.id, 0, bookmark.folder_id)}>
                                            <RxCross2 color="#44403c" className="border-stone-700 rounded-full border-2 p-1 shadow-md right-2" fontSize="30" />
                                        </span>
                                    </div>

                                    <div onClick={() => handleAssetClick(bookmark?.asset)}>
                                        <LazyLoadImage
                                            className="w-full rounded h-[150px] object-contain"
                                            src={bookmark?.asset?.thumbnail}
                                            alt={bookmark?.asset?.key}
                                        />
                                        <h1 className="text-lg font-semibold cursor-pointer"> {bookmark?.asset?.title}</h1>
                                    </div>
                                </div>
                            )) : (
                            <div>
                                <h1 className="text-gray-500">Record not found.</h1>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </Slide>
    )
}

export default FolderBookmarks
