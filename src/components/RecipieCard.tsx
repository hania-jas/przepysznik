//@ts-nocheck
import React from 'react';
import Button from 'react-bootstrap/Button';


const RecipieCard = ({src, description}) => {
return (
        <div className="aboutPic">
          <h2>{description}</h2>
          <p className="underscore">_</p>
          <div className="buttonCardContainer">
          <Button className="cardButton">SEE RECIPIES</Button>
          </div>
          <img src={src} alt="" className="icon"/>
        </div>
)
}

export default RecipieCard;