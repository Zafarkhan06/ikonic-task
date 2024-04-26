import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { CiMail } from "react-icons/ci";
import { toast } from "react-toastify";
import { FaArrowRightLong, FaFolderOpen } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import { deleteBookmark, getBookmarks } from "../services/bookmarkService";

import { setAsset, setBookmarks } from "../features/appSlice";

import { VideoModal } from "./VideoModal";
import Spinner from "./Spinner";
import WarningAlert from "./WarningAlert";

const Bookmarks = () => {
    const { isLoading, bookmarks } = useSelector(state => state.app);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [videoList, setVideoList] = useState([]);
    const [modalTitle, setModalTitle] = useState('');
    const [isVideoModal, setVideoModal] = useState(false);

    const [bookmarkId, setBookmarkId] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getBookmarks(dispatch);
    }, [dispatch]);

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
            localStorage.setItem('prevRoute', 'home');

            let assetParameters = `programs/chapters/bookmarks`;
            navigate(`/category-guide/${assetParameters}`);
        } else {
            localStorage.setItem('prevRoute', 'home');
            navigate('/annotation');
        }
    };

    const handleDeleteBookmark = (bookmark_id, e) => {
        e.stopPropagation();

        setBookmarkId(bookmark_id)
        setOpen(true);
    }

    const handleCancel = () => {
        setBookmarkId(null)
        setOpen(false);
    };

    const handleConfirm = () => {
        deleteBookmark({
            bookmark_id: bookmarkId,
        }).then(result => {
            setOpen(false);

            if (result?.status === 200) {
                dispatch(setBookmarks(bookmarks.filter(item => item.id !== bookmarkId)));
            }
        })
    };

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="w-full">
            {isVideoModal &&
                <VideoModal
                    setVideoModal={setVideoModal}
                    isVideoModal={isVideoModal}
                    videoList={videoList}
                    currentVideo={0}
                    showVideoList={false}
                    title={modalTitle} />}

            <WarningAlert
                open={open}
                handleConfirm={handleConfirm}
                handleCancel={handleCancel}
                alertMessage='Are you sure you want to delete this bookmark?'
            />

            <div className="w-full p-2 rounded-lg border border-gray-200">
                <div className="text-left mt-4 px-2">
                    <h1 className="text-4xl capitalize font-semibold">Bookmarks</h1>
                </div>

                <div className="flex max-h-[75vh] overflow-auto gap-x-5 flex-wrap gap-4 mt-3 justify-center">
                    {bookmarks?.length > 0 ? bookmarks.map(bookmark => (
                        bookmark.is_folder ? (
                            <div className="w-full mx-2 py-2 px-4 bg-gray-50 rounded-lg border border-gray-200" key={bookmark.id}>
                                <div className="flex flex-row justify-between">
                                    <FaFolderOpen size={70} className="text-blue" />

                                    <h1 className="text-red-500 font-semibold text-sm p-2">Remove</h1>
                                </div>

                                <h1 className="text-left text-xl font-semibold">{bookmark.folder_name}</h1>

                                {bookmark?.bookmarks > 1 ? (
                                    <Link className="flex flex-row items-center gap-x-2 text-sm font-semibold text-blue" to={`/folder-bookmarks/${bookmark.folder_id}`}>
                                        View Bookmark ({bookmark?.bookmarks - 1}) <FaArrowRightLong color="#06b6d4" />
                                    </Link>
                                ) : (
                                    <div className="flex flex-row items-center gap-x-2 text-sm font-semibold text-blue" >
                                        Empty
                                    </div>
                                )}

                            </div>
                        ) : (
                            <div className="w-full mx-2 flex flex-col text-left py-2 px-4 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer"
                                onClick={() => handleAssetClick(bookmark?.asset)}
                                key={bookmark.id}>
                                <div className="flex flex-row justify-between w-full relative">
                                    <div className="relative">
                                        <img className="w-[15px]" src={bookmark?.asset?.icon} alt={bookmark?.asset?.title} />

                                        {bookmark?.asset?.has_video ? <CiMail size={20} color="#44403c" onClick={(e) => {
                                            e.stopPropagation();
                                            const url = bookmark?.asset.has_video ? bookmark?.asset.video : bookmark?.asset.tutorial_video;
                                            navigator.clipboard.writeText(url);
                                            toast.success('Copied to clipboard');
                                        }} className="border-stone-700 rounded-full border-2 p-0.5 cursor-pointer" style={{ position: 'absolute', top: 0, left: 20 }} /> : null}
                                    </div>

                                    <LazyLoadImage className="rounded h-[100px] object-cover"
                                        src={bookmark?.asset?.thumbnail}
                                        alt={bookmark?.asset?.key} />


                                    <RxCross2
                                        color="#44403c"
                                        className="border-stone-700 rounded-full border-2 p-0.5 cursor-pointer"
                                        fontSize="20"
                                        onClick={(e) => handleDeleteBookmark(bookmark.id, e)}
                                        style={{ position: 'absolute', top: 4, right: 4 }}
                                    />
                                </div>

                                <h1 className="text-xl font-semibold">{bookmark?.asset?.title}</h1>
                            </div>
                        )
                    )) : (
                        <div className="text-center mt-4 text-gray-500">
                            No Bookmarks
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Bookmarks;
