//@ts-nocheck
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sugarfree from './components/Sugarfree';
import RecipieCard from './components/RecipieCard';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import data from './data.json';
import { recipiesDetails } from './recipiesDetails';
import { todaysDetails } from './todaysDetails';
import TodaysCard from './components/TodaysCard';
import FormComponent from './components/FormComponent';
import RecipiesList from './components/RecipiesList';
import { carouselDetails } from './carouselDetails';
import logo from './pictures/logo.png';
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
