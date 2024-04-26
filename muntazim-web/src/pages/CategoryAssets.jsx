import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { IoBookmarkSharp } from "react-icons/io5";
import { FiBookmark } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

import { setCategoryAssetsFromXml } from "../services/categoryService";

import { handleApiError } from "../helpers/api"
import { getToken } from "../helpers/getToken";
import { setAsset, setCurrentCategory } from "../features/appSlice";

import Spinner from "../components/Spinner";
import { VideoModal } from "../components/VideoModal";
import AnnotateAsset from "../components/AnnotateAsset";

const CategoryAssets = ({ type, assetType, setAssetsLength }) => {
    const { currentCategory } = useSelector(state => state.app);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [assets, setAssets] = useState([]);
    const [videoList, setVideoList] = useState([]);
    const [modalTitle, setModalTitle] = useState('');

    const [isVideoModal, setVideoModal] = useState(false);
    const [showSpinner, setShowSpinner] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentAsset, setCurrentAsset] = useState();

    const [bookmarkAssets, setBookmarkAssets] = useState([]);

    const handleAssetClick = (asset) => {
        dispatch(setAsset(asset))

        if ((asset.has_tutorial_video || asset.has_video) && asset.children.length <= 0) {
            let url = asset.has_video ? asset.video : asset.tutorial_video;
            setModalTitle(asset?.title);
            const videoArray = [
                { video: url, id: asset.id }
            ]
            setVideoList(videoArray);
            setVideoModal(true);
        } else if (asset.type === 'program') {
            localStorage.removeItem('prevRoute');

            let assetParameters = `${assetType}/chapters/${type}`;
            navigate(`/category-guide/${assetParameters}`);
        } else {
            localStorage.removeItem('prevRoute');
            navigate('/annotation');
        }
    };

    useEffect(() => {

        if (assetType in currentCategory) {
            setAssets(currentCategory[assetType]);

            const length = currentCategory[assetType]?.length - 1;

            setAssetsLength(length > 0 ? length : -1);
        } else {
            setCategoryAssetsFromXml(currentCategory, type, assetType).then(result => {

                let category = {
                    ...currentCategory,
                    [assetType]: result
                };

                dispatch(setCurrentCategory(category));
                setAssets(result);

                const length = result?.length - 1;

                setAssetsLength(length > 0 ? length : -1);
            });
        }

        setTimeout(() => {
            if (assets?.length <= 0) {
                setShowSpinner(false);
            }
        }, 2000);

    }, [assetType, assets, dispatch]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/api/bookmark/assets`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        })
            .then((res) => {
                setBookmarkAssets(res.data.assets);
            })
            .catch((err) => {
                if (typeof err === 'string') {
                    toast.error(err);
                } else {
                    toast.error('An error accrued while processing request');
                }
            })
    }, [assetType]);

    // const handleSearch = (e) => {
    //     const query = e.target.value;

    //     setSearchAssets(
    //         assets.filter(asset => asset.title.toLowerCase().includes(query.toLowerCase()))
    //     )
    // }


    const bookmarkAsset = (asset, e) => {
        e.stopPropagation();

        setCurrentAsset(asset);
        setIsModalOpen(true);
    }


    const deleteBookmark = async (bookmark, e) => {
        e.stopPropagation();

        try {
            const res = await axios.delete(
                `${process.env.REACT_APP_URL}/api/bookmark/delete`,
                {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`
                    },
                    data: {
                        bookmark_id: bookmark.id
                    }
                },
            );
            if (res.data?.message) {
                toast.success(res.data?.message);
                setBookmarkAssets(bookmarkAssets.filter(item => item.id !== bookmark.id));
            }
        } catch (error) {
            handleApiError(error)
        }
    }

    if (showSpinner) {
        return <Spinner />
    }

    return (
        <div
            className="w-full">
            {isVideoModal &&
                <VideoModal
                    setVideoModal={setVideoModal}
                    isVideoModal={isVideoModal}
                    videoList={videoList}
                    currentVideo={0}
                    showVideoList={false}
                    title={modalTitle} />}

            <AnnotateAsset
                isOpen={isModalOpen}
                setBookmarks={(bookmark) => setBookmarkAssets([...bookmarkAssets, { ...bookmark }])}
                onClose={() => setIsModalOpen(false)}
                asset={currentAsset}
            />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-6 mt-6'>
                {assets?.length > 0 ? assets
                    ?.filter((asset) => !asset.has_tutorial_video)
                    .map((asset, index) => (
                        <div className="text-left flex flex-col gap-2" key={index}>
                            <div className='relative rounded-xl border border-gray-200 cursor-pointer' onClick={() => handleAssetClick(asset)} style={{
                                backgroundImage: `url(${asset.thumbnail})`,
                                backgroundSize: 'auto 150px',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                width: '250px',
                                height: '150px'
                            }}>
                                {
                                    bookmarkAssets.length &&
                                        bookmarkAssets.find((bookmark) => bookmark?.asset?.app_asset_id === asset.id) ? (
                                        <IoBookmarkSharp size={30} color="#44403c" className="rounded p-1 bg-white bg-opacity-30 shadow-md right-2" onClick={async (e) => await deleteBookmark(bookmarkAssets.find((bookmark) => bookmark?.asset?.app_asset_id === asset.id), e)} style={{ position: 'absolute', top: 5 }} />
                                    ) : (
                                        <FiBookmark size={30} color="#44403c" className="rounded p-1 bg-white bg-opacity-30 shadow-md right-2" onClick={(e) => bookmarkAsset(asset, e)} style={{ position: 'absolute', top: 5 }} />
                                    )}

                                {['programs', 'animations'].includes(assetType) && <CiMail size={30} color="#44403c" onClick={(e) => {
                                    e.stopPropagation();
                                    const url = asset.has_video ? asset.video : asset.tutorial_video;
                                    navigator.clipboard.writeText(url);
                                    toast.success('Copied to clipboard');
                                }} className="bg-white bg-opacity-30 rounded p-1 right-2 shadow-md" style={{ position: 'absolute', top: 40 }} />}
                            </div>

                            <div>
                                <span className="text-lg font-semibold cursor-pointer" onClick={() => handleAssetClick(asset)}>{asset.title}</span>

                                <div className="text-blue flex flex-row gap-x-2 items-center text-sm">
                                    <span className="cursor-pointer font-light" onClick={() => handleAssetClick(asset)}>View</span> <FaArrowRight className="cursor-pointer" color="#38a4bd" />
                                </div>
                            </div>
                        </div>
                    )) : (
                    <div>
                        <h1 className="">No assets available</h1>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CategoryAssets;
