import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { RecipieCardProps } from '../types/recipieCardProps';

const RecipieCard = ({ src, description, path }: RecipieCardProps): JSX.Element  => {
  return (
    <div className="aboutPic">
      <h2>{description}</h2>
      <p className="underscore">_</p>
      <div className="buttonCardContainer">
        <Link to={path} className="cardButton">see recipies</Link>
      </div>
      <img src={src} alt="" className="icon" />
    </div>
  )
}

export default RecipieCard;