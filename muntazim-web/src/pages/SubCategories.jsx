import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import assets from "../assets"

import { setCurrentCategory } from "../features/appSlice";

import { BackButton } from "../components/BackButton";

const SubCategories = () => {
    const dispatch = useDispatch();
    const { type } = useParams();
    const category = { ...assets.apps[type], key: type };

    useEffect(() => {
        dispatch(setCurrentCategory(category));
    }, [type]);

    return (
        <div className="items-center flex flex-col mt-5">
            <div
                className="w-full md:w-[80vw] items-center p-6 border border-gray-200 rounded-lg shadow bg-gray-100 dark:bg-gray-900 dark:text-white  dark:border-gray-700">
                <div className="flex flex-wrap">
                    <div className="flex flex-wrap items-center text-center w-[10%]">
                        <BackButton />
                    </div>
                    <div className="w-[90%] ">
                        <h1 className="text-xl text-gray-600 capitalize mr-28">{category.title}</h1>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center items-center mt-6">
                    {category.modules.map(module => (
                        <div key={module.key} className="w-full sm:w-[30%] md:w-[22%] cursor-pointer">
                            <Link to={`/category-guide/${module.key}`}>
                                <div>
                                    <LazyLoadImage className="m-auto rounded" src={module.thumbnail} alt={module.key} />
                                </div>
                                <span className="text-sm">{module.title}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SubCategories
