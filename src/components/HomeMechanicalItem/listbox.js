import React from "react";
import Grid from "@material-ui/core/Grid";
import WorkIcon from '@material-ui/icons/Work';
import EmailIcon from '@material-ui/icons/Email';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CardRoutes from "./CardRoutes";

const ListModuleClient = [
    {name: "View active jobs", url: "/view-jobs",descriptions:"View active jobs",icon:<WorkIcon/>},
    {name: "My suggestions", url: "/jobs-suggestions",descriptions: "View the status of my suggestions",icon:<EmailIcon/>},
    {name: "Works", url: "/all-work",descriptions: "View job listing",icon:<WorkIcon/>},
    {name: "Dates", url: "/date-rank",descriptions: "View earnings by date range",icon: <DateRangeIcon/>},
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
