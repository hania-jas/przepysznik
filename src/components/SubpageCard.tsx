
import React from 'react';
//@ts-ignore
import Pdf from "react-to-pdf";
import Badge from 'react-bootstrap/Badge';
import { SubpageProps } from '../types/subPageProps';

const Subpage = ({ id, title, src, ingredients, method }: SubpageProps): JSX.Element  => {

  const ref: React.RefObject<HTMLInputElement> | null = React.createRef();
  
  return (
    <div className="card subCard" key={id}>
      <section className="titleContainer subTitle" >
        <div className="titleHeader">
          <h2>{title}</h2>
        </div>
        <div className="recipieLabelContainer">
          <img className="recipieLabel" src={src} alt="" />
        </div>
      </section>
      <div ref={ref} className="toPDF">
        <div className="badgePaddingContainer">
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
      <div className="containerPdf">
        <Pdf targetRef={ref} filename="recipie.pdf">
          {({ toPdf }: any) => <button onClick={toPdf} className="generatePdf">Download PDF</button>}
        </Pdf>
      </div>
    </div>
  )
}

export default Subpage;