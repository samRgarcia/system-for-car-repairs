import React, {useContext, useEffect} from "react";
import CardsMySuggestions from "./CardsMySuggestions";
import Grid from "@material-ui/core/Grid";
import {ContextSuggestionsJobsList} from "../../Context/ContextSuggestionsJobsList";
import axios from "axios";
import {GET_MY_SUGGEST} from "../../costants/urls";
import {ContextAuth} from "../../Context/ContextAuth";

const ListSuggestions = () => {
    const {userAuth} = useContext(ContextAuth);
    const {mySuggestions, setMySuggestion, isUpdate, setIsUpdate} = useContext(ContextSuggestionsJobsList)

    useEffect(() => {
        axios.get(GET_MY_SUGGEST, {params: {idMachinacal: userAuth.idClient}})
            .then((res) => {
                setMySuggestion(res.data)
                console.log(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [isUpdate])

    return ( <Grid container spacing={3}>
        {mySuggestions.map(item => (
            <Grid item xs={12} sm={6}>
                <CardsMySuggestions data={item}/>
            </Grid>
        ))}
    </Grid>)
}
export default ListSuggestions;
