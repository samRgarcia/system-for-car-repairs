import React from "react";
import CardJobs from "./CardJobs";
import Grid from "@material-ui/core/Grid";

const ListJobs =({data = []})=>{
    return(
        <Grid container spacing={3}>
            {data.map(item => (
                <Grid item xs={12} sm={6}>
                    <CardJobs data={item}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default ListJobs;
