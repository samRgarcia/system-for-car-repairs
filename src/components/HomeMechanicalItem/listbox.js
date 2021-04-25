import React from "react";
import Grid from "@material-ui/core/Grid";
import CardRoutes from "./CardRoutes";

const ListModuleClient = [
    {name: "Jobs", url: "/view-jobs"},
    {name: "My suggestions", url: "/jobs-suggestions"},
    {name: "Works", url: "/all-work"},
    {name: "Dates", url: "/date-rank"},
]

const ListBox = () => {
    return (
            <Grid container spacing={3}>
                {ListModuleClient.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6}>
                        <CardRoutes data={item}/>
                    </Grid>
                ))}
            </Grid>

    )
}

export default ListBox;
