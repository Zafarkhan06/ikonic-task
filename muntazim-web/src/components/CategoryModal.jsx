import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from 'react-toastify';
import { Modal } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { GoCheckCircleFill } from "react-icons/go";
import { FaRegCircle } from "react-icons/fa";

import Spinner from "./Spinner";

import { getCategories, getCategoriesCount, getFavoriteCategories } from "../services/categoryService";

import { getToken } from "../helpers/getToken";
import assets from "../assets";

const CategoryModal = ({ setIsModal, isModal }) => {
    const dispatch = useDispatch();
    const { favouriteCategories: favoriteCategories, isLoading } = useSelector(state => state.app);

    const [loading, setLoading] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [cateCount, setCateCount] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (favoriteCategories?.length === 0) {
                await getCategories(dispatch);
            }

            getFavoriteCategories(dispatch).then(result => setSelectedCategories(result?.map(cat => cat.id)))
        }

        fetchData();
    }, [dispatch, favoriteCategories]);

    useEffect(() => {
        setLoading(true);

        if (favoriteCategories && favoriteCategories.length > 0) {
            favoriteCategories.forEach((cate) => {
                categoriesCount(cate);
            });

            setLoading(false);
        }
    }, [favoriteCategories])

    const handleSelection = (id) => {
        if (selectedCategories.includes(id)) {
            setSelectedCategories(selectedCategories.filter(cat => cat !== id))
        } else {
            setSelectedCategories([...selectedCategories, id])
        }
    }

    const handleSubmit = async () => {
        try {
            setLoading(true);

            await fetch(`${process.env.REACT_APP_URL}/api/category/store`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${getToken()}`,
                },
                body: JSON.stringify({
                    id: selectedCategories,
                }),
            });

            toast.success('Added Successfully.')
            setLoading(false);
            setIsModal(false)
        } catch (error) {
            setLoading(false);
            toast.error(error?.response?.data?.message);
        }
    }

    const categoriesCount = useCallback(async (category) => {
        const { modules } = assets.apps[category.key];

        const countPromise = modules.map(async ({ key }) => {
            try {
                return await getCategoriesCount(key);
            } catch (error) {
                console.error(error);

                return 0;
            }
        });

        const count = (await Promise.all(countPromise)).reduce((partialSum, a) => partialSum + a, 0);

        setCateCount((prev) => [
            ...prev,
            {
                key: category.key,
                count,
            }
        ]);
    }, []);

    return (
        <Modal
            open={isModal}
            onClose={() => setIsModal(false)}
            className="!border-none"
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <div
                className="flex flex-col bg-white w-11/12 justify-center items-center border-none rounded-xl py-6">
                <div
                    className="flex flex-col items-center gap-y-2 justify-center">
                    <h1 className="text-4xl font-semibold">
                        Select Your Favorite Categories
                    </h1>
                </div>

                <div className="w-full px-6 my-6">
                    {(isLoading || loading) ? (
                        <div className="flex items-center justify-center">
                            <Spinner />
                        </div>
                    ) : (
                        <div className="grid grid-cols-4 gap-4 w-full">
                            {
                                favoriteCategories?.map(category => {
                                    const categoryCount = cateCount.find((cate) => cate.key === category.key);

                                    return (
                                        <div key={category.id} className="w-full flex p-4 bg-gray-50 flex-row border rounded-lg justify-between">
                                            <div>
                                                <p className="text-lg font-medium">{category.title}</p>

                                                <p className="text-gray-500 text-sm">{categoryCount?.count} Files</p>
                                            </div>

                                            <Checkbox
                                                onClick={() => handleSelection(category.id)}
                                                icon={<FaRegCircle size={25} color="#d1d5db" className="bg-gray-300 rounded-full" />}
                                                checkedIcon={<GoCheckCircleFill size={25} />}
                                                checked={selectedCategories.includes(category.id)}
                                            />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    )}
                </div>

                <div
                    className="flex flex-col items-center justify-end gap-y-2">
                    <button
                        className="bg-blue text-white active:bg-emerald-600 font-bold text-md px-16 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleSubmit}
                    >
                        {loading ? <Spinner /> : 'Save'}
                    </button>

                    <button
                        className="text-stone-400 font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setIsModal(false)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default CategoryModal;
