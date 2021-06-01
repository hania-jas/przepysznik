//@ts-nocheck
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Recipie = ({recipie, deleteRecipie}) => {
  return (
    <Card style={{ width: '18rem' }} className="recipie" key={recipie.id}>
       <Button className="deleteBtn" onClick={() => deleteRecipie(recipie.id)}>X</Button>
       <Card.Img variant="top" src={recipie.src} />
      <Card.Body>
        <Card.Title>{recipie.title}</Card.Title>
        <Card.Text>
          {recipie.label}
        </Card.Text>
        <Card.Text>
          {recipie.ingredients}
        </Card.Text>
        <Card.Text>
          {recipie.method}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Recipie;