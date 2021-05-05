import './App.css';
import Movies from './Movies';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {

  return (
      <Router>
        <div className="jumbotron">
        <Navbar/>
        </div>
        <div className="container mt-4">
          <Switch>
            <Route path="/terms">
              <h1>Términos</h1>
            </Route>
            <Route path="/">
              <Movies />
            </Route>
          </Switch>
          </div>

      </Router>
  );
}

export default App;
