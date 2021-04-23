import React, {createContext, useState} from "react";

export const RegisterCarProblems = createContext();

export const ProviderRegisterCarProblems = ({children}) => {
    const [registerProblems, setRegisterProblems] = useState();
    return (
        <RegisterCarProblems.Provider value={{registerProblems, setRegisterProblems}}>
            {children}
        </RegisterCarProblems.Provider>
    )
}
