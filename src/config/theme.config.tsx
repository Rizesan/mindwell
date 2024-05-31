import React, {JSX} from "react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

//provider para insertar información de manera global
type ThemeProp={
    children: JSX.Element
}

export enum themePalette {
    BG="#c2e7e4",
    LIME="#C8FA5F",
    FONT_GLOBAL= "'JetBrains Mono', monospace"
}
//
const theme = createTheme({
    palette:{
        mode:"dark",

        background:{
            default: themePalette.BG,
        },
        primary:{
            main: themePalette.LIME,
        }
    },
    typography:{
        fontFamily: themePalette.FONT_GLOBAL},
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform:"none",
                    boxShadow:"none",
                    borderRadius:"0.5em"
                }
            }
        }
    }

},

);
export const ThemeConfig: React.FC<ThemeProp>=({children})=>{
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
};