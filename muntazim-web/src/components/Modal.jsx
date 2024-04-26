import React from 'react';
import PropTypes from 'prop-types';
import { RxCross2 } from "react-icons/rx";
import Spinner from "./Spinner";

const Modal = ({modelId, isOpen, onClose, title,  children, handleSubmit , isLoading, closeButtonTitle, saveButtonTitle, saveButtonStyle, style, copyToBookmarkId, copyToFolders, bookmarkGroupInputValue}) => {

    if (!isOpen) {
        return;
    }

    return (
       <div>
           <div id="static-modal" className="backdrop-brightness-50 rounded-[20px] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex" aria-modal="true" role="dialog"  aria-hidden="true">
               <div className={`relative p-4 w-full max-w-2xl max-h-full ${style}`}>

                   <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                       <div className="flex items-center justify-between p-3 md:p-3 border-b rounded-t dark:border-gray-600">
                           <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                               Create New Bookmark Group
                           </h3>
                           <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                               <RxCross2 size="24" />
                               <span className="sr-only">Close modal</span>
                           </button>
                       </div>

                       <div className="text-left p-4 md:p-5 space-y-4">
                           {children}
                       </div>

                       <div className="flex  items-center gap-2 justify-end p-2 md:p-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                           <button onClick={onClose}  type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                               { closeButtonTitle ? closeButtonTitle : ' Close'}
                           </button>
                           <button  onClick={() =>{
                               modelId === 1 ?  handleSubmit(copyToBookmarkId, copyToFolders) : handleSubmit(bookmarkGroupInputValue)
                           }
                           } type="button" className={ saveButtonStyle ? saveButtonStyle : `text-white bg-[#38A3BD]  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center`} disabled={isLoading}>
                               { isLoading ? <Spinner styles="!w-4 !h-4" /> : saveButtonTitle ? saveButtonTitle : 'Save'}
                           </button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    );

}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default Modal
