
import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
//@ts-ignore
import Pdf from "react-to-pdf";

interface Methods {
  recipie: { id: number;
    title: string;
    label: string;
    src: string;
    ingredients: string[];
    method: string[]};
  deleteRecipie: (id: number) => void
}

const Recipie = ({ recipie, deleteRecipie }: Methods): JSX.Element  => {
  const ref: any= React.createRef();

  return (
    <div className="card" key={recipie.id}>
      <Button className="deleteBtn" onClick={() => deleteRecipie(recipie.id)}>X</Button>
      <section className="titleContainer">
        <div className="titleHeader">
          <h2>{recipie.title}</h2>
        </div>
        <div className="recipieLabelContainer">
          <img className="recipieLabel" src={recipie.src} alt="" />
        </div>
      </section>
      <div>
        <Badge variant="info" className="badgeLabel">{recipie.label}</Badge>
      </div>
      <div ref={ref}>
        <div className="badgeIngContainer">
          {recipie.ingredients.map(ingredient => {
            return <Badge variant="light" className="badgeIngredient">{ingredient}</Badge>
          })}
        </div>
        <div className="methodContainer">
          {recipie.method.map(method => {
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

export default Recipie;