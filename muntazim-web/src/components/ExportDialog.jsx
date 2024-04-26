import { TiExport } from "react-icons/ti";

import { Dialog, DialogContent, DialogTitle } from "@mui/material";

function ExportDialog(props) {
  const { onClose, open } = props;

  return (
    <Dialog onClose={() => onClose(null)} open={open} fullWidth className="justify-center">
      <DialogTitle bgcolor='#38A3BD'>
        <div className="flex justify-center items-center gap-2">
          <TiExport color="white" size={30} />
          <p className="text-white">Export</p>
        </div>
      </DialogTitle>

      <DialogContent>
        <div className="flex my-2 gap-y-4 flex-col items-center justify-center divide-y-2 divide-cyan-400 divide-dashed">
          <h1 className="text-3xl cursor-pointer" onClick={() => onClose('download')}>Download Screenshot</h1>
          <h1 className="text-3xl cursor-pointer" onClick={() => onClose('clipboard')}>Send to Clipboard</h1>
          <h1 className="text-3xl cursor-pointer" onClick={() => onClose('cancel')}>Cancel</h1>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ExportDialog;