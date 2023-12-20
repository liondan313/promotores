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
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";
import 'react-confirm-alert/src/react-confirm-alert.css';
import PrivateRoute from "./components/utils/PrivateRoute";
import UsersPosts from "./pages/UsersPosts";
import ProspectoDetalle from "./pages/ProspectoDetalle";
import EvaluarProspecto from "./pages/EvaluarProspecto";


checkForToken();

function App() {
    


    return (
        <div>
            <Provider store={store}>
            <Router>
                <div>
                    <Navigation></Navigation>
                </div>
                <Container>
                    <ToastContainer />        
                    <Switch>
                        <Route exact path="/" component={Prospectos}></Route>
                            <Route exact path="/signup" component={SignUp}></Route>
                            <Route exact path="/signin" component={SignIn}></Route>
                            <Route exact path="/nuevoProspecto" component={NuevoProspecto}></Route>
                            <Route exact path="/prospecto/:id" component={ProspectoDetalle}></Route>
                            <PrivateRoute exact path="/prospectos" component={UsersPosts}></PrivateRoute>
                            <PrivateRoute exact path="/evaluarprospecto/:id" component={EvaluarProspecto}></PrivateRoute>


                        
                    </Switch>
                </Container>

                </Router>
        </Provider>
        </div>
    );
    
    
}

export default App;