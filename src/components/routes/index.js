import {BrowserRouter,Route} from 'react-router-dom';
import Home from "../../view/Home";

const Routes =()=>{
    return(
        <BrowserRouter>
            <Route path="/home" component={Home}/>
        </BrowserRouter>
    )
}
export default Routes;
