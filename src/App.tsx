import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sugarfree from "./components/Sugarfree";
import "./App.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Main from "./components/Main";
import Vegan from "./components/Vegan";
import Everything from "./components/Everything";
import GlutenFree from "./components/Glutenfree";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <div>
            <Switch>
              <Route exact path="/" component={Main}></Route>
              <Route path="/sugarfree" component={Sugarfree}></Route>
              <Route path="/glutenfree" component={GlutenFree}></Route>
              <Route path="/vegan" component={Vegan}></Route>
              <Route path="/everything" component={Everything}></Route>
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
