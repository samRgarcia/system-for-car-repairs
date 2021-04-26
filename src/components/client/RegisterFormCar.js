import React, {useContext} from "react";
import {Grid,Container} from '@material-ui/core';
import {RegisterCarProblems} from "../Context/ContextRegisterCarProblems";
import InputTextGeneric from "../common/InputTextGeneric";


const RegisterFormCar = () => {
    const {registerProblems, setRegisterProblems} = useContext(RegisterCarProblems)

    const handlChange = (evt) => {
        setRegisterProblems({
            ...registerProblems,
            [evt.target.name]: evt.target.value
        })
    }
    return (
        <Container maxWidth="sm" style={{height:'500px',display:"flex",flexDirection:"column",justifyContent:"start",backgroundColor:"white",padding:"32px"}}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs={12} sm={6}>
                    <InputTextGeneric
                        Label="Model"
                        Name="model"
                        onChange={handlChange}
                        value={registerProblems.model}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputTextGeneric
                        Label="License place"
                        Name="license_place"
                        onChange={handlChange}
                        value={registerProblems.license_place}
                    />
                </Grid>

            </Grid>
        </Container>
    )

}
export default RegisterFormCar;
