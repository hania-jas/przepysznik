import React from 'react';
import glutenfree from '../data/glutenfree.json';
import SubpageCard from './SubpageCard';

const Glutenfree = (): JSX.Element  => {
  return (
    <div className="recipieWebsite">
      {glutenfree.map((recipie) => {
        return <SubpageCard src={recipie.src} id={recipie.id} title={recipie.title} method={recipie.method} ingredients={recipie.ingredients} />
      })}
    </div>
  )
}

export default Glutenfree;