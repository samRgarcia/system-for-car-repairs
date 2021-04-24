import React from "react";
import Grid from "@material-ui/core/Grid";
import CardWork from "./CardWork";

const LisWork = ({data = []}) => {
    return (<Grid container spacing={3}>
        {data.map((item,index) => (
            <Grid key={index} item xs={12} sm={6}>
                <CardWork data={item}/>
            </Grid>
        ))}
    </Grid>)
}

export default LisWork;
