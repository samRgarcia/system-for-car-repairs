import React, {useEffect, useState} from "react";
import ListSuggestions from "../../components/mechanical/SuggestinsView/ListSuggestions";
import axios from "axios";
import {GET_MY_SUGGEST} from "../../components/costants/urls";

const SuggestionsJobsView = () => {
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
    }, [])
    return (
        <React.Fragment>
            <h1>My Suggestions Jobs</h1>
            <ListSuggestions data={mySuggestions}/>
        </React.Fragment>
    )
}

export default SuggestionsJobsView;
