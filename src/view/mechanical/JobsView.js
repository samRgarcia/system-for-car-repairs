import React, {useEffect, useState} from "react";
import ListJobs from "../../components/mechanical/JobsView/ListJobs";
import axios from "axios";
import {GET_MECHANICAL_PROBLEMS} from "../../components/costants/urls";

const JobsView = () => {
    const [listProbles,setProblems] =useState([]);

    useEffect(()=>{
        axios.get(GET_MECHANICAL_PROBLEMS)
            .then((res)=>{
                console.log(res.data)
                setProblems(res.data)
            })
            .catch((e)=>{
                console.log(e)
            })
    },[])

    return(
    <React.Fragment>
        <h1>Jobs view</h1>
        <ListJobs data={listProbles}/>
    </React.Fragment>
    )
}

export default JobsView;
