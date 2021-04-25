import React, {useEffect, useState} from "react";
import ListJobs from "../../components/mechanical/JobsView/ListJobs";


const JobsView = () => {
    return(
    <React.Fragment>
        <h1>Jobs view</h1>
        <ListJobs />
    </React.Fragment>
    )
}

export default JobsView;
