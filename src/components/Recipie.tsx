
import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
//@ts-ignore
import Pdf from "react-to-pdf";
import { RecipieProps } from '../types/recipieProps';
import { useTranslation } from "react-i18next";


const Recipie = ({ recipie, deleteRecipie }: RecipieProps): JSX.Element  => {
  const ref: React.RefObject<HTMLInputElement> | null = React.createRef();
  const { t } = useTranslation();

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
        <Badge variant="info" className="badgeLabel">{t(recipie.label)}</Badge>
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
        <div className="date">{recipie.date}</div>
        <Pdf targetRef={ref} filename="recipie.pdf">
          {({ toPdf }: any) => <button onClick={toPdf} className="generatePdf">{t("recipie.download_button")}</button>}
        </Pdf>
      </div>
    </div>
  )
}

export default Recipie;