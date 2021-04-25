import React, {useContext, useEffect, useState} from "react";
import HistoryList from "../../components/client/TroubleHistory/HistoryList";
import axios from "axios";
import {GET_ID_CLIENT_TRACING_HISTORY} from "../../components/costants/urls";
import Loyaut from "../../components/Loyaut";
import {ContextAuth} from "../../components/Context/ContextAuth";

const HistoryView = () => {
    const {userAuth} = useContext(ContextAuth)
    const [lisProbles, setProbles] = useState([]);

    useEffect(() => {
        axios.get(GET_ID_CLIENT_TRACING_HISTORY, {params: {idClient: userAuth.idClient}})
            .then((res) => {
                console.log(res.data)
                setProbles(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <Loyaut>
        <h1>History</h1>
        <HistoryList data={lisProbles}/>
        </Loyaut>)
}

export default HistoryView;
