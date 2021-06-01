//@ts-nocheck
import React, { useState } from 'react';
import {Col, Row, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';
import { splitBsProps } from 'react-bootstrap/lib/utils/bootstrapUtils';

const FormComponent = ({addRecipie}) => {

  const [title, setTitle] = useState('');
  const [label, setLabel] = useState('sugar free');
  const [ingredients, setIngredients] = useState('');
  const [method, setMethod] = useState('');
  let splittedMethod;
  let arrayOfVals;

  const formattedMethod = method => {
      setMethod(method.replace(/[a-z]\.$/, (method[method.length-2] + '.' + '\n')));    
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
     splittedMethod = method.split("\n")
     .map(i => {
       return <p>{i}</p>})
    console.log(splittedMethod);
     addRecipie(title, label, ingredients, splittedMethod);
     setTitle('');
    setIngredients('');
    setMethod('');
  }

  return (
  <Form className="form" onSubmit={handleSubmit}>
    <Row>
      <Col lg={3}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control value={title} type="input" onChange={e => setTitle(e.currentTarget.value)} placeholder="Enter title" />
    </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Select label</Form.Label>
    <Form.Control className="options" as="select" value={label} onChange={e => setLabel(e.target.value)}>
      <option>sugar free</option>
      <option>gluten free</option>
      <option>vegan</option>
      <option>everything</option>
    </Form.Control>
  </Form.Group>
  </Col>
  <Col lg={8} className="secondFormCol">
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Ingredients</Form.Label>
    <Form.Control as="textarea" rows={3}  value={ingredients} onChange={e => setIngredients(e.currentTarget.value)}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Method</Form.Label>
    <Form.Control as="textarea" rows={3} value={method} onChange={e => formattedMethod(e.currentTarget.value)}/>
  </Form.Group>
  </Col>
  </Row>
  <Button variant="outline-dark" className="button" type="submit">SUBMIT</Button>
</Form>
  )
}

export default FormComponent;