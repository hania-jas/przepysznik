//@ts-nocheck
import React from 'react';
import Recipie from './Recipie'

const RecipiesList = ({ recipiesList, deleteRecipie }) => {
  return (
    <div className="recipieContainer">
      {recipiesList.map((recipie) => {
        return <Recipie recipie={recipie} deleteRecipie={deleteRecipie} />
      })}
    </div>
  )
}

export default RecipiesList;