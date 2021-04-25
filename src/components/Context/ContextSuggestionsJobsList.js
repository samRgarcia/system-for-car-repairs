import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {GET_MY_SUGGEST} from "../costants/urls";

export const ContextSuggestionsJobsList = createContext();

export const ProviderSuggestionsJobsList = ({children}) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [mySuggestions, setMySuggestion] = useState([]);
    useEffect(() => {
        axios.get(GET_MY_SUGGEST, {params: {idMachinacal: 1}})
            .then((res) => {
                setMySuggestion(res.data)
                console.log(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [isUpdate])

    return (
        <ContextSuggestionsJobsList.Provider value={{mySuggestions, setMySuggestion, isUpdate, setIsUpdate}}>
            {children}
        </ContextSuggestionsJobsList.Provider>
    )
}
