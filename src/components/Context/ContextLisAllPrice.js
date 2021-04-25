import React, {createContext, useState} from "react";

export const ContextListAllPrice = createContext();

export const ProviderListAllPrice = ({children}) => {
    const [listSuggestions, setListSuggestions] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);


    return (
        <ContextListAllPrice.Provider value={{listSuggestions, setListSuggestions, isUpdate, setIsUpdate}}>
            {children}
        </ContextListAllPrice.Provider>
    )
}
