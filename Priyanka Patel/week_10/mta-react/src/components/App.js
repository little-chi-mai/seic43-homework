import TripPlanner from './TripPlanner';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
        <Switch>
          <Route exact path="/">
            < TripPlanner />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
