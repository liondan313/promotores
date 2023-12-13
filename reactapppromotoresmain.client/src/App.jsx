import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './layouts/Navigation';
import Prospectos from "./pages/Prospectos";
function App() {
    

    return (
        <div>
            <Router>
                <div>
                    <Navigation></Navigation>
                </div>
                <Container>
                    
                    <Switch>
                        <Route exact path="/" component={Prospectos}></Route>
                        
                    </Switch>
                </Container>

            </Router>

        </div>
    );
    
    
}

export default App;