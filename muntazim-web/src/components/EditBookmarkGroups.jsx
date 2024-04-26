import {useSelector} from "react-redux";
import Pulse from "./Pulse";
import FolderIcon from "@mui/icons-material/Folder";
import {RxCross2} from "react-icons/rx";
import React from "react";
import {Link} from "react-router-dom";

const EditBookmarkGroups = ({deleteBookmark}) =>{
    const {isLoading, bookmarks} = useSelector(state => state.app);

    return(
        <div>
            <div className=" items-center  rounded-lg dark:text-white  dark:border-gray-700 mt-5">
                <div className="flex justify-center gap-x-4 items-center">
                    <h1 className="text-xl text-blue capitalize font-bold">Bookmark Groups</h1>
                </div>
                <div className="h-[250px] overflow-auto flex gap-x-10 md:gap-x-20 flex-wrap gap-4 mt-3 justify-center">
                    {isLoading ? (
                        <Pulse />
                    ) : (
                        bookmarks
                            .filter(bookmark => bookmark.is_folder)
                            .map(bookmark => (
                                <div key={bookmark.id} className="cursor-pointer relative h-[125px]">
                                    <Link to={`/folder-bookmarks/${bookmark.folder_id}`}>
                                        <FolderIcon style={{fontSize: 100}} className="text-blue"/>
                                        <h1>{bookmark.folder_name}</h1>
                                    </Link>
                                        <div
                                            className="bg-black/20 absolute w-[84%] bottom-[41px] right-[8px] rounded-b-[10px] bg-opacity-10">
                                        <span
                                            onClick={() => deleteBookmark(bookmark.id, bookmark.is_folder, bookmark.folder_id)}>
                                             <RxCross2 className="drop-shadow-xl"
                                                       color="white"
                                                       fontSize="24"
                                                       fontWeight="bold"/>
                                        </span>
                                        </div>
                                </div>
                            ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default EditBookmarkGroups
