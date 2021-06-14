//@ts-nocheck
import { React, useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import Pdf from "react-to-pdf";

const TodaysCard = ({ src, title, label, ingredients, method }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ref = useRef();

  return (

    <>
      <div className="todays todaysDarken" onClick={handleShow}>
        <img src={src} alt="" className="todaysPic" />
        <div class="recipieTitle">
          <p>{title}</p></div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg" className="modal">

        <Modal.Header closeButton >
          <section className="titleModalContainer">
            <div className="titleHeader">
              <Modal.Title>{title}</Modal.Title>
            </div>
            <div className="recipieLabelContainer">
              <img className="recipieLabel" src={label} alt="" />
            </div>
          </section>
        </Modal.Header>
        <Modal.Body ref={ref}>
          <Badge variant="light" className="badgeIngredient">{ingredients}</Badge>
          <div className="methodContainer">
            {method.map(method => {
              return <p className="method">{method}</p>
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="containerPdf">
            <Pdf targetRef={ref} filename="recipie.pdf">
              {({ toPdf }) => <button onClick={toPdf} className="generatePdf">Download PDF</button>}
            </Pdf>
          </div>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default TodaysCard;