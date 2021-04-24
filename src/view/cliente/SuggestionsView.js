import React, {useEffect, useState} from "react";
import ListAllSuggestions from "../../components/client/SuggestionsView/ListAllSuggestions";
import axios from "axios";
import {GET_ID_CLIENT_TRACING} from "../../components/costants/urls";

const SuggestionsView = () => {
    const [listTracing,setListTracing]=useState([]);
    useEffect(()=>{
        axios.get(GET_ID_CLIENT_TRACING,{params:{idClient:1}})
            .then((res)=>{
                setListTracing(res.data)
                console.log(res.data,"listTRacing")

            })
            .catch((error)=>{
                console.log(error)
            })
    },[])
    return(
        <React.Fragment>
            <ListAllSuggestions data={listTracing}/>
        </React.Fragment>
    )
}

export default SuggestionsView;
