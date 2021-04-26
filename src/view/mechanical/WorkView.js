import React from "react";
import LisWork from "../../components/mechanical/WorkView/ListWork";
import Loyaut from "../../components/Loyaut";

const WorkView = () => {

    return (
        <Loyaut>
            <div style={{textAlign:"center"}}><h1>WorkView</h1></div>
            <LisWork/>
        </Loyaut>
    )
}

export default WorkView;
