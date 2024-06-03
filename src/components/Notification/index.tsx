import React from "react";
import {Alert, AlertColor, Snackbar, Typography} from "@mui/material";

type NotificationsProps = {
    open: boolean,
    msg:string,
    severity:AlertColor | undefined,
    handleClose: () => void
}

export const Notifications :React.FC <NotificationsProps> = ({
    open,
    msg,
    severity,
    handleClose,
    }) => {
  return (
      <Snackbar
          anchorOrigin={{vertical:"top", horizontal:"center"}}
          autoHideDuration={4000 }
          open={open}
          onClose={handleClose}
      >
          <Alert onClose={handleClose} severity={severity}
          ><Typography>{msg}</Typography></Alert>
      </Snackbar>
  )
}