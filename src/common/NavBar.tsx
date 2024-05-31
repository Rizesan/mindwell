import React from "react";
import {AppBar, Box, Button, Container, Grid, Stack, Toolbar, Typography} from "@mui/material";

export const NavBar : React.FC<{}>= () => {
  return(
      <Box sx={{flexGrow:1 }} >

          <AppBar position={"fixed"}>
              <Toolbar>
                  <Container maxWidth={"xl"}>
                      <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                      >
                          <Grid item>
                              <Typography>Cheese</Typography>
                          </Grid>
                          <Grid item>
                              <Stack direction="row" spacing={2}>
                                  <Button variant="contained">Entra </Button>
                                  <Button variant="outlined">Regístrate</Button>
                              </Stack>
                          </Grid>
                      </Grid>
                  </Container>
              </Toolbar>
          </AppBar>
      </Box>
  )
}