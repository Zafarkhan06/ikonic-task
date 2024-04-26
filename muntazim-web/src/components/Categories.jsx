import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { FaArrowRightLong } from "react-icons/fa6";

import { getFavoriteCategories } from "../services/categoryService";

import Pulse from "./Pulse";
import CategoryModal from "./CategoryModal";

import Heart from '../asset/category/bg.svg';

const Categories = () => {
    const dispatch = useDispatch();

    const [myCategories, setMyCategories] = useState([]);
    const [isModal, setIsModal] = useState(false);

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);

        getFavoriteCategories(dispatch).then(result => {
            setIsLoading(false);
            setMyCategories(result);
        }).catch((error) => {
            setIsLoading(false);
            console.error(error);
        })
    }, [dispatch, isModal]);

    if (isLoading) {
        return <Pulse />
    }

    return (
        <div className="w-full px-4">
            <CategoryModal
                isModal={isModal}
                setIsModal={setIsModal}
            />

            <div className="bg-gray-100 text-left p-3 rounded-lg text-lg font-medium w-full">
                Home
            </div>

            <div className="flex justify-between gap-x-4 mt-10 items-center">
                <h1 className="text-4xl font-semibold capitalize">My Categories</h1>

                <span className="cursor-pointer text-lg font-medium text-blue" onClick={() => setIsModal(true)}>
                    View All Categories
                </span>
            </div>

            {myCategories?.length > 0 ? (
                <div className="grid grid-cols-1 overflow-auto max-h-[65vh] md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6 justify-center">
                    {myCategories.map(category => (
                        <div
                            className="h-64 md:h-56 lg:h-52 xl:h-60 2xl:h-72"
                            key={category.id}
                            style={{
                                backgroundImage: `url(${Heart})`,
                                backgroundSize: '100% 100%',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div
                                className="flex justify-between p-6 h-full items-end text-white">
                                <div>
                                    <div className="mb-3">
                                        <img className="w-12 h-12 bg-white bg-opacity-30 rounded p-2" src={require(`../asset/category/icons/${category.key}.svg`)} alt="" />
                                    </div>

                                    <div className="flex flex-col gap-y-1 w-52 text-left">
                                        <span className="text-xl font-bold truncate">{category.title}</span>
                                        <span className="text-left text-gray-400"></span>
                                    </div>
                                </div>

                                <Link
                                    className="flex flex-row items-center gap-x-1 font-semibold bg-white bg-opacity-30 rounded-full p-2 px-4"
                                    to={`/category-modules/${category.key}/${category.id}`}>
                                    <span className="text-sm">View</span> <FaArrowRightLong color="#fff" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center mt-4 text-gray-500">
                    Add your first...
                </div>
            )}
        </div>
    );
};

export default Categories;
