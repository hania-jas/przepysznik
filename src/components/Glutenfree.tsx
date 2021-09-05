import React from 'react';
import glutenfree from '../data/glutenfree.json';
import SubpageCard from './SubpageCard';
import { useTranslation } from "react-i18next";

const Glutenfree = (): JSX.Element  => {
  const { t } = useTranslation();

  return (
    <div className="recipieWebsite">
      {glutenfree.map((recipie) => {
        return <SubpageCard src={recipie.src} id={recipie.id} title={t(recipie.title)} method={t(recipie.method, { returnObjects: true  })} ingredients={t(recipie.ingredients, { returnObjects: true  })} />
      })}
    </div>
  )
}

export default Glutenfree;