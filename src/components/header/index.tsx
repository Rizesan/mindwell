import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";

type HeaderProps = {
    title: string;
    description: string;
    element?: React.ReactNode | null;
};

export const HeaderComponent: React.FC<HeaderProps> = ({ title, description, element }) => {
    return (
        <div>
            <Box sx={{ width: "100%", height: "350px" }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "100%" }}
                >
                    <Grid item xs={5}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ height: "100%" }}
                            spacing={2}
                        >
                            <Grid item>
                                <Typography variant="h1" align="center">
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ mt: 2 }} align="center">
                                    {description}
                                </Typography>
                            </Grid>
                            {element && (
                                <Grid item sx={{ mt: 4, width: "100%" }}>
                                    {element}
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
        </div>
    );
};

export default HeaderComponent;
