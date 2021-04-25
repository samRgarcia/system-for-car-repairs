import React, {useContext} from "react";
import Grid from '@material-ui/core/Grid';
import CardSuggestions from "./CardSuggestions";
import {ContextSuggestionsList} from "../../Context/ContextSuggestionsList";

const ListAllSuggestions = () => {
    const {listTracing} = useContext(ContextSuggestionsList)
    return (
        <Grid container spacing={3}>
            {listTracing.map((item,index) => (
                <Grid key={index} item xs={12} sm={6}>
                    <CardSuggestions data={item}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default ListAllSuggestions;
