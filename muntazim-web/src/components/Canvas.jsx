import React, { forwardRef, useEffect, useState } from "react";

import { RxCross2 } from "react-icons/rx";

import { useCanvas } from "../providers/CanvasContext";

function Canvas({ backgroundImageUrl, editor, setEditor }, ref) {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    eraserMode,
    pencilMode,
    textMode,
    clearCanvas,
    drawingCanvasRef,
    textSize,
    textColor,
    resetState,
  } = useCanvas();

  const [inputs, setInputs] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [dragIndex, setDragIndex] = useState(-1);

  const [isTextMode, setIsTextMode] = useState(false);

  useEffect(() => {
    prepareCanvas(backgroundImageUrl);
    resetState();
  }, [backgroundImageUrl]);

  useEffect(() => {
    setIsTextMode(false);

    if (editor === 'eraser') {
      eraserMode();
    }

    if (editor === 'pencil') {
      pencilMode();
    }

    if (editor === 'undo') {
      clearCanvas();
      pencilMode();
      setEditor('pencil');
      setDragging(false);
      setInputs([]);
    }

    if (editor === 'reset-text') {
      pencilMode();
      setEditor('pencil');
      setDragging(false);
      setInputs([]);
    }

    if (editor === 'text') {
      textMode();
      setIsTextMode(true);
    }
  }, [editor]);

  const addInput = (x, y) => {
    const newInput = {
      key: Math.random().toString(36).substr(2, 9),
      x,
      y,
      value: '',
      textColor,
      textSize,
    };
    setInputs([...inputs, newInput]);
  };

  const handleCanvasClick = (e) => {
    if (!isTextMode) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    addInput(x, y);
  };

  const startDragging = (index, e) => {
    e.stopPropagation();
    setDragIndex(index);
    setDragging(true);
  };

  const onDrag = (e) => {
    if (dragging) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newInputs = [...inputs];
      newInputs[dragIndex] = { ...newInputs[dragIndex], x, y };
      setInputs(newInputs);
    }
  };

  const stopDragging = () => {
    setDragging(false);
    setDragIndex(-1);
  };

  function handleRemoveInput(index) {
    const newInputs = [...inputs];

    newInputs.splice(index, 1);

    setInputs([...newInputs]);
  }

  function handleInputChange(index, e) {
    const newInputs = [...inputs];

    newInputs[index].value = e.target.value;

    setInputs([...newInputs]);
  }

  return (
    <div onMouseMove={onDrag} className="w-full h-full" onMouseUp={stopDragging} ref={ref}>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        onClick={handleCanvasClick}
        ref={canvasRef}
        style={{ position: "absolute" }}
      />
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        onClick={handleCanvasClick}
        ref={drawingCanvasRef}
        style={{ position: "absolute" }}
      />

      {inputs.map((input, index) => (

        <div key={input.key} style={{ position: 'absolute', left: input.x, top: input.y }}>
          {isTextMode ? (
            <div className="flex items-center">
              <div className="bg-black p-[2px]">
                <RxCross2
                  color="white"
                  size={
                    input.textSize === 'text-lg' ? 30
                      : input.textSize === 'text-2xl' ? 35
                        : input.textSize === 'text-3xl' ? 40 : 45}
                  onClick={() => handleRemoveInput(index)}
                />
              </div>

              <input
                onMouseDown={(e) => startDragging(index, e)}
                type="text"
                value={input.value}
                onChange={(e) => handleInputChange(index, e)}
                style={{ color: input.textColor }}
                className={`block z-10 w-32 py-1 ${input.textSize} border border-gray-300 bg-gray-50 focus:none outline-none`}
              />
            </div>
          ) : (
            <p style={{ color: input.textColor }} className={`block w-full p-1 ${input.textSize} border border-gray-300 bg-gray-200`}>
              {input.value}
            </p>
          )}
        </div>

      ))}

    </div>
  );
}

export default forwardRef(Canvas);
