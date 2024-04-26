import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";


import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import { IoPlaySkipBackCircle } from "react-icons/io5";
import { Select } from "./Select";

export const VideoModal = ({ setVideoModal, isVideoModal, videoList, currentVideo, showVideoList, title, styles }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(currentVideo);
    const [isMouseOverList, setIsMouseOverList] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const isLastVideo = currentVideoIndex === videoList.length - 1;
    const isFirstVideo = currentVideoIndex === 0;
    const displayProperties = ['title', 'duration'];


    const playNextVideo = () => {
        setCurrentVideoIndex((prevIndex) =>
            prevIndex < videoList.length - 1 ? prevIndex + 1 : prevIndex
        );
    };

    const playPreviousVideo = () => {
        setCurrentVideoIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    };

    const handleSelect = (value) => {
        const intValue = parseInt(value, 10);
        setSelectedValue(value);
        setCurrentVideoIndex(intValue);

    }
    useEffect(() => {
        setSelectedValue(currentVideoIndex)
    }, [currentVideoIndex]);

    return (
        <>
            <div
                className={`${styles} justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#38A3BD] outline-none focus:outline-none">
                        {/*header*/}
                        <div
                            className=" modal-header flex items-center justify-between p-2 border-b border-solid border-blueGray-200 rounded-t">
                            <div className="w-[90%]">
                                <h1 className="text-xl text-white capitalize">
                                    {title}
                                </h1>
                            </div>
                            <div className="w-[10%]">
                                <button onClick={() => setVideoModal(false)}>
                                    <IoIosCloseCircleOutline color="white" size="28" />
                                </button>
                            </div>

                        </div>

                        {/*body*/}
                        <div className="relative  pt-0 flex-auto">
                            <div className="relative "
                                onMouseEnter={() => setIsMouseOverList(true)}
                                onMouseLeave={() => setIsMouseOverList(false)}
                            >
                                <div>
                                    <ReactPlayer
                                        config={{
                                            file:
                                            {
                                                attributes: { controlsList: 'nodownload', disablePictureInPicture: true },
                                                tracks: [{ kind: 'subtitles', src: `/assets/subtitles/${videoList[currentVideoIndex]?.id}-en.vtt`, srcLang: 'en', default: true, mode: 'showing' }],
                                            }
                                        }}
                                        volume={0.5}
                                        controls={true}
                                        url={videoList[currentVideoIndex]?.video}
                                        playing
                                    />
                                </div>
                                {(isMouseOverList && showVideoList) && (
                                    <div>
                                        <button onClick={playPreviousVideo}
                                            className={`${!isFirstVideo ? 'cursor-pointer' : ''} absolute top-1/2 left-7 transform -translate-x-1/2 -translate-y-1/2`} disabled={isFirstVideo}>
                                            <IoPlaySkipBackCircle color="white" size="28px" />
                                        </button>
                                        <button onClick={playNextVideo}
                                            className={` ${!isLastVideo ? 'cursor-pointer' : ''} absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2`} disabled={isLastVideo}>
                                            <BiSolidSkipNextCircle color="white" size="28px" />
                                        </button>
                                    </div>
                                )}

                            </div>
                        </div>

                        {/*footer*/}
                        <div
                            className={`${showVideoList ? 'p-2' : 'p-6'} flex items-center justify-center  border-t border-solid border-blueGray-200 rounded-b`}>
                            {(showVideoList) && (
                                <Select options={videoList} onSelect={handleSelect} displayProperties={displayProperties} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
                            )}

                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
