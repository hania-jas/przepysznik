import React from 'react';
import vegan from '../data/vegan.json'
import SubpageCard from './SubpageCard';

const Vegan = (): JSX.Element  => {
  return (
    <div className="recipieWebsite">
      {vegan.map((recipie) => {
        return <SubpageCard src={recipie.src} id={recipie.id} title={recipie.title} method={recipie.method} ingredients={recipie.ingredients} />
      })}
    </div>
  )
}

export default Vegan;