import React from 'react';
import sugarfree from '../data/sugarfree.json';
import SubpageCard from './SubpageCard';

const Sugarfree = () => {
  return (
    <div className="recipieWebsite">
      {sugarfree.map((recipie) => {
        return <SubpageCard src={recipie.src} id={recipie.id} title={recipie.title} method={recipie.method} ingredients={recipie.ingredients} />
      })}
    </div>
  )
}

export default Sugarfree;