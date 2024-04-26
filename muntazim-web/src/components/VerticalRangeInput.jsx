import React from 'react';

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import './VerticalRangeInput.css';

const VerticalRangeInput = ({ value, setLevel, onChange, min, max }) => {
    const handlePreviousButton = () => {
        if (value > 0) {
            setLevel(value - 1)
        }
    }

    const handleNextButton = () => {
        if ((max - 1) > value) {
            setLevel(value + 1)
        }
    }

    return (
        <div className="transform rotate-90 origin-bottom h-[50px] w-[318px] absolute top-[30rem] left-[-9.9rem] bg-[#38A3BD] flex items-center">
            <span onClick={handlePreviousButton} className="cursor-pointer">
                <GrPrevious color="white" size="40" />
            </span>

            <div className="relative">
                <div className="flex justify-between w-60  h-7 pointer-events-none absolute top-[-12px]">
                    {Array.from({ length: max }).map((_, index) => (
                        <div
                            key={index}
                            className={`h-full w-0.5 bg-[#9FC3C7] ${index === 0 && 'first-child-point'} ${index === (max - 1) && 'last-child-point'}`}
                        />
                    ))}
                </div>

                <div className="flex w-60">
                    <input
                        type="range"
                        value={value}
                        onChange={onChange}
                        min={min}
                        max={max - 1}
                        step={1}
                        className="range-slider w-60"
                    />
                </div>
            </div>

            <span onClick={handleNextButton} className="cursor-pointer">
                <GrNext color="white" size="40" />
            </span>
        </div>
    );
};

export default VerticalRangeInput;
