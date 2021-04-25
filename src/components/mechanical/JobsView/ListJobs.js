import React, {useContext} from "react";
import CardJobs from "./CardJobs";
import Grid from "@material-ui/core/Grid";
import {ContextJobsList} from "../../Context/ContextListJob";

const ListJobs =()=>{
    const {listProbles} = useContext(ContextJobsList)
    return(
        <Grid container spacing={3}>
            {listProbles.map(item => (
                <Grid item xs={12} sm={6}>
                    <CardJobs data={item}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default ListJobs;
