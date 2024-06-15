import React from "react";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeaderComponent from '../../components/header';
import {characters} from "../../api/characters";


export const HomePage: React.FC<{}> = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/forum");
    };

    React.useEffect(()=>{
        {/* traer info d api, r se toma como result*/}
        characters.getAll({page:1}).then((r)=>{
            console.log(r.data.results)
        }).catch((e)=>{
            console.error(e)
        })
    })

    return (
        <Container maxWidth={"xl"}>
            <HeaderComponent
                title="MindWell"
                description="MidWell es un proyecto enfocado a ayudarte para sobrellevar la salud mental"
                element={
                    <Button fullWidth variant="contained" onClick={handleButtonClick}>
                        Regístrate
                    </Button>
                }
            />
        </Container>
    );
};

