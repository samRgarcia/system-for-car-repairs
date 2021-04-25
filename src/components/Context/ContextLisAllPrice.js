import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {GET_ID_SUGGESTIONS} from "../costants/urls";

export const ContextListAllPrice = createContext();

export const ProviderListAllPrice = ({children}) => {
    const [listSuggestions, setListSuggestions] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    useEffect(() => {
        axios.get(GET_ID_SUGGESTIONS, {params: {idClient: 1}})
            .then((data) => {
                setListSuggestions(data.data)
            }).catch((e) => {
            console.log(e)
        })
    }, [isUpdate]);

    return (
        <ContextListAllPrice.Provider value={{listSuggestions, setListSuggestions, isUpdate, setIsUpdate}}>
            {children}
        </ContextListAllPrice.Provider>
    )
}
