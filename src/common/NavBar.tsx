import React from "react";
import { AppBar, Box, Button, Container, Grid, Stack, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png"; // Ajusta la ruta según sea necesario

export const NavBar: React.FC<{}> = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position={"sticky"}>
                <Toolbar>
                    <Container maxWidth={"xl"}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <Box display="flex" alignItems="center" onClick={() => navigate("/")}>
                                    <img src={logo} alt="logo" style={{ cursor: 'pointer', marginRight: '10px', height: '40px' }} />
                                    <Typography>Cheese</Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <Button variant="contained" onClick={() => navigate("login")}>Entra</Button>
                                    <Button variant="outlined" onClick={()=> navigate("forum")}>Regístrate</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
