import React, {useEffect, useState} from "react";
import axios from "axios";
import {GET_MY_ALL_JOBS} from "../../components/costants/urls";
import LisWork from "../../components/mechanical/WorkView/ListWork";

const WorkView = () => {
    const [listJobs,setList]= useState([]);
    useEffect(()=>{
        axios.get(GET_MY_ALL_JOBS,{params:{idMachinacal:1}})
            .then((res)=>{
                setList(res.data)
                console.log(res.data)
            })
            .catch((e)=>{
                console.log(e)
            })
    },[])

    return(
        <React.Fragment>
            <h1>WorkView</h1>
            <LisWork data={listJobs}/>
        </React.Fragment>
        )
}

export default WorkView;
