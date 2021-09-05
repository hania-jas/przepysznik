import React from 'react';
import sugarfree from '../data/sugarfree.json';
import SubpageCard from './SubpageCard';
import { useTranslation } from "react-i18next";


const Sugarfree = (): JSX.Element  => {
  const { t } = useTranslation();

  return (
    <div className="recipieWebsite">
      {sugarfree.map((recipie) => {
        return <SubpageCard src={recipie.src} id={recipie.id} title={t(recipie.title)} method={t(recipie.method, { returnObjects: true  })} ingredients={t(recipie.ingredients, { returnObjects: true  })} />
      })}
    </div>
  )
}

export default Sugarfree;