import React, {useContext} from "react";
import CardsMySuggestions from "./CardsMySuggestions";
import Grid from "@material-ui/core/Grid";
import {ContextSuggestionsJobsList} from "../../Context/ContextSuggestionsJobsList";

const ListSuggestions = () => {
    const {mySuggestions} = useContext(ContextSuggestionsJobsList)
    return ( <Grid container spacing={3}>
        {mySuggestions.map(item => (
            <Grid item xs={12} sm={6}>
                <CardsMySuggestions data={item}/>
            </Grid>
        ))}
    </Grid>)
}
export default ListSuggestions;
