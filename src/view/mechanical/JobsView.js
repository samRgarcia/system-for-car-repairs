import React, {useEffect, useState} from "react";
import ListJobs from "../../components/mechanical/JobsView/ListJobs";
import Loyaut from "../../components/Loyaut";


const JobsView = () => {
    return (
        <Loyaut>
            <h1>Jobs view</h1>
            <ListJobs/>
        </Loyaut>
    )
}

export default JobsView;
