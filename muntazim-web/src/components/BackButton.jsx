import {MdArrowBackIos} from "react-icons/md";
import React from "react";
import {useNavigate} from "react-router-dom";

export const BackButton = ({style, parentStyle}) => {
    const navigate = useNavigate();
    return (
        <div className={`${parentStyle ? parentStyle : 'mb-4'}`}>
            <button className={`${ style ?  style : 'rounded-lg p-2 px-4 text-blue' } flex items-center text-blue`}
                    onClick={() => navigate(-1)}>
                <span> <MdArrowBackIos/></span><span> Back</span>
            </button>
        </div>
    )
}
