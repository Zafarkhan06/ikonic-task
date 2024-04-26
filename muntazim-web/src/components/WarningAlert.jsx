import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {IoAlertCircleOutline} from "react-icons/io5";
import DialogActions from "@mui/material/DialogActions";
import React from "react";

const WarningAlert = ({open, handleConfirm, handleCancel, alertMessage, confirmButtonText, cancelButtonText}) =>{
    return (
        <Dialog
            open={open}
            sx={{justifyContent: 'center',}}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title"
                         sx={{
                             display: 'flex',
                             flexWrap: 'wrap',
                             justifyContent: 'center',
                             width: 390,
                             padding: '15px 25px 12px 25px'
                         }}>
                <IoAlertCircleOutline size="62" color="#38A3BD"/>
                <span className=" text-[1rem] text-gray-400 w-full text-center">
                       { alertMessage}
                    </span>
            </DialogTitle>
            <DialogActions sx={{justifyContent: 'center', padding: '10px 25px 15px 25px'}}>
                <button onClick={handleConfirm}
                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                    { (confirmButtonText) ? confirmButtonText : `Yes, I'm sure` }
                </button>
                <button onClick={handleCancel}
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                    { (cancelButtonText) ? cancelButtonText : `No, cancel` }
                </button>
            </DialogActions>
        </Dialog>
    )
}

export default WarningAlert
