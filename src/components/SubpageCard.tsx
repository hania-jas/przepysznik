
import React from 'react';
import { usePDF } from "react-to-pdf";
import Badge from 'react-bootstrap/Badge';
import { SubpageProps } from '../types/subPageProps';
import { useTranslation } from "react-i18next";


const Subpage = ({ id, title, src, ingredients, method }: SubpageProps): JSX.Element  => {
  const { t } = useTranslation();
  const { toPDF, targetRef } = usePDF({
    filename: "recipie.pdf",
    page: { format: "A4" },
  });
  
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
      <div ref={targetRef} className="toPDF">
        <div className="badgePaddingContainer">
          {ingredients.map(ingredient => {
            return <Badge variant="light" className="badgeIngredient">{t(ingredient)}</Badge>
          })}
        </div>
        <div className="methodContainer">
          {method.map(method => {
            return <p className="method">{t(method)}</p>
          })}
        </div>
      </div>
      <div className="containerPdf">
         <button onClick={() => toPDF()} className="generatePdf">{t("subpage_card.download_button")}</button>
      </div>
    </div>
  )
}

export default Subpage;