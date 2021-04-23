import React from "react";
import Grid from '@material-ui/core/Grid';
import CardList from "./CardList";

const ListAllPrice = ({data}) => {
    return (
        <Grid container spacing={3}>
            {data.map(item => (
                <Grid item xs={12} sm={6}>
                    <CardList data={item}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default ListAllPrice;
