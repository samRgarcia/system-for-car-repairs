import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
                <Route exact path="/sing" component={SignInSide}/>
                <Route exact path="/sing-up" component={SignUp}/>
                <Route exac path="/home" component={Home}/>
                <Route exac path="/new-problem" component={NewProblemView}/>
                <Route exac path="/all-price" component={PriceView}/>
                <Route exac path="/all-suggestions" component={SuggestionsView}/>
                <Route exac path="/history-cliente" component={HistoryView}/>
                <Route exac path="/home-client" component={HomeClient}/>
                <Route exac path="/home-mechanical" component={HomeMechanical}/>

                <Route exac path="/view-jobs" component={JobsView}/>
                <Route exac path="/jobs-suggestions" component={SuggestionsJobsView}/>
                <Route exac path="/all-work" component={WorkView}/>
                <Route exac path="/date-rank" component={DateRanksView}/>
                <Route path="*" component={SignInSide}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;
