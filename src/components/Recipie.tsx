//@ts-nocheck
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Pdf from "react-to-pdf";
import * as htmlToImage from 'html-to-image';

const Recipie = ({recipie, deleteRecipie}) => {
const ref = React.createRef();


  return (
    <div className="card" key={recipie.id}>
       <Button className="deleteBtn" onClick={() => deleteRecipie(recipie.id)}>X</Button>
       <section className="titleContainer">
         <div className="titleHeader">
       <h2>{recipie.title}</h2>
       </div>
       <div className="recipieLabelContainer">
          <img className="recipieLabel" src={recipie.src} alt=""/>
          </div>
        </section>
        <div>
        <Badge variant="info" className="badgeLabel">{recipie.label}</Badge>
        </div>
        <div ref={ref}>
          <div className="badgeIngContainer">
          <Badge variant="light" className="badgeIngredient">{recipie.ingredients}</Badge>
          </div>
          <div className="methodContainer">
          {recipie.method.map(method => {
          return <p className="method">{method}</p>
          })}
          </div>
          </div>
          <div className="containerPdf">
          <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button onClick={toPdf} className="generatePdf">Download PDF</button>}
          </Pdf>
          </div>
    </div>
  )
}

export default Recipie;