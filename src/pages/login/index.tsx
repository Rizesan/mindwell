import React from "react";
import {Box, Button, Container, Grid, Paper, Typography, TextField} from "@mui/material";

//Tipar
type LoginType={
    username:String;
    password:String;
}
export const LoginPage : React.FC<{}> = () => {
    //Funcionalidad del formulario por hook
    const [loginData, setLoginData]= React.useState({
        username:"",
        password:""
    });

    const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(loginData)
    }

    const dataLogin=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setLoginData({...loginData,[e.target.name]:e.target.value})
    };
    //Formulario
    return (
        <Container maxWidth={"sm"}>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{minHeight:"100vh"}}
            > <Grid item>
                    <Paper sx={{padding:"1.2em" , borderRadius:"0.5em"}}>
                        <Typography sx={{mt:1, mb:1}} variant="h4">Iniciar sesión</Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                name={"username"}
                                margin={"normal"}
                                type={"text"}
                                fullWidth
                                label={"Correo"}
                                sx={{mt:2, mb:1.5}}
                                required
                                onChange={dataLogin}
                            />
                            <TextField
                                name={"password"}
                                margin={"normal"}
                                type={"password"}
                                fullWidth
                                label={"Contraseña"}
                                sx={{mt:1.5, mb:1.5}}
                                required
                                onChange={dataLogin}
                            />
                            <Button
                                fullWidth
                                type="submit"
                                variant={"contained"}
                                sx={{mt:1.5, mb:1.5}}
                            >
                                Iniciar sesión
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};