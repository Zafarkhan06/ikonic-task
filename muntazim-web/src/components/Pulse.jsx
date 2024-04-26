import React from "react";

const Pulse = ({ style }) => {
    return (
        <div className={`${style ? style : 'border border-blue-300 shadow rounded-md p-4 w-[80vw] md:w-[60vw] mx-auto mt-8'}`}>
            <div className="animate-pulse">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    <div className="h-24 w-full bg-gray-200 rounded "></div>
                    <div className="h-24 w-full bg-gray-200 rounded col-span-1"></div>
                    <div className="h-24 w-full bg-gray-200 rounded col-span-1"></div>
                </div>
            </div>
        </div>
    );
};

export default Pulse;
