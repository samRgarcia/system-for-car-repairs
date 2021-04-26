import React, {useContext, useEffect} from "react";
import CardJobs from "./CardJobs";
import Grid from "@material-ui/core/Grid";
import {ContextJobsList} from "../../Context/ContextListJob";
import axios from "axios";
import {GET_MECHANICAL_PROBLEMS} from "../../costants/urls";
import {Chip} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const ListJobs = () => {
    const {listProbles, setProblems, isUpdate, setIsUpdate} = useContext(ContextJobsList)

    useEffect(() => {
        axios.get(GET_MECHANICAL_PROBLEMS)
            .then((res) => {
                console.log(res.data)
                setProblems(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [isUpdate])

    return (
        <React.Fragment>
            <div style={{backgroundColor: "#ffffff70", width: "100%",marginBottom:2,borderRadius:5,textAlign:"center"}}>
            View Jobs
            </div>
            {!listProbles.length &&
            <Chip className="animate__animated animate__bounce" color="secondary" label="No quote for the moment"
                  avatar={<Avatar>M</Avatar>}/>}
            <Grid container spacing={3}>
                {listProbles.map(item => (
                    <Grid item xs={12} sm={6}>
                        <CardJobs data={item}/>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>

    )
}

export default ListJobs;
