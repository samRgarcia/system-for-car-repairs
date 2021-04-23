import React from "react";
import Grid from '@material-ui/core/Grid';
import CardSuggestions from "./CardSuggestions";

const ListAllSuggestions = () => {
    return (
        <Grid container spacing={3}>
            {[1, 2, 3, 4].map(item => (
                <Grid item xs={12} sm={6}>
                    <CardSuggestions/>
                </Grid>
            ))}
        </Grid>
    )
}

export default ListAllSuggestions;
