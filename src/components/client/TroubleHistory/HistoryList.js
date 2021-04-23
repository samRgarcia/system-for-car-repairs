import React from "react";
import Grid from '@material-ui/core/Grid';
import CardHistory from "./CardHistory";

const HistoryList = ({data}) => {
    return (
        <Grid container spacing={3}>
            {data.map((item,index) => (
                <Grid key={index} item xs={12} sm={6}>
                    <CardHistory data={item}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default HistoryList;
