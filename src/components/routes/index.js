import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Home from "../../view/Home";
import NewProblemView from "../../view/cliente/NewProblemView";
import Loyaut from "../Loyaut";
import PriceView from "../../view/cliente/PriceView";
import SuggestionsView from "../../view/cliente/SuggestionsView";
import HistoryView from "../../view/cliente/HistoryView";
import HomeClient from "../../view/Home/HomeClient";
import HomeMechanical from "../../view/Home/HomeMechanical";
import JobsView from "../../view/mechanical/JobsView";
import WorkView from "../../view/mechanical/WorkView";
import SuggestionsJobsView from "../../view/mechanical/SuggestionsJobsView";
import DateRanksView from "../../view/mechanical/DateRanksView";
import SignInSide from "../../view/Login/Sing-in-side";
import SignUp from "../../view/Login/SignUp";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/sing" component={SignInSide}/>
            <Route path="/sing-up" component={SignUp}/>
            <Loyaut>
                <Route path="/home" component={Home}/>
                <Route path="/new-problem" component={NewProblemView}/>
                <Route path="/all-price" component={PriceView}/>
                <Route path="/all-suggestions" component={SuggestionsView}/>
                <Route path="/history-cliente" component={HistoryView}/>
                <Route path="/home-cliente" component={HomeClient}/>
                <Route path="/home-mechanical" component={HomeMechanical}/>

                <Route path="/view-jobs" component={JobsView}/>
                <Route path="/jobs-suggestions" component={SuggestionsJobsView}/>
                <Route path="/all-work" component={WorkView}/>
                <Route path="/date-rank" component={DateRanksView}/>
            </Loyaut>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;
