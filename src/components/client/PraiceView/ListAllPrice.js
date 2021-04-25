import React, {useContext, useEffect} from "react";
import Grid from '@material-ui/core/Grid';
import CardList from "./CardList";
import {ContextListAllPrice} from "../../Context/ContextLisAllPrice";
import axios from "axios";
import {GET_ID_SUGGESTIONS} from "../../costants/urls";
import {ContextAuth} from "../../Context/ContextAuth";

const ListAllPrice = () => {
    const {userAuth} = useContext(ContextAuth);
    const {listSuggestions, setListSuggestions, isUpdate, setIsUpdate} = useContext(ContextListAllPrice)
    console.log(listSuggestions, "all price")
    useEffect(() => {
        axios.get(GET_ID_SUGGESTIONS, {params: {idClient: userAuth.idClient}})
            .then((data) => {
                setListSuggestions(data.data)
            }).catch((e) => {
            console.log(e)
        })
    }, [isUpdate]);

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
