import { toast } from "react-toastify";

export const getGeneralAssetVideo = () => {
    return [
        { video: process.env.REACT_APP_GENERAL_ASSET_TUTORIAL_URL }
    ]
}

export const handleApiError = (error) => {
    if (error.response) {
        toastError(error.response.data.message);
    } else if (error.request) {
        toastError("No response received from the server");
    } else {
        toastError(`Error setting up the request ${error?.message}`);
    }
};

export const toastError = (errorMessage) => {
    toast.error(errorMessage);
};
