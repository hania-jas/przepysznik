import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
//@ts-ignore
import Pdf from "react-to-pdf";
import { RecipieTypes } from '../types/recipieTypes';
import { useTranslation } from "react-i18next";

const TodaysCard = ({ id, src, title, label, ingredients, method }: RecipieTypes): JSX.Element  => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose: () => void = (): void => setShow(false);
  const handleShow: () => void = (): void => setShow(true);

  const ref: React.RefObject<HTMLInputElement> | null = React.createRef();
  const { t } = useTranslation();

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
        <Modal.Body ref={ref}>
        {ingredients.map(ingredient => {
            return <Badge variant="light" className="badgeIngredient">{t(ingredient)}</Badge>
          })}
          <div className="methodContainer">
            {method.map(method => {
              return <p className="method">{t(method)}</p>
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="containerPdf">
            <Pdf targetRef={ref} filename="recipie.pdf">
              {({ toPdf }: any) => <button onClick={toPdf} className="generatePdf">Download PDF</button>}
            </Pdf>
          </div>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default TodaysCard;