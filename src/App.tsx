import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Sugarfree from './components/Sugarfree';
import './App.css';
import Main from './components/Main';
import Vegan from './components/Vegan';
import Everything from './components/Everything';
import GlutenFree from './components/Glutenfree';



function App() {

  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={Main}>
            </Route>
            <Route path="/sugarfree" component={Sugarfree}>
            </Route>
            <Route path="/glutenfree" component={GlutenFree}>
            </Route>
            <Route path="/vegan" component={Vegan}>
            </Route>
            <Route path="/everything" component={Everything}>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
