import React, { useRef, useEffect } from 'react';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const ConfirmationAlert = ({ onConfirm, state, onCancel }, ref) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (ref) {
            ref.current = {
                openDialog: showConfirmation,
            };
        }
    }, [ref, state, onConfirm]);

    const showConfirmation = () => {
        dialogRef.current = MySwal.fire({
            title: <p className="">{`Are you sure you want to perform this operation on ?`}</p>,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, proceed!',
            cancelButtonText: 'No, cancel!',
            allowOutsideClick: false,
            allowEscapeKey: false,
        }).then((result) => {
            if (result.isConfirmed) {
                if (onConfirm) onConfirm();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                if (onCancel) onCancel();
                MySwal.fire('Cancelled', 'Operation cancelled.', 'info');
            }
        });
    };

    return (
        <div>
        </div>
    );
}

export default React.forwardRef(ConfirmationAlert);
