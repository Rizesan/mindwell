import React from "react";
import {Notifications} from "../components";
import {AlertColor} from "@mui/material";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type contextProps = {
    getError: (msg:string)=> void;
    getSuccess:(msg:string)=>void;
}
const NotificationContext = React.createContext<contextProps | null>(null)

export const NotificationProvider: React.FC <{children: JSX.Element}> = ({
    children,
})=> {
    const [msg, setMsg]= React.useState("")
    const [open, setOpen]= React.useState(false)
    const [severity, setSeverity]= React.useState <AlertColor | undefined>(undefined)

    const handleClose =()=> {
        setOpen(false)
    }
    const getError = (msg: string) => {
        setSeverity("error")
        setOpen(true)
        setMsg(msg)
    };
    const getSuccess = (msg: string) => {
        setSeverity("success")
        setOpen(true)
        setMsg(msg)
    };
    const value={
        getError,
        getSuccess
    }
    return (
        <NotificationContext.Provider value={value}>
            <Notifications handleClose={handleClose} open={open} severity={severity} msg={msg}/>
                {children}
        </NotificationContext.Provider>
    )
}
export const useNotification =()=> {
    const context= React.useContext(NotificationContext)
    if(!context) throw new Error("No existe contexto");
    return context
}