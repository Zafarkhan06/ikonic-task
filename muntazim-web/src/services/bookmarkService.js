import axios from "axios";
import { getToken } from "../helpers/getToken";
import { setBookmarks, start, stop } from "../features/appSlice";
import { handleApiError } from "../helpers/api";
import { toast } from "react-toastify";

export const getBookmarks = async (dispatch) => {
    try {
        dispatch(start());

        const response = await axios.get(`${process.env.REACT_APP_URL}/api/bookmark/list`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        })

        dispatch(setBookmarks(response.data?.bookmarks));
        dispatch(stop());

        return response.data?.bookmarks;
    } catch (error) {
        handleApiError(error)
    }
}

export const createBookmarkGroup = async (bookmarkGroupName) => {
    try {

        const response = await axios.post(`${process.env.REACT_APP_URL}/api/folder/store`,
            {
                name: bookmarkGroupName
            },
            {
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            })
        if (response?.status === 201) {
            toast.success(response?.data?.message);
            return response?.data?.data;
        } else {
            toast.success('Error while creating bookmark group');
        }
        return 'undefined'
    } catch (error) {
        handleApiError(error)
    }
}

export const deleteBookmark = async (data) => {
    try {

        const response = await axios.delete(`${process.env.REACT_APP_URL}/api/bookmark/delete`,
            {
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                },
                data: data,
            })

        if (response?.status === 200) {
            toast.success(response?.data?.message);
            return response;
        } else {
            toast.success('Error while deleting bookmark');
        }

        return 'undefined'
    } catch (error) {
        handleApiError(error)
    }
}

export const getUserFolders = async () => {
    try {

        const response = await axios.get(`${process.env.REACT_APP_URL}/api/folder/list`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        })
        return response.data?.folders;
    } catch (error) {
        handleApiError(error)
    }
}


export const bookmarkCopyToFolders = async (folderIds, bookmarkId) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_URL}/api/bookmark/copy-to-folder`,
            {
                bookmark_id: bookmarkId,
                folder_ids: folderIds
            },
            {
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            })
        if (response?.status === 201) {
            toast.success(response?.data?.message);
            return response;
        } else {
            toast.error('Error while creating bookmark group');
        }
        return response;
    } catch (error) {
        handleApiError(error)
    }
}

export const getFolderBookmarks = async (folderId) => {
    try {
        const params = {
            folder_id: folderId,
        };
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/folder/bookmarks`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            },
            params
        })
        return response?.data;
    } catch (error) {
        handleApiError(error)
    }
}
