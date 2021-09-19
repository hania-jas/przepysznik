import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { RecipieCardProps } from '../types/recipieCardProps';
import { useTranslation } from "react-i18next";
import { ThemeContext } from './ThemeProvider';

const RecipieCard = ({ src, description, path }: RecipieCardProps): JSX.Element  => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`aboutPic ${theme}`}>
      <h2>{t(description)}</h2>
      <p className="underscore">_</p>
      <div className="buttonCardContainer">
        <Link to={path} className="cardButton">{t("recipie.card.see_recipies")}</Link>
      </div>
      <img src={src} alt="" className="icon" />
    </div>
  )
}

export default RecipieCard;