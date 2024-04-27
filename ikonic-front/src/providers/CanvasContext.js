import React, { useCallback, useContext, useRef, useState } from "react";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const drawingCanvasRef = useRef(null);
  const drawingContextRef = useRef(null);

  const [image, setImage] = useState();
  const [isTextMode, setIsTextMode] = useState(false);

  const [pencilWidth, setPencilWidth] = useState(2);
  const [pencilColor, setPencilColor] = useState('#000');

  const [eraserWidth, setEraserWidth] = useState(2);

  const [textSize, setTextSize] = useState('text-lg');
  const [textColor, setTextColor] = useState('#000');

  const prepareCanvas = (backgroundImageUrl) => {
    const canvas = canvasRef.current;
    const drawingCanvas = drawingCanvasRef.current;

    const context = canvas.getContext("2d");
    const drawingContext = drawingCanvas.getContext("2d");

    contextRef.current = context;
    drawingContextRef.current = drawingContext;

    const image = new Image();
    image.crossOrigin = "anonymous";


    image.onload = () => {
      const aspect = image.height / image.width;
      const editorContainer = document.getElementById('asset-container');
      const editorHeight = editorContainer.offsetHeight;
      const assetWidth = editorHeight / aspect;
      editorContainer.style.width = `${assetWidth} px`;

      canvas.width = assetWidth;
      canvas.height = editorHeight;
      drawingCanvas.width = assetWidth;
      drawingCanvas.height = editorHeight;
      image.width = assetWidth;
      image.height = editorHeight;

      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };

    image.src = backgroundImageUrl;
    setImage(backgroundImageUrl);
    pencilMode();
  };

  const startDrawing = ({ nativeEvent }) => {
    if (isTextMode) return;

    const { offsetX, offsetY } = nativeEvent;
    drawingContextRef.current.beginPath();
    drawingContextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    if (!isDrawing) return;

    drawingContextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    drawingContextRef.current.lineTo(offsetX, offsetY);
    drawingContextRef.current.stroke();
  };

  const clearCanvas = () => {
    prepareCanvas(image);
  }

  const resetDrawing = () => {
    const canvas = drawingCanvasRef.current;

    drawingContextRef.current.clearRect(0, 0, canvas.width, canvas.height);
  }

  const eraserMode = useCallback(() => {
    setIsTextMode(false);

    drawingContextRef.current.globalCompositeOperation = 'destination-out';
    drawingContextRef.current.lineWidth = eraserWidth;
  }, [drawingContextRef, eraserWidth]);

  const pencilMode = useCallback(() => {
    setIsTextMode(false);

    drawingContextRef.current.globalCompositeOperation = 'source-over';
    drawingContextRef.current.lineWidth = pencilWidth;
  }, [drawingContextRef, pencilWidth]);

  const textMode = useCallback(() => {
    setIsTextMode(true);
  }, []);

  const changePencilWidth = (width) => {
    drawingContextRef.current.lineWidth = width;
    setPencilWidth(width);
  }

  const changePencilColor = (color) => {
    drawingContextRef.current.strokeStyle = color;
    setPencilColor(color);
  }

  const changeEraserWidth = (width) => {
    drawingContextRef.current.lineWidth = width;
    setEraserWidth(width);
  }

  const resetState = useCallback(() => {
    setPencilWidth(2);
    setPencilColor('#000');
    setEraserWidth(2);
    setTextColor('#000');
    setTextSize('text-lg');
    drawingContextRef.current.lineWidth = 2;
    drawingContextRef.current.strokeStyle = '#000';
  }, [drawingContextRef]);

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        draw,
        eraserMode,
        pencilMode,
        textMode,
        drawingCanvasRef,
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
        resetState,
        resetDrawing,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);
