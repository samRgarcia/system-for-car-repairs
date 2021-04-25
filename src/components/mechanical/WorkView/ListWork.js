import React, {useContext} from "react";
import Grid from "@material-ui/core/Grid";
import CardWork from "./CardWork";
import {ContextListAllWork} from "../../Context/ContextWorkList";

const LisWork = () => {
    const {listJobs} = useContext(ContextListAllWork)
    return (<Grid container spacing={3}>
        {listJobs.map((item,index) => (
            <Grid key={index} item xs={12} sm={6}>
                <CardWork data={item}/>
            </Grid>
        ))}
    </Grid>)
}

export default LisWork;
