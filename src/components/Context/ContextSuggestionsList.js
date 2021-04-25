import React, {createContext, useEffect, useState} from "react";


export const ContextSuggestionsList = createContext();

export const ProviderListSuggestions = ({children}) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [listTracing, setListTracing] = useState([]);

      return (
        <ContextSuggestionsList.Provider value={{listTracing, setListTracing, isUpdate, setIsUpdate}}>
            {children}
        </ContextSuggestionsList.Provider>
    )
}
