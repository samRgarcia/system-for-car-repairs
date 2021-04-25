import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {GET_ID_CLIENT_TRACING} from "../costants/urls";

export const ContextSuggestionsList = createContext();

export const ProviderListSuggestions = ({children}) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [listTracing, setListTracing] = useState([]);

    useEffect(() => {
        axios.get(GET_ID_CLIENT_TRACING, {params: {idClient: 1}})
            .then((res) => {
                setListTracing(res.data)
                console.log(res.data, "listTRacing")
            })
            .catch((error) => {
                console.log(error)
            })
    }, [isUpdate])

    return (
        <ContextSuggestionsList.Provider value={{listTracing, setListTracing, isUpdate, setIsUpdate}}>
            {children}
        </ContextSuggestionsList.Provider>
    )
}
