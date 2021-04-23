import {BrowserRouter, Route} from 'react-router-dom';
import Home from "../../view/Home";
import NewProblemView from "../../view/cliente/NewProblemView";
import Loyaut from "../Loyaut";
import PriceView from "../../view/cliente/PriceView";
import SuggestionsView from "../../view/cliente/SuggestionsView";

const Routes = () => {
    return (
        <BrowserRouter>
            <Loyaut>
                <Route path="/home" component={Home}/>
                <Route path="/new-problem" component={NewProblemView}/>
                <Route path="/all-price" component={PriceView}/>
                <Route path="/all-suggestions" component={SuggestionsView}/>

            </Loyaut>
        </BrowserRouter>
    )
}
export default Routes;
