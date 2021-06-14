import React from 'react';
import everything from '../data/everything.json';
import SubpageCard from './SubpageCard';

const Everything = () => {
  return (
    <div className="recipieWebsite">
      {everything.map((recipie) => {
        return <SubpageCard src={recipie.src} id={recipie.id} title={recipie.title} method={recipie.method} ingredients={recipie.ingredients} />
      })}
    </div>
  )
}

export default Everything;
