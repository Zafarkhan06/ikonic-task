import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Fade, Slide } from "@mui/material";
import { FaAngleRight } from "react-icons/fa6";
import Divider from '@mui/material/Divider';
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

import assets from "../assets";
import CategoryAssets from './CategoryAssets';

import { setCurrentCategory } from "../features/appSlice";

export const CategoryGuide = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { type, categoryId } = params
    const newCategory = { ...assets.apps[type], key: type };
    const { currentCategory } = useSelector(state => state.app);

    console.log(currentCategory)

    const [isModel, setIsModel] = useState(false);
    const [isIllustration, setIsIllustration] = useState(false);
    const [isAnimation, setIsAnimation] = useState(false);
    const [isProgram, setIsProgram] = useState(false);

    const [isAll, setIsAll] = useState(false);

    const [models, setModels] = useState(0);
    const [illustration, setIllustrations] = useState(0);
    const [animations, setAnimations] = useState(0);
    const [programs, setPrograms] = useState(0);

    useEffect(() => {
        if (!currentCategory || currentCategory.key !== type) {
            dispatch(setCurrentCategory({ ...newCategory, id: categoryId }));
        }
    }, [type]);

    useEffect(() => {
        if (isModel || isIllustration || isAnimation || isProgram) {
            setIsAll(true);
        }

        if (!isModel && !isIllustration && !isAnimation && !isProgram) {
            setIsAll(false);
        }
    }, [isModel, isIllustration, isAnimation, isProgram, isAll])

    if (currentCategory) {
        return (
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <div
                    className="mx-4 dark:text-white  dark:border-gray-700">
                    <div className="flex flex-row justify-between items-center bg-gray-100 rounded-lg">
                        <div className="flex flex-row items-center p-3 w-full gap-x-1">
                            <Link to="/" className="text-gray-500 text-lg font-light">Home</Link>

                            <FaAngleRight color="#6b7280" />

                            <span className="text-lg font-medium">Category - {currentCategory?.title}</span>
                        </div>

                        {isAll ? (
                            <TiArrowSortedUp size={30} className="cursor-pointer mr-4" onClick={() => {
                                setIsModel(false);
                                setIsIllustration(false);
                                setIsProgram(false);
                                setIsAnimation(false);
                                setIsAll(false);
                            }} />
                        ) : (
                            <TiArrowSortedDown size={30} className="cursor-pointer mr-4" onClick={() => {
                                setIsModel(true);
                                setIsIllustration(true);
                                setIsProgram(true);
                                setIsAnimation(true);
                                setIsAll(true);
                            }} />
                        )}
                    </div>

                    <div className="my-8">
                        {models >= 0 && (
                            <div className="my-5">
                                <div className="text-start flex justify-between items-center mx-2">
                                    <div className="flex flex-col">
                                        <h1 className="text-4xl font-semibold">
                                            3D Models
                                        </h1>

                                        <p className="text-gray-400">{models < 0 ? 0 : models} Models</p>
                                    </div>

                                    {isModel ? (
                                        <TiArrowSortedUp size={30} className="cursor-pointer" onClick={() => setIsModel(false)} />
                                    ) : (
                                        <TiArrowSortedDown size={30} className="cursor-pointer" onClick={() => setIsModel(true)} />
                                    )}
                                </div>

                                <Fade in={isModel}>
                                    <div className={!isModel && 'hidden'}>
                                        <CategoryAssets
                                            type={type}
                                            setAssetsLength={setModels}
                                            assetType='models'
                                        />
                                    </div>
                                </Fade>
                            </div>
                        )}

                        {illustration >= 0 && (
                            <span>
                                <Divider />

                                <div className="my-5 mt-8">
                                    <div className="text-start flex justify-between items-center mx-2">
                                        <div className="flex flex-col">
                                            <h1 className="text-4xl font-semibold">
                                                Illustrations
                                            </h1>

                                            <p className="text-gray-400">{illustration < 0 ? 0 : illustration} Illustrations</p>
                                        </div>

                                        {isIllustration ? (
                                            <TiArrowSortedUp size={30} className="cursor-pointer" onClick={() => setIsIllustration(false)} />
                                        ) : (
                                            <TiArrowSortedDown size={30} className="cursor-pointer" onClick={() => setIsIllustration(true)} />
                                        )}
                                    </div>

                                    <Fade in={isIllustration}>
                                        <div className={!isIllustration && 'hidden'}>
                                            <CategoryAssets
                                                type={type}
                                                setAssetsLength={setIllustrations}
                                                assetType='illustrations'
                                            />
                                        </div>
                                    </Fade>
                                </div>
                            </span>
                        )}

                        {animations >= 0 && (
                            <span>
                                <Divider />

                                <div className="my-5 mt-8">
                                    <div className="text-start flex justify-between items-center mx-2">
                                        <div className="flex flex-col">
                                            <h1 className="text-4xl font-semibold">
                                                Animations
                                            </h1>

                                            <p className="text-gray-400">{animations < 0 ? 0 : animations} Animations</p>
                                        </div>

                                        {isAnimation ? (
                                            <TiArrowSortedUp size={30} className="cursor-pointer" onClick={() => setIsAnimation(false)} />
                                        ) : (
                                            <TiArrowSortedDown size={30} className="cursor-pointer" onClick={() => setIsAnimation(true)} />
                                        )}
                                    </div>

                                    <Fade in={isAnimation}>
                                        <div className={!isAnimation && 'hidden'}>
                                            <CategoryAssets
                                                type={type}
                                                setAssetsLength={setAnimations}
                                                assetType='animations'
                                            />
                                        </div>
                                    </Fade>
                                </div>
                            </span>
                        )}

                        {programs >= 0 && (
                            <span>
                                <Divider />

                                <div className="my-5 mt-8">
                                    <div className="text-start flex justify-between items-center mx-2">
                                        <div className="flex flex-col">
                                            <h1 className="text-4xl font-semibold">
                                                Programs
                                            </h1>

                                            <p className="text-gray-400">{programs < 0 ? 0 : programs} Programs</p>
                                        </div>

                                        {isProgram ? (
                                            <TiArrowSortedUp size={30} className="cursor-pointer" onClick={() => setIsProgram(false)} />
                                        ) : (
                                            <TiArrowSortedDown size={30} className="cursor-pointer" onClick={() => setIsProgram(true)} />
                                        )}
                                    </div>

                                    <Fade in={isProgram}>
                                        <div className={!isProgram && 'hidden'}>
                                            <CategoryAssets
                                                type={type}
                                                setAssetsLength={setPrograms}
                                                assetType='programs'
                                            />
                                        </div>
                                    </Fade>
                                </div>
                            </span>
                        )}
                    </div>
                </div>
            </Slide>
        )
    }

    return (
        <div>
            <div
                className="w-full md:w-[80vw] mt-4 m-auto  items-center p-6 border border-gray-200 rounded-lg shadow bg-gray-100 dark:bg-gray-900 dark:text-white  dark:border-gray-700">
                <h1 className="text-4xl text-center">No Results</h1>
            </div>
        </div>
    );
}
