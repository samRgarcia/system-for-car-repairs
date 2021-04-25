import React from "react";
import Routes from "./components/routes";
import {ProviderRegisterCarProblems} from "../src/components/Context/ContextRegisterCarProblems";
import {ProviderListAllPrice} from "../src/components/Context/ContextLisAllPrice";
import {ProviderListSuggestions} from "../src/components/Context/ContextSuggestionsList";
import {ProviderListJobs} from "../src/components/Context/ContextListJob";
import {ProviderSuggestionsJobsList} from "../src/components/Context/ContextSuggestionsJobsList";
import {ProviderListAllWork} from "../src/components/Context/ContextWorkList";


function App() {
    return (
        <ProviderListAllWork>
            <ProviderSuggestionsJobsList>
                <ProviderListJobs>
                    <ProviderListSuggestions>
                        <ProviderListAllPrice>
                            <ProviderRegisterCarProblems>
                                <Routes/>
                            </ProviderRegisterCarProblems>
                        </ProviderListAllPrice>
                    </ProviderListSuggestions>
                </ProviderListJobs>
            </ProviderSuggestionsJobsList>
        </ProviderListAllWork>
    );
}

export default App;
