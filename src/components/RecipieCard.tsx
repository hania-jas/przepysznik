//@ts-nocheck
import React from 'react';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const RecipieCard = ({src, description, path}) => {
return (
        <div className="aboutPic">
          <h2>{description}</h2>
          <p className="underscore">_</p>
          <div className="buttonCardContainer">
          <Link to={path} className="cardButton">see recipies</Link>
          </div>
          <img src={src} alt="" className="icon"/>
        </div>
)
}

export default RecipieCard;