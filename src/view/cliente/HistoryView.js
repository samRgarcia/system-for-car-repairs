import React, {useEffect, useState} from "react";
import HistoryList from "../../components/client/TroubleHistory/HistoryList";
import axios from "axios";
import {GET_ID_CLIENT_TRACING} from "../../components/costants/urls";

const HistoryView = () => {
    const [lisProbles, setProbles] = useState([]);

    useEffect(() => {
        axios.get(GET_ID_CLIENT_TRACING, {params: {idClient: 1}})
            .then((res) => {
                console.log(res.data)
                setProbles(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return (<React.Fragment>
        <h1>History</h1>
        <HistoryList data={lisProbles}/>
    </React.Fragment>)
}

export default HistoryView;
