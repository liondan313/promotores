import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './layouts/Navigation';
import Prospectos from "./pages/Prospectos";
import SignUp from "./pages/SignUp";
import { Provider } from 'react-redux';
import store from "../store";
import SignIn from "./pages/SignIn";
import NuevoProspecto from "./pages/NuevoProspecto";

function App() {
    

    return (
        <div>
            <Provider store={store}>
            <Router>
                <div>
                    <Navigation></Navigation>
                </div>
                <Container>
                    
                    <Switch>
                        <Route exact path="/" component={Prospectos}></Route>
                            <Route exact path="/signup" component={SignUp}></Route>
                            <Route exact path="/signin" component={SignIn}></Route>
                            <Route exact path="/nuevoProspecto" component={NuevoProspecto}></Route>

                        
                    </Switch>
                </Container>

                </Router>
        </Provider>
        </div>
    );
    
    
}

export default App;