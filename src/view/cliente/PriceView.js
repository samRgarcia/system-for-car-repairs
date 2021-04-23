import React, {useEffect} from "react";
import ListAllPrice from "../../components/client/PraiceView/ListAllPrice";
import axios from "axios";
import {GET_ID_SUGGESTIONS} from "../../components/costants/urls";

const PriceView = () => {
    const [listSuggestions,setListSuggestions]= React.useState([]);

    useEffect(() => {
        axios.get(GET_ID_SUGGESTIONS, {params: {idClient: 1}})
            .then((data) => {
                setListSuggestions(data.data)
            }).catch((e) => {
            console.log(e)
        })
    }, [])

    return (
        <ListAllPrice data={listSuggestions}/>
    )
}

export default PriceView;
