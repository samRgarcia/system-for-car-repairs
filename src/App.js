import React from "react";
import Routes from "./components/routes";
import {ProviderRegisterCarProblems} from "../src/components/Context/ContextRegisterCarProblems";

function App() {
    return (
        <ProviderRegisterCarProblems>
            <Routes/>
        </ProviderRegisterCarProblems>
    );
}

export default App;
