import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { RecipieCardProps } from '../types/recipieCardProps';
import { useTranslation } from "react-i18next";

const RecipieCard = ({ src, description, path }: RecipieCardProps): JSX.Element  => {
  const { t } = useTranslation();

  return (
    <div className="aboutPic">
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