import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import { usePDF } from "react-to-pdf";
import { RecipieTypes } from '../types/recipieTypes';
import { useTranslation } from "react-i18next";

const TodaysCard = ({ id, src, title, label, ingredients, method, date }: RecipieTypes): JSX.Element  => {
  const [show, setShow] = useState<boolean>(false);
  const { toPDF, targetRef } = usePDF({
    filename: "recipie.pdf",
    page: { format: "A4" },
  });
  const { t } = useTranslation();

  const handleClose: () => void = (): void => setShow(false);
  const handleShow: () => void = (): void => setShow(true);

  return (
    <>
      <div className="todays todaysDarken" onClick={handleShow} key={id}>
        <img src={src} alt="" className="todaysPic" />
        <div className="recipieTitle">
          <p>{t(title)}</p></div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg" className="modal">

        <Modal.Header closeButton >
          <section className="titleModalContainer">
            <div className="titleHeader">
              <Modal.Title>{t(title)}</Modal.Title>
            </div>
            <div className="recipieLabelContainer">
              <img className="recipieLabel" src={label} alt="" />
            </div>
          </section>
        </Modal.Header>
        <Modal.Body ref={targetRef}>
        {ingredients.map(ingredient => {
            return <Badge key={ingredient} variant="light" className="badgeIngredient">{t(ingredient)}</Badge>
          })}
          <div className="methodContainer">
            {method.map((method, index) => {
              return <p key={index} className="method">{t(method)}</p>
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="containerPdf">
            <div className="date">{date}</div>
              <button onClick={() => toPDF()} className="generatePdf">Download PDF</button>
          </div>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default TodaysCard;