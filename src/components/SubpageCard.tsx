//@ts-nocheck
import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Pdf from "react-to-pdf";
import * as htmlToImage from 'html-to-image';

const Subpage = ({id, title, src, ingredients, method}) => {
const ref = React.createRef();


  return (
    <div className="card" key={id}>
       <section className="titleContainer">
         <div className="titleHeader">
       <h2>{title}</h2>
       </div>
       <div className="recipieLabelContainer">
          <img className="recipieLabel" src={src} alt=""/>
          </div>
        </section>
        <div ref={ref}>
          <div className="badgeIngContainer">
          <Badge variant="light" className="badgeIngredient">{ingredients}</Badge>
          </div>
          <div className="methodContainer">
          {method.map(method => {
          return <p className="method">{method}</p>
          })}
          </div>
          </div>
          <div className="containerPdf">
          <Pdf targetRef={ref} filename="recipie.pdf">
          {({ toPdf }) => <button onClick={toPdf} className="generatePdf">Download PDF</button>}
          </Pdf>
          </div>
    </div>
  )
}

export default Subpage;