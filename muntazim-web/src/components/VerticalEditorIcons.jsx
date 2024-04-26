import React, { useState } from 'react';

import { FaEraser } from "react-icons/fa";
import { CiText } from "react-icons/ci";
import { LiaUndoAltSolid } from "react-icons/lia";

import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

import { useCanvas } from '../providers/CanvasContext';
import ResetDialog from './ResetDialog';

const VerticalEditorIons = ({ editor, setEditor }) => {
    const {
        pencilWidth,
        changePencilWidth,
        pencilColor,
        changePencilColor,
        eraserWidth,
        changeEraserWidth,
        textSize,
        setTextSize,
        textColor,
        setTextColor,
        resetDrawing,
    } = useCanvas();

    const [open, setOpen] = useState(false);

    const [pencilAnchor, setPencilAnchor] = useState(null);
    const [openPencil, setOpenPencil] = useState(false);

    const [eraserAnchor, setEraserAnchor] = useState(null);
    const [openEraser, setOpenEraser] = useState(false);

    const [textAnchor, setTextAnchor] = useState(null);
    const [openText, setOpenText] = useState(false);

    function handleClose(value) {
        if (value === 'reset-text') {
            setEditor(value);
        }

        if (value === 'reset-drawing') {
            resetDrawing();
        }

        if (value === 'reset-all') {
            setOpenPencil(false);
            setOpenEraser(false);
            setOpenText(false);
            setEditor('undo');
        }

        setOpen(false);
    }

    return (
        <div className="absolute top-[23rem] left-0 bg-[#38A3BD]">

            <ResetDialog
                open={open}
                onClose={handleClose}
            />

            <div className='flex items-center flex-col gap-5 py-4 px-2'>
                <div className='w-10 h-4' ref={setPencilAnchor} aria-describedby="pencil-placement-popper">
                    <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' onClick={() => {
                        if (editor === 'pencil') {
                            setOpenPencil(!openPencil);
                        }

                        setOpenEraser(false);
                        setOpenText(false);
                        setEditor('pencil');
                    }} viewBox="0 0 32.96 18.95" >
                        <g data-name="Layer 2">
                            <path
                                d="M1.43 16.47c3-9.33 15-17.33 18-14.33s-3 13 1 15 11-6 11-12"
                                style={{
                                    fill: "none",
                                    stroke: editor === 'pencil' ? 'white' : '#9ca3af',
                                    strokeMiterlimit: 10,
                                    strokeWidth: 3,
                                }}
                                data-name="toolbox Edit"
                            />
                        </g>
                    </svg>

                    <BasePopup
                        id="pencil-placement-popper"
                        open={openPencil}
                        anchor={pencilAnchor}
                        className=" bg-[#38A3BD] ml-2 rounded-md"
                        placement={'right'}
                        offset={4}
                    >
                        <div className='p-2 flex flex-col gap-4'>
                            <h1 className='text-white text-2xl font-bold'>Draw</h1>

                            <div>
                                <p className='text-white text-md font-semibold'>Pen Size</p>

                                <div className='flex gap-x-4 items-center'>
                                    <span
                                        className={`${pencilWidth === 2 ? 'bg-white' : 'bg-gray-400'} w-3 h-3 rounded-full cursor-pointer`}
                                        onClick={() => changePencilWidth(2)}
                                    />
                                    <span
                                        className={`${pencilWidth === 4 ? 'bg-white' : 'bg-gray-400'} w-4 h-4 rounded-full cursor-pointer`}
                                        onClick={() => changePencilWidth(4)}
                                    />
                                    <span
                                        className={`${pencilWidth === 8 ? 'bg-white' : 'bg-gray-400'} w-6 h-6 rounded-full cursor-pointer`}
                                        onClick={() => changePencilWidth(8)}
                                    />
                                    <span
                                        className={`${pencilWidth === 16 ? 'bg-white' : 'bg-gray-400'} w-8 h-8 rounded-full cursor-pointer`}
                                        onClick={() => changePencilWidth(16)}
                                    />
                                </div>
                            </div>

                            <input type="color" value={pencilColor} onChange={(e) => changePencilColor(e.target.value)} />
                        </div>
                    </BasePopup>
                </div>

                <div ref={setEraserAnchor} aria-describedby="eraser-placement-popper">
                    <FaEraser
                        size="40"
                        onClick={() => {
                            if (editor === 'eraser') {
                                setOpenEraser(!openEraser);
                            }

                            setOpenPencil(false);
                            setOpenText(false);
                            setEditor('eraser');
                        }}
                        color={editor === 'eraser' ? 'white' : '#9ca3af'}
                        className='cursor-pointer mt-1'
                    />

                    <BasePopup
                        id="eraser-placement-popper"
                        open={openEraser}
                        anchor={eraserAnchor}
                        className="bg-[#38A3BD] ml-2 rounded-md"
                        placement={'right'}
                        offset={4}
                    >
                        <div className='p-2 flex flex-col gap-2'>
                            <h1 className='text-white text-2xl font-bold'>Erase</h1>

                            <div>
                                <p className='text-white text-md font-semibold'>Eraser Size</p>

                                <div className='flex gap-x-4 items-center'>
                                    <span
                                        className={`${eraserWidth === 2 ? 'bg-white' : 'bg-gray-400'} w-3 h-3 rounded-full cursor-pointer`}
                                        onClick={() => changeEraserWidth(2)}
                                    />
                                    <span
                                        className={`${eraserWidth === 4 ? 'bg-white' : 'bg-gray-400'} w-4 h-4 rounded-full cursor-pointer`}
                                        onClick={() => changeEraserWidth(4)}
                                    />
                                    <span
                                        className={`${eraserWidth === 8 ? 'bg-white' : 'bg-gray-400'} w-6 h-6 rounded-full cursor-pointer`}
                                        onClick={() => changeEraserWidth(8)}
                                    />
                                    <span
                                        className={`${eraserWidth === 16 ? 'bg-white' : 'bg-gray-400'} w-8 h-8 rounded-full cursor-pointer`}
                                        onClick={() => changeEraserWidth(16)}
                                    />
                                </div>
                            </div>
                        </div>
                    </BasePopup>
                </div>

                <div ref={setTextAnchor} aria-describedby="text-placement-popper">
                    <CiText
                        size="40"
                        color={editor === 'text' ? 'white' : '#9ca3af'}
                        onClick={async () => {
                            if (editor === 'text') {
                                setOpenText(!openText);
                            }

                            setOpenPencil(false);
                            setOpenEraser(false);

                            setEditor('text');
                        }}
                        className='cursor-pointer'

                    />

                    <BasePopup
                        id="eraser-placement-popper"
                        open={openText}
                        anchor={textAnchor}
                        className="bg-[#38A3BD] ml-2 rounded-md"
                        placement={'right'}
                        offset={4}
                    >
                        <div className='p-2 flex flex-col gap-2'>
                            <h1 className='text-white text-2xl font-bold'>Type</h1>

                            <div>
                                <p className='text-white text-md font-semibold'>Text Size</p>

                                <div className='flex gap-x-4 items-center'>
                                    <span
                                        className={`${textSize === 'text-lg' ? 'text-white' : 'text-gray-400'} text-lg cursor-pointer`}
                                        onClick={() => setTextSize('text-lg')}>A</span>
                                    <span
                                        className={`${textSize === 'text-2xl' ? 'text-white' : 'text-gray-400'} text-2xl cursor-pointer`}
                                        onClick={() => setTextSize('text-2xl')}>A</span>
                                    <span
                                        className={`${textSize === 'text-3xl' ? 'text-white' : 'text-gray-400'} text-3xl cursor-pointer`}
                                        onClick={() => setTextSize('text-3xl')}>A</span>
                                    <span
                                        className={`${textSize === 'text-4xl' ? 'text-white' : 'text-gray-400'} text-4xl cursor-pointer`}
                                        onClick={() => setTextSize('text-4xl')}>A</span>
                                </div>
                            </div>

                            <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
                        </div>
                    </BasePopup>

                </div>
                <LiaUndoAltSolid size="40" onClick={() => setOpen(true)} color={editor === 'undo' ? 'white' : '#9ca3af'} className='cursor-pointer' />
            </div>
        </div>
    );
};

export default VerticalEditorIons;
