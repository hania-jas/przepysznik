import React from 'react';
import Recipie from './Recipie'
import { RecipiesListProps } from '../types/recipiesListProps';

const RecipiesList = ({ recipiesList, deleteRecipie }: RecipiesListProps): JSX.Element  => {
  return (
    <div className="recipieContainer">
      {recipiesList.map((recipie, index) => {
        return <Recipie key={index} recipie={recipie} deleteRecipie={deleteRecipie} />
      })}
    </div>
  )
}

export default RecipiesList;