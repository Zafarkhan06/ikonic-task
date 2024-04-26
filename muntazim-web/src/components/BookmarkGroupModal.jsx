import React, { useEffect } from "react";

import { RxCross2 } from "react-icons/rx";

import Spinner from "./Spinner";

const BookmarkGroupModal = ({ isOpen, onClose, handleBookmarkGroupSubmit, bookmarkGroupInputValue, setBookmarkGroupInputValue, bookmarkGroupNameError, setBookmarkGroupNameError, isLoading, style, saveButtonStyle }) => {

    const handleInputChange = (event) => {
        const value = event.target.value;
        setBookmarkGroupInputValue(value);
    };

    useEffect(() => {
        if (bookmarkGroupInputValue === '' || bookmarkGroupInputValue === null) {
            setBookmarkGroupNameError(true)
        } else {
            setBookmarkGroupNameError(false)
        }
    }, [bookmarkGroupInputValue]);

    if (!isOpen) {
        return;
    }

    return (
        <div>
            <div id="static-modal" style={{ zIndex: 999 }}
                className="backdrop-brightness-50 rounded-[20px] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
                aria-modal="true" role="dialog" aria-hidden="true">
                <div className={`relative p-4 w-full max-w-2xl max-h-full ${style}`}>

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div
                            className="flex items-center justify-between p-3 md:p-3 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Create New Bookmark Group
                            </h3>
                            <button onClick={onClose} type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="static-modal">
                                <RxCross2 size="24" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="text-left p-4 md:p-5 space-y-4">
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                    Bookmark Group Name
                                </label>
                                <input className={`shadow appearance-none border ${(bookmarkGroupNameError) ? 'border-red-500' : ''}  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                                    type="text"
                                    value={bookmarkGroupInputValue}
                                    onChange={(e) => handleInputChange(e)}
                                />

                                {(bookmarkGroupNameError) && (
                                    <p className="text-red-500 text-xs italic">Please enter bookmark group name</p>
                                )}

                            </div>

                        </div>

                        <div
                            className="flex  items-center gap-2 justify-end p-2 md:p-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button onClick={onClose} type="button"
                                className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                Close
                            </button>
                            <button onClick={() => handleBookmarkGroupSubmit()} type="button"
                                className={saveButtonStyle ? saveButtonStyle : `text-white bg-[#38A3BD]  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                                disabled={isLoading}>
                                {isLoading ? <Spinner styles="!w-4 !h-4" /> : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookmarkGroupModal
