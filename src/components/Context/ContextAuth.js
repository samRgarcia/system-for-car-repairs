import React, {createContext, useEffect, useState} from "react";

export const ContextAuth = createContext();

export const ProviderAuth = ({children}) => {
    const [userAuth, setUserAuth] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);


    return (
        <ContextAuth.Provider value={{userAuth,setUserAuth, isUpdate, setIsUpdate}}>
            {children}
        </ContextAuth.Provider>
    )
}
