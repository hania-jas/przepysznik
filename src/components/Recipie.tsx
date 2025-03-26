
import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { usePDF } from "react-to-pdf";
import { RecipieProps } from '../types/recipieProps';
import { useTranslation } from "react-i18next";


const Recipie = ({ recipie, deleteRecipie }: RecipieProps): JSX.Element  => {
  const { t } = useTranslation();
  const { toPDF, targetRef } = usePDF({
    filename: "recipie.pdf",
    page: { format: "A4" },
  });

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
      <div ref={targetRef}>
        <div className="badgeIngContainer">
          {recipie.ingredients.map((ingredient, index) => {
            return <Badge key={index} variant="light" className="badgeIngredient">{ingredient}</Badge>
          })}
        </div>
        <div className="methodContainer">
          {recipie.method.map((method, index) => {
            return <p key={index} className="method">{method}</p>
          })}
        </div>
      </div>
      <div className="containerPdf">
        <div className="date">{recipie.date}</div>
          <button onClick={() => toPDF()} className="generatePdf">{t("recipie.download_button")}</button>
      </div>
    </div>
  )
}

export default Recipie;