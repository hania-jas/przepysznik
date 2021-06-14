//@ts-nocheck
import React from 'react';
import Badge from 'react-bootstrap/Badge';

const ToPDF = ({ ingredients, method }) => {

    console.log(ingredients, "id");

    return (
        <div className="toPDF">
            <div className="badgeIngContainer">
                {ingredients.map(ingredient => {
                    return <Badge variant="light" className="badgeIngredient">{ingredient}</Badge>
                })}
            </div>
            <div className="methodContainer">
                {method.map(method => {
                    return <p className="method">{method}</p>
                })}
            </div>
        </div>
    )
}

export default ToPDF;