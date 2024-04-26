import axios from "axios";
import { getToken } from "../helpers/getToken";
import { toast } from 'react-toastify';
import XMLParser from "react-xml-parser";
import { setFavouriteCategories, start, stop } from "../features/appSlice";

export const getCategories = async (dispatch) => {
    try {
        dispatch(start());

        const response = await axios.get(`${process.env.REACT_APP_URL}/api/category/all`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        });

        dispatch(setFavouriteCategories(response.data?.categories));
        dispatch(stop());

    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
}

export const getFavoriteCategories = async (dispatch) => {
    try {
        dispatch(start());

        const response = await axios.get(`${process.env.REACT_APP_URL}/api/category/get`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        })

        dispatch(stop());
        return response.data?.categories;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
}

export const setCategoryAssetsFromXml = async (currentCategory, type, assetType) => {
    try {
        const thumbnailBaseUrlTutorial = "https://content.visualhealthsolutions.com/vc/modules/thumbnail";
        const videoBaseUrlTutorial = "https://s3.amazonaws.com/vhs-patientnexus/tutorials/vc";
        const videoBaseUrl = "https://s3.amazonaws.com/vhs_web/assets";
        const iconBaseUrl = `https://content.visualhealthsolutions.com/vc/media/img/icon/${assetType}.svg`;
        const categoryAssetsXmlBaseUrl = `https://content.visualhealthsolutions.com/vc/modules`;
        const videoTypeModules = ["animation", "program"];
        const resultMap = new Map();
        const excludedCovid19Assets = ['vpl_0932_001', 'vpl_1102_001'];

        await Promise.all(
            currentCategory.modules.map(async (module) => {
                let response = await axios.get(`${categoryAssetsXmlBaseUrl}/${module.key}/manifest.xml`);
                if (response.data) {
                    const xml = new XMLParser().parseFromString(response.data);
                    const results = xml.getElementsByTagName(assetType);
                    results[0].children.map((cat) => {
                        const isTutorial = cat.attributes.type === "tutorial";
                        const thumbnailType = isTutorial ? "tutorial" : "asset";
                        const videoUrl = isTutorial ? videoBaseUrlTutorial : videoBaseUrl;

                        const hasTutorialVideo = isTutorial && !videoTypeModules.includes(cat.attributes.type);
                        const tutorialVideo = hasTutorialVideo ? { tutorial_video: `${videoBaseUrlTutorial}/${cat.attributes.id}.mp4` } : {};

                        const hasVideo = videoTypeModules.includes(cat.attributes.type);
                        const video = hasVideo ? { video: `${videoUrl}/${cat.attributes.id}/${cat.attributes.id}-mp4.mp4` } : {};
                        const childrenResults = cat.children.map((children, index) => {
                            return {
                                ...children.attributes,
                                video: `${videoUrl}/${cat.attributes.id}/${children.attributes.id}-mp4.mp4`
                            };
                        });

                        const item = {
                            ...cat.attributes,
                            thumbnail: `${thumbnailBaseUrlTutorial}/${thumbnailType}/${cat.attributes.id}.jpg`,
                            icon: iconBaseUrl,
                            has_video: hasVideo,
                            has_tutorial_video: hasTutorialVideo,
                            from: 'api',
                            ...video,
                            ...tutorialVideo,
                            children: childrenResults
                        };

                        // Use the id property to check for duplicates
                        const itemId = cat.attributes.id;
                        // const itemTitle = cat.attributes.title;
                        if (!resultMap.has(itemId) && !excludedCovid19Assets.includes(item.id)) {
                            resultMap.set(itemId, item);
                        }

                        return item;
                    });
                }
            })
        );

        // Convert the Map values back to an array
        return Array.from(resultMap.values());

    } catch (error) {

        const errorMessage = error?.response?.data?.message || "An error occurred.";
        toast.error(errorMessage);
    }
};


export const getCategoriesCount = async (key) => {
    const categoryAssetsXmlBaseUrl = `https://content.visualhealthsolutions.com/vc/modules`;

    try {
        const response = await axios.get(`${categoryAssetsXmlBaseUrl}/${key}/manifest.xml`);

        if (response.data) {
            const xml = new XMLParser().parseFromString(response.data);

            const count = ["models", "illustrations", "animations", "programs"].map((cate) => {
                const childCate = xml.children.find((children) => children.name === cate);

                return childCate.children.length;
            });

            return count.reduce((partialSum, a) => partialSum + a, 0);
        }

        return 0;
    } catch (error) {
        console.error(error);

        throw new Error(error);
    }
}
