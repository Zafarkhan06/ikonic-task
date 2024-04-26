import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { useSwipeable } from 'react-swipeable';
import { BsArrowsFullscreen } from "react-icons/bs";
import { RiDragMove2Line } from "react-icons/ri";
import { IoPencilSharp } from "react-icons/io5";
import Button from '@mui/material/Button';

import { Box, CircularProgress, Modal } from "@mui/material";
import { FaAngleRight } from "react-icons/fa6";

import { useToPng } from "@hugocxl/react-to-image";
import { toast } from "react-toastify";

import Spinner from "../components/Spinner";
import VerticalRangeInput from "../components/VerticalRangeInput";
import WarningAlert from "../components/WarningAlert";
import VerticalEditorIons from "../components/VerticalEditorIcons";
import Canvas from "../components/Canvas";
import NoteList from "../components/NoteList";
import ExportDialog from "../components/ExportDialog";

import { ucFirst, copyToClipboard } from "../helpers/string";


const Annotation = () => {
    const history = useNavigate();

    const handlers = useSwipeable({
        onSwiping: (e) => handleSwiping(e),
        onTouchStartOrOnMouseDown: ({ event }) => event.preventDefault(),
        touchEventOptions: { passive: false },
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    const { currentAsset, currentCategory } = useSelector(state => state.app);

    const layers = currentAsset?.layers;
    const frames = currentAsset?.frames;

    const [level, setLevel] = useState(0);
    const [index, setIndex] = useState(0);
    const [canvasImage, setCanvasImage] = useState();
    const [exportImage, setExportImage] = useState(null);

    const [activeIcon, setActiveIcon] = useState(0);
    const [editor, setEditor] = useState('pencil');
    const [notes, setNotes] = useState([]);

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState();

    const [isExporting, setIsExporting] = useState(false);

    const [backToRotation, setBackToRotation] = useState(false);

    const [imageUrls, setImageUrls] = useState([]);
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [isWarning, setIsWarning] = useState(false);

    const pageHeading = `${currentAsset?.type === 'model' ? '3D ' + currentAsset?.title + ' ' + ucFirst(currentAsset?.type) : currentAsset?.title + ' ' + ucFirst(currentAsset?.type)}`;

    const [__, templateToPng, templateRef] = useToPng({
        width: canvasImage?.width,
        height: canvasImage?.height,
        onSuccess: (data) => setExportImage(data),
        onError: (error) => {
            setIsExporting(false);

            toast.error(error);
        }
    });

    useEffect(() => {
        if (exportImage && isExporting) {

            if (selectedValue === 'download') {
                const link = document.createElement('a');
                link.download = 'VC-Screenshot.png';
                link.href = exportImage;
                link.click();
            } else if (selectedValue === 'clipboard') {
                copyToClipboard(exportImage);

                toast.success('Copied to clipboard');
            }

            setIsExporting(false);
            setExportImage(null);
        }
    }, [exportImage, selectedValue, isExporting]);

    const [_, containerToPng, containerRef] = useToPng({
        onSuccess: (data) => {
            setCanvasImage(data);

            setTimeout(() => {
                templateToPng();
            }, 200);
        },
        onError: (error) => {
            setIsExporting(false);

            toast.error(error);
        }
    });


    const handleSwiping = ({ dir, absX }) => {
        if (dir === "Right" && absX % 10 === 0) {
            if (index > 0 && currentAsset?.type === 'model') {
                setIndex((prev) => {
                    const i = prev - 1;
                    setImage(imageUrls[level][i]);
                    return i;
                });
            } else {
                setIndex(parseInt(frames));
            }
        } else if (dir === "Left" && absX % 10 === 0) {
            if (index < imageUrls[level].length && currentAsset?.type === 'model') {
                setIndex((prev) => {
                    const i = prev + 1;
                    setImage(imageUrls[level][i]);
                    return i < imageUrls[level].length - 1 ? i : 0;
                });
            }
        }
    }

    useEffect(() => {
        const id = currentAsset?.from === 'api' ? currentAsset?.id : currentAsset?.app_asset_id
        const baseImageUrl = `https://content.visualhealthsolutions.com/vhs_web/assets/${id}/layers/${id}_L0`;

        async function getUrls() {
            for (let layer = 1; layer <= layers; layer++) {
                const layerUrls = [];

                for (let frame = 1; frame <= frames; frame++) {
                    const formattedFrame = String(frame).padStart(2, '0');
                    const imageUrl = `${baseImageUrl}${layer}_${formattedFrame}.jpg`;

                    try {
                        await preloadImage(imageUrl);

                        layerUrls.push(imageUrl);
                    } catch (e) {
                        console.error(e)
                    }

                }

                setImageUrls((prev) => [...prev, [...layerUrls]]);
            }
        }

        if (currentAsset?.type === 'model') {
            getUrls();
        }

        if (currentAsset?.type === 'illustration') {
            const id = currentAsset?.from === 'api' ? currentAsset?.id : currentAsset?.app_asset_id
            setImage(`https://content.visualhealthsolutions.com/vhs_web/assets/${id}/${id}.jpg`);
            setIsLoading(false);
            setActiveIcon(1)
            setBackToRotation(false);
        }

    }, [currentAsset]);

    useEffect(() => {
        if (isLoading && imageUrls.length >= level && imageUrls[level]?.length >= index) {
            setImage(imageUrls[level][index]);
            setIsLoading(false);
        }
    }, [imageUrls]);

    useEffect(() => {
        if (imageUrls.length >= level && imageUrls[level]?.length >= index) {
            setImage(imageUrls[level][index]);
        } else if (['models', 'model'].includes(currentAsset.type)) {
            setIsLoading(true);
        }
    }, [level]);

    const preloadImage = (imageUrl) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = imageUrl;

            img.onload = () => {
                resolve(img);
            };

            img.onerror = (error) => {
                reject(error)
            };
        });
    };

    const handleLevelChange = (event) => {
        setLevel(parseInt(event.target.value))
    }


    const handleAnnotationClose = () => {
        setIsWarning(false)
    }

    const handleBackToRotation = () => {
        setIsWarning(true);
        setBackToRotation(false);
    }

    const handleWarningClose = () => {
        setIsWarning(false)
    }

    const handleClose = (value) => {
        if (!value || value === 'cancel') {
            setOpen(false);
            return;
        }

        setOpen(false);
        setSelectedValue(value);
        setIsExporting(true);

        if (activeIcon === 0) {
            setCanvasImage(image);
            setTimeout(() => {
                templateToPng();
            }, 100);
        } else {
            setTimeout(() => {
                containerToPng();
            }, 100);
        }
    }

    if (isLoading || !image) {
        return (
            <div className="h-[calc(100vh-50px)] relative">
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Spinner />
                </span>
            </div>
        );
    }


    return (
        <div className="h-screen">
            <WarningAlert
                open={isWarning}
                handleCancel={handleWarningClose}
                alertMessage={`Discard changes and return to rotate mode.  Do you wish to continue?`}
                confirmButtonText={`Continue`}
                handleConfirm={handleAnnotationClose}
            />

            <Modal open={isExporting}>
                <Box className="w-full h-full flex justify-center items-center bg-white ">
                    <CircularProgress />
                </Box>
            </Modal>

            <ExportDialog
                open={open}
                onClose={(value) => handleClose(value)}
            />

            <div ref={templateRef} className={isExporting ? 'flex flex-col items-center justify-center mt-2 bg-gray-100' : 'hidden'}>

                <div className="flex flex-row items-center justify-center mb-2">
                    <img src="/assets/logo.png" alt="logo" className="h-16 w-16 object-contain" />
                    <h1 className="text-4xl text-yellow font-bold">
                        Edge
                    </h1>

                    <h1 className="pl-2 text-2xl font-semibold">Visual Consult</h1>
                </div>

                <div className="flex flex-row items-center justify-center mb-2">
                    <h1 className="text-2xl">
                        Date:
                    </h1>

                    <h1 className="ml-2 text-2xl bg-white px-2 py-1">{new Date(Date.now()).toLocaleDateString("en-US")}</h1>
                </div>

                <img src={canvasImage} alt="" />

                {notes.length > 0 && (
                    <div className="w-full m-4">
                        <h1 className="text-4xl font-semibold">Notes</h1>

                        <div className="bg-white text-left p-4 mx-4">
                            {notes.map((note, index) => (
                                <h1 className="text-xl text-gray-500" key={index}>{note.task}</h1>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-gray-100 flex flex-row items-center justify-between p-3 rounded-lg w-full">
                <div className="flex flex-row items-center gap-x-1">
                    <Link to="/" className="text-gray-500 text-lg font-light">Home</Link>


                    {localStorage.getItem('prevRoute') !== 'home' && (

                        <div className="flex flex-row items-center gap-x-1">
                            <FaAngleRight color="#6b7280" />

                            <span className="text-gray-500 text-lg font-light cursor-pointer" onClick={() => history(-2)}>Category - {currentCategory?.title}</span>
                        </div>

                    )}

                    {localStorage.getItem('prevRoute') !== 'home' && (

                        <div className="flex flex-row items-center gap-x-1">
                            <FaAngleRight color="#6b7280" />

                            <span className="text-gray-500 text-lg font-light cursor-pointer" onClick={() => history(-1)}>
                                {currentAsset?.type === 'model' ? '3D ' + currentAsset?.type : ucFirst(currentAsset?.type)}
                            </span>
                        </div>

                    )}

                    <FaAngleRight color="#6b7280" />

                    <span className="text-lg font-medium cursor-pointer">{currentAsset?.title}</span>
                </div>

                <Button color="success" style={{ color: 'white', backgroundColor: '#38A3BD' }} size="medium" onClick={() => setOpen(true)}>
                    Export
                </Button>
            </div>

            <div>
                <div className="flex">
                    <div className="grow relative">
                        <div className="">
                            {
                                (backToRotation) && (
                                    <span onClick={() => handleBackToRotation()} className="cursor-pointer absolute z-10 top-[16rem] left-[38px]">
                                        <BsArrowsFullscreen size="24" color="#8497AA" />
                                    </span>
                                )
                            }

                            <div className="h-[calc(100vh-50px)] relative" id="asset-container">

                                {activeIcon === 0 ? (
                                    <div {...handlers} className="h-full image-container" >
                                        <img className="h-full object-cover" src={image} alt='img' loading="lazy" />
                                    </div>
                                ) : (
                                    <div className="w-full h-full">
                                        <Canvas backgroundImageUrl={image} editor={editor} setEditor={setEditor} ref={containerRef} />
                                    </div>
                                )}

                                <div>
                                    {currentAsset?.type === 'model' && (
                                        <div className="absolute top-[13rem] bg-[#38A3BD] left-0 py-2 px-1">
                                            <div className="flex flex-col justify-center gap-y-3 items-center ">
                                                <span onClick={() => setActiveIcon(0)} className="cursor-pointer">
                                                    <RiDragMove2Line size="45" color={activeIcon === 0 ? 'white' : '#9ca3af'} />
                                                </span>
                                                <span onClick={() => setActiveIcon(1)} className="bg-[#38A3BD] cursor-pointer">
                                                    <IoPencilSharp size="40" color={activeIcon === 1 ? 'white' : '#9ca3af'} />
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {activeIcon === 0 ? (
                                        <VerticalRangeInput
                                            value={level}
                                            setLevel={setLevel}
                                            onChange={handleLevelChange}
                                            min={0}
                                            max={layers}
                                        />
                                    ) : (
                                        <VerticalEditorIons editor={editor} setEditor={setEditor} />
                                    )}
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="bg-gray-50 w-1/4">
                        <NoteList notes={notes} title={pageHeading} setNotes={setNotes} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Annotation
