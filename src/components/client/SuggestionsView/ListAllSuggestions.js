import React from "react";
import Grid from '@material-ui/core/Grid';
import CardSuggestions from "./CardSuggestions";

const ListAllSuggestions = ({data}) => {
    return (
        <Grid container spacing={3}>
            {data.map((item,index) => (
                <Grid key={index} item xs={12} sm={6}>
                    <CardSuggestions data={item}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default ListAllSuggestions;
