import React, {useContext, useEffect} from "react";
import Grid from '@material-ui/core/Grid';
import CardSuggestions from "./CardSuggestions";
import {ContextSuggestionsList} from "../../Context/ContextSuggestionsList";
import axios from "axios";
import {GET_ID_CLIENT_TRACING} from "../../costants/urls";
import {ContextAuth} from "../../Context/ContextAuth";
import {Chip} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const ListAllSuggestions = () => {
    const {userAuth} = useContext(ContextAuth);
    const {listTracing, setListTracing, isUpdate, setIsUpdate} = useContext(ContextSuggestionsList)

    useEffect(() => {
        axios.get(GET_ID_CLIENT_TRACING, {params: {idClient: userAuth.idClient}})
            .then((res) => {
                setListTracing(res.data)
                console.log(res.data, "listTRacing")
            })
            .catch((error) => {
                console.log(error)
            })
    }, [isUpdate])

    return (
        <React.Fragment>
            {!listTracing.length &&
            <Chip className="animate__animated animate__bounce" color="secondary" label="No tracking"
                  avatar={<Avatar>M</Avatar>}/>}
            <Grid container spacing={3}>
                {listTracing.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6}>
                        <CardSuggestions data={item}/>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>

    )
}

export default ListAllSuggestions;
