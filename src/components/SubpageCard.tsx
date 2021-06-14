//@ts-nocheck
import React from 'react';
import ToPDF from './ToPDF';
import { renderToString } from "react-dom/server";
import { jsPDF } from "jspdf";

const Subpage = ({ id, title, src, ingredients, method }) => {

  const print = () => {
    const string = renderToString(<ToPDF method={method} ingredients={ingredients} />);
    const pdf = new jsPDF();

    pdf.html(string, {
      callback: function (doc) {
        doc.setFont('Times New Roman')
        doc.setFontSize(10);
        console.log(doc.getFontSize());
        doc.save();
      }
    });
  };

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
      <ToPDF method={method} ingredients={ingredients} />
      <div className="containerPdf">
        <button onClick={print} className="generatePdf">Download PDF</button>
      </div>
    </div>
  )
}

export default Subpage;