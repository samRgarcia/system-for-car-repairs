import React from 'react';
import {Container} from '@material-ui/core';
import PanelRank from "../../components/mechanical/DateRank/PanelRank";
import Loyaut from "../../components/Loyaut";

const DateRanksView = () => {
    return (
        <Loyaut>
            <Container fixed style={{backgroundColor: "white", height: "100%"}}>
                <div style={{textAlign:"center"}}><h1>Earnings</h1></div>
                <PanelRank/>
            </Container>
        </Loyaut>
    )
}

export default DateRanksView;
