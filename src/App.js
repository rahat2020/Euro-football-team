
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Leagues from './components/Leagues/Leagues';
import NoMatch from './components/NoMatch/NoMatch';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
// import LeagueDetails from './components/LeagueDetails/LeagueDetails';
// import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div >
      

        <Router>
        <Switch>
          <Route  path="/home">
            <Home />
          </Route>
          <Route path="/leagues">
            <Leagues/>
          </Route>
          <Route path="/teams/:idTeam">
          <LeagueDetails></LeagueDetails>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
         <NoMatch />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
