import React from "react";
import MainStepper from "../../components/client/MainStepper";
import Loyaut from "../../components/Loyaut";
import {Grid} from "@material-ui/core";

const NewProblemView = () => {
    return (<Loyaut>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
             <Grid item xs={12} sm={6}>
                <MainStepper/>
            </Grid>
        </Grid>
    </Loyaut>)
}

export default NewProblemView;
