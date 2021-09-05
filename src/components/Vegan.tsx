import React from 'react';
import vegan from '../data/vegan.json'
import SubpageCard from './SubpageCard';
import { useTranslation } from "react-i18next";


const Vegan = (): JSX.Element  => {
  const { t } = useTranslation();

  return (
    <div className="recipieWebsite">
      {vegan.map((recipie) => {
        return <SubpageCard src={recipie.src} id={recipie.id} title={t(recipie.title)} method={t(recipie.method, { returnObjects: true  })} ingredients={t(recipie.ingredients, { returnObjects: true  })} />
      })}
    </div>
  )
}

export default Vegan;