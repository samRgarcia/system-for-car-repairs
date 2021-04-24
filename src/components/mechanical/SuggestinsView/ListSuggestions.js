import React from "react";
import CardsMySuggestions from "./CardsMySuggestions";
import Grid from "@material-ui/core/Grid";

const ListSuggestions = ({data=[]}) => {
    return ( <Grid container spacing={3}>
        {data.map(item => (
            <Grid item xs={12} sm={6}>
                <CardsMySuggestions data={item}/>
            </Grid>
        ))}
    </Grid>)
}
export default ListSuggestions;
