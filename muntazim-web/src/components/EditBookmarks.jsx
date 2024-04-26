import { RxCross2 } from "react-icons/rx";
import { MdDriveFolderUpload } from "react-icons/md";
import Pulse from "./Pulse";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {useDispatch, useSelector} from "react-redux";
import BookmarkCopyToFolderModal from "./BookmarkCopyToFolderModal";
import { useEffect, useState } from "react";
import { bookmarkCopyToFolders, getUserFolders } from "../services/bookmarkService";
import { toast } from "react-toastify";
import {setBookmarks} from "../features/appSlice";


const EditBookmarks = ({ deleteBookmark }) => {
    const { isLoading, bookmarks } = useSelector(state => state.app);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [userFolders, setUserFolders] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [checkedFolders, setCheckedFolders] = useState([]);
    const [copyToBookmarkId, setCopyToBookmarkId] = useState(null);

    const onCloseModal = () => {
        setCheckedFolders([]);
        setIsModalOpen(false)
    }

    useEffect(() => {
        getUserFolders().then(result => {
            setUserFolders(result)
        })
    }, [bookmarks]);

    const handleBookmarkCopyToFolderSubmit = () => {
        setIsSubmitted(true)
        if (checkedFolders.length > 0) {
            bookmarkCopyToFolders(checkedFolders, copyToBookmarkId).then(result => {
                setIsModalOpen(false)
                setIsSubmitted(false);
                setCheckedFolders([])
                if (result?.status === 201){
                    dispatch(setBookmarks(bookmarks.filter(bookmark => bookmark.id != copyToBookmarkId)));
                }
            })
        } else {
            toast.error('Please select bookmark groups');
            setIsSubmitted(false);
        }
    }
    return (
        <div>

            <BookmarkCopyToFolderModal
                userFolders={userFolders}
                setCheckedFolders={setCheckedFolders}
                checkedFolders={checkedFolders}
                isOpen={isModalOpen}
                onClose={onCloseModal}
                isLoading={isSubmitted}
                handleBookmarkCopyToFolderSubmit={handleBookmarkCopyToFolderSubmit}
                style='!max-w-[25rem]'
            />

            <div className=" items-center  rounded-lg dark:text-white  dark:border-gray-700 ">
                <div className="flex justify-center gap-x-4 items-center">
                    <h1 className="text-xl text-blue capitalize font-bold">Bookmarks</h1>
                </div>
                <div className="h-[166px] overflow-auto flex gap-x-10 md:gap-x-10 flex-wrap gap-4 mt-3 justify-center scrollbar-hide">
                    {isLoading ? (
                        <Pulse />
                    ) : (
                        bookmarks
                            .filter(bookmark => !bookmark.is_folder)
                            .map(bookmark => (
                                <div key={bookmark.id} className="w-[40%] md:w-[10%] sm:w-[20%]  relative ">
                                    <div className="absolute flex w-[87%]  top-0 right-[6px] md:right-[0px] sm:right-[10px]">
                                        <span className="cursor-pointer" onClick={() => deleteBookmark(bookmark.id, 0, null)}>
                                            <RxCross2 className="drop-shadow-xl" color="white" fontSize="24"
                                                fontWeight="bold" />
                                        </span>
                                        <span className="cursor-pointer" onClick={() => {
                                            setCopyToBookmarkId(bookmark.id)
                                            setIsModalOpen(true)
                                        }}>
                                            <MdDriveFolderUpload className="drop-shadow" color="white" fontSize="24" />
                                        </span>
                                    </div>
                                    <LazyLoadImage
                                        className="m-auto rounded h-[100px] object-cover"
                                        src={bookmark?.asset?.thumbnail}
                                        alt={bookmark?.asset?.key}
                                    />
                                    <h1>{bookmark?.asset?.title}</h1>
                                </div>
                            ))
                    )}
                </div>
            </div>
        </div>

    );
}

export default EditBookmarks
