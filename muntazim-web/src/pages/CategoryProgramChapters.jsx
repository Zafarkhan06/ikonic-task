import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { Slide } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaAngleRight } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import ReactPlayer from "react-player/lazy";
import { FiPlayCircle } from "react-icons/fi";

export const CategoryProgramChapters = () => {
    const { type } = useParams();

    const { currentCategory, currentAsset } = useSelector(state => state.app);

    const [currentVideo, setCurrentVideo] = useState('');

    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        if (type === 'bookmarks') {
            setChapters(currentAsset?.children);
        } else {
            setChapters(currentAsset.children);
        }

        setCurrentVideo(chapters[0]);
    }, [chapters, currentAsset, currentCategory.title, type]);

    const handleChapterClick = useCallback((index) => {
        setCurrentVideo(chapters[index]);
    }, [chapters]);

    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <div className="w-full items-center">
                <div className="flex flex-wrap">
                    <div className="bg-gray-100 flex flex-row items-center p-3 rounded-lg w-full gap-x-2">
                        <Link to="/" className="text-gray-500 text-lg font-light">Home</Link>

                        <FaAngleRight color="#6b7280" />

                        <Link className="text-gray-500 text-lg font-light">Category - {currentCategory?.title}</Link>

                        <FaAngleRight color="#6b7280" />

                        <Link className="text-gray-500 text-lg font-light">Programs</Link>

                        <FaAngleRight color="#6b7280" />

                        <span className="text-lg font-medium">{currentAsset?.title}</span>

                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4 border rounded-lg p-4 bg-gray-50">
                    <div className="col-span-1 text-start border-r">
                        <LazyLoadImage
                            className="rounded-xl w-32 h-32"
                            src={currentAsset?.thumbnail}
                            alt={currentAsset?.type}
                        />

                        <p className="text-3xl mt-2 font-semibold">{currentAsset?.title}</p>
                    </div>

                    <div className="col-span-2">
                        <div>
                            <ReactPlayer
                                config={{
                                    file:
                                    {
                                        attributes: { controlsList: 'nodownload', disablePictureInPicture: true },
                                        tracks: [{ kind: 'subtitles', src: `/assets/subtitles/${currentVideo?.id}-en.vtt`, srcLang: 'en', default: true, mode: 'showing' }],
                                    }
                                }}
                                volume={0.5}
                                controls={true}
                                url={currentVideo?.video}
                                playing
                                height="450px"
                                width='900px'
                            />
                        </div>

                        <div className="flex flex-wrap">
                            {
                                chapters.map((chapter, index) => (
                                    <div className="w-full border rounded-lg flex items-center mt-3 bg-white p-3 gap-x-4" key={index} >
                                        <div className="flex">
                                            <span className="text-cyan-600 font-semibold text-lg py-[3px] px-[10px] rounded-md bg-cyan-50" >0{index + 1}</span>
                                        </div>

                                        <div className="w-full flex items-center gap-x-2">
                                            <span>{chapter.title}</span>

                                            <div
                                                class="inline-block h-6 w-[1px] self-stretch bg-neutral-300 opacity-100 dark:opacity-50"></div>

                                            <span>{chapter.duration}</span>
                                        </div>

                                        <div className="flex gap-x-2 items-center">
                                            {currentVideo?.id === chapter?.id ? (
                                                <FaPlayCircle size={30} color="#06b6d4" />
                                            ) : (
                                                <FiPlayCircle onClick={() => handleChapterClick(index)} size={30} className="cursor-pointer" color="#06b6d4" />
                                            )}

                                            {currentVideo?.id === chapter?.id ? (
                                                <p className="font-light text-sm text-gray-500">
                                                    Playing...
                                                </p>
                                            ) : (
                                                <p className="font-light text-sm text-gray-500">
                                                    Play
                                                </p>
                                            )}

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}
