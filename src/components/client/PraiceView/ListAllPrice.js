import React,{useContext} from "react";
import Grid from '@material-ui/core/Grid';
import CardList from "./CardList";
import {ContextListAllPrice} from "../../Context/ContextLisAllPrice";

const ListAllPrice = () => {
    const {listSuggestions} = useContext(ContextListAllPrice)
    console.log(listSuggestions,"all price")

    return (
        <Grid container spacing={3}>
            {listSuggestions.map(item => (
                <Grid item xs={12} sm={6}>
                    <CardList data={item}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default ListAllPrice;
