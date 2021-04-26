import React, {useContext} from "react";
import {RegisterCarProblems} from "../Context/ContextRegisterCarProblems";
import InputTextGeneric from "../common/InputTextGeneric";
import ButtonGeneric from "../common/ButtonGeneric";
import ProblemsList from "./ProblemsList";
import {Container, Grid} from "@material-ui/core";

const DescriptionProblemsCar = () => {
    const {
        problems,
        setProblems,
        listProblems,
        setListProblems
    } = useContext(RegisterCarProblems);
    const [descriptionItem, setDescriptionItem] = React.useState('');

    const handlChangeProblems = (evt) => {
        setProblems({
            ...problems,
            [evt.target.name]: evt.target.value
        })
    }
    const handlChangeProblemsItem = (evt) => {
        setDescriptionItem(evt.target.value)
    }

    const addItemListProblems = () => {
        setListProblems((preven) => {
            preven = [...preven];
            let mutar = [{descriptions: descriptionItem}];
            return preven.concat(mutar)
        });
        setDescriptionItem('')
    }
    console.log(listProblems)

    return (
        <Container maxWidth="sm" style={{height:'500px',display:"flex",flexDirection:"column",justifyContent:"start",backgroundColor:"white",padding:"32px"}}>
        <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs={12} sm={12}>
                    <InputTextGeneric
                        Name="descriptions"
                        Label="Descriptions General"
                        onChange={handlChangeProblems}
                        value={problems.descriptions}
                    />
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <InputTextGeneric
                            Name="descriptions"
                            Label="Problems"
                            onChange={handlChangeProblemsItem}
                            value={descriptionItem}
                        />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <ButtonGeneric
                            disabled={descriptionItem ? false : true}
                            Title="Agregar"
                            onClick={addItemListProblems}
                        />
                    </Grid>
                    <ProblemsList lista={listProblems}/>
                </Grid>
            </Grid>
        </Container>
    )

}
export default DescriptionProblemsCar;
