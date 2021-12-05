
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { AddRecipieProps } from '../types/addRecipieProps';
import { useTranslation } from "react-i18next";
const dayjs = require('dayjs')


const FormComponent = ({ addRecipie } : AddRecipieProps): JSX.Element  => {

  const [title, setTitle] = useState<string>('');
  const [label, setLabel] = useState<string>('sugar free');
  const [ingredients, setIngredients] = useState<string>('');
  const [method, setMethod] = useState<string>('');
  const date = dayjs().format('DD-MM-YYYY');
  let splittedMethod: string[];
  let splittedIngredients: string[];
  const { t, i18n } = useTranslation();

  const formattedMethod: (method: string) => void = (method: string): void => {
    setMethod(method.replace(/[a-z]\.$/, (method[method.length - 2] + '.' + '\n')));
  }


  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    splittedMethod = method.split("\n")
    splittedIngredients = ingredients.split(" ")
    console.log(splittedMethod);
    addRecipie(title, label, splittedIngredients, splittedMethod, date);
    setTitle('');
    setIngredients('');
    setMethod('');
  }

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>{t("form.title")}</Form.Label>
        <Form.Control value={title} type="input" onChange={e => setTitle(e.currentTarget.value)} placeholder={t("form.placeholder.title")}required />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>{t("form.label")}</Form.Label>
        <Form.Control className="options" as="select" value={label} onChange={e => setLabel(e.target.value)}>
          <option>{t("form.option.sugar_free")}</option>
          <option>{t("form.option.gluten_free")}</option>
          <option>{t("form.option.vegan")}</option>
          <option>{t("form.option.everything")}</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>{t("form.ingredients")}</Form.Label>
        <Form.Control as="textarea" rows={3} value={ingredients} onChange={e => setIngredients(e.currentTarget.value)} required />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>{t("form.method")}</Form.Label>
        <Form.Control as="textarea" rows={3} value={method} onChange={e => formattedMethod(e.currentTarget.value)} placeholder={t('form.placeholder.method')} required />
      </Form.Group>
      <Button variant="outline-dark" className="button" type="submit">{t("form.submit")}</Button>
    </Form>
  )
}

export default FormComponent;