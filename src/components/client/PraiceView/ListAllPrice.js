import React from "react";
import Grid from '@material-ui/core/Grid';
import CardList from "./CardList";

const ListAllPrice = () => {
    return (
        <Grid container spacing={3}>
            {[1, 2, 3, 4].map(item => (
                <Grid item xs={12} sm={6}>
                    <CardList/>
                </Grid>
            ))}
        </Grid>
    )
}

export default ListAllPrice;
