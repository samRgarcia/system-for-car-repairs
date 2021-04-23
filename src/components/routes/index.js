import {BrowserRouter,Route} from 'react-router-dom';
import Home from "../../view/Home";
import NewProblemView from "../../view/cliente/NewProblemView";
import Loyaut from "../Loyaut";
const Routes =()=>{
    return(
        <BrowserRouter>
            <Loyaut>
            <Route path="/home" component={Home}/>
            <Route path="/new-problem" component={NewProblemView}/>
            </Loyaut>
        </BrowserRouter>
    )
}
export default Routes;
