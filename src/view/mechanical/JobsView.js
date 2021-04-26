import React, {useEffect, useState} from "react";
import ListJobs from "../../components/mechanical/JobsView/ListJobs";
import Loyaut from "../../components/Loyaut";


const JobsView = () => {
    return (
        <Loyaut>
            <ListJobs/>
        </Loyaut>
    )
}

export default JobsView;
