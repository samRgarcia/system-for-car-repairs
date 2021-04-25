import React, {createContext, useState} from "react";

export const ContextSuggestionsJobsList = createContext();

export const ProviderSuggestionsJobsList = ({children}) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [mySuggestions, setMySuggestion] = useState([]);


    return (
        <ContextSuggestionsJobsList.Provider value={{mySuggestions, setMySuggestion, isUpdate, setIsUpdate}}>
            {children}
        </ContextSuggestionsJobsList.Provider>
    )
}
