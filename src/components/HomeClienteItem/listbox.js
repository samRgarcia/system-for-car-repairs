import React from "react";
import Grid from "@material-ui/core/Grid";
import CardRoutes from "./CardRoutes";

const ListModuleClient=[
    {name:"Register Problems",url:"/new-problem"},
    {name:"List price",url:"/all-price"},
    {name:"Suggestions",url:"all-suggestions"},
    {name:"History problems",url:"history-cliente"},
]

const ListBox =()=>{
    return(
        <Grid container spacing={3}>
            {ListModuleClient.map((item,index) => (
                <Grid key={index} item xs={12} sm={6}>
                    <CardRoutes data={item}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default ListBox;
