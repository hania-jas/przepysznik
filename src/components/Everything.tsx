import React from 'react';
import everything from '../data/everything.json';
import SubpageCard from './SubpageCard';
import { useTranslation } from "react-i18next";


const Everything = (): JSX.Element  => {
  const { t } = useTranslation();

  return (
    <div className="recipieWebsite">
      {everything.map((recipie) => {
        return <SubpageCard src={recipie.src} id={recipie.id} title={t(recipie.title)} method={t(recipie.method, { returnObjects: true  })} ingredients={t(recipie.ingredients, { returnObjects: true  })} />
      })}
    </div>
  )
}

export default Everything;
