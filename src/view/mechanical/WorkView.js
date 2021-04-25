import React, {useEffect, useState} from "react";
import axios from "axios";
import {GET_MY_ALL_JOBS} from "../../components/costants/urls";
import LisWork from "../../components/mechanical/WorkView/ListWork";

const WorkView = () => {

    return(
        <React.Fragment>
            <h1>WorkView</h1>
            <LisWork />
        </React.Fragment>
        )
}

export default WorkView;
