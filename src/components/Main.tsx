import React, { useState, useEffect, useContext } from 'react';
import Navbar from './Navbar';
import RecipieCard from './RecipieCard';
import Carousel from 'react-bootstrap/Carousel';
import data from '../data/myRecipies.json';
import recipiesDetails from '../data/recipiesDetails.json';
import todaysDetails from '../data/todaysDetails.json';
import TodaysCard from './TodaysCard';
import FormComponent from './FormComponent';
import RecipiesList from './RecipiesList';
import { ThemeContext } from './ThemeProvider';
import carouselDetails from '../data/carouselDetails.json';
import projekt from '../pictures/projekt.png';
import { RecipieTypes } from '../types/recipieTypes';

import { useTranslation } from "react-i18next";

const Main = (): JSX.Element => {

  const [recipie, setRecipie] = useState<RecipieTypes[]>(data);
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const saveData = (newRecipies: RecipieTypes[]): void => {
    localStorage.setItem("recipies", JSON.stringify(newRecipies));
  };

  useEffect((): void => {
    if (localStorage.getItem("recipies")) {
      setRecipie(JSON.parse(localStorage.getItem("recipies")!));
    }
  }, []);

  const addRecipie = (label: string, title: string, ingredients: string[], method: string[], date: string, src?: string)  => {
    if (label === 'sugar free') {
      src = 'images/sugar.png'
    } else if (label === 'gluten free') {
      src = 'images/gluten.png';
    } else if (label === 'vegan') {
      src = './images/vega.png';
    } else {
      src = './images/everything.png';
    }

    let newRecipiesList: RecipieTypes[] = [...recipie];
    newRecipiesList = [...newRecipiesList, { id: newRecipiesList.length + 1, title: title, label: label, ingredients: ingredients, src: src, method: method, date: date }];
    saveData(newRecipiesList);
    setRecipie(newRecipiesList);

    console.log(newRecipiesList)
  }

  const deleteRecipie: (id: number) => void = (id: number): void => {
    let filteredRecipies = recipie.filter(recipie => recipie.id !== id)
    setRecipie(filteredRecipies);
    saveData(filteredRecipies);
  }


  return (
    <div className="Main App">
      <Navbar />
      <Carousel className='carouselContainer'>
        {carouselDetails.map((detail) => {
          return (
            <Carousel.Item key={detail.src}>
              <img
                className="d-block w-100 pic"
                src={detail.src}
                alt=''
              />
              <Carousel.Caption>
                <img src={projekt} alt="" className="logo" />
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
      <section id="recipies" className="aboutContent">
        <div className="cards">
          {recipiesDetails.map((detail) => {
            return <RecipieCard {...detail} key={detail.description} />
          })}
        </div>
      </section>
      <section id="todays" className="todaysContent">
        <div className={`todays todaysDescript ${theme}`}>
          <h2>{t('main.todays.title')}</h2>
          <p className="secondUnderscore">_</p>
          <div className="aboutTodays">
            {t("main.todays.content")}
          </div>
        </div>
        {todaysDetails.map((detail) => {
          return <TodaysCard {...detail} key={detail.id} ingredients={t(detail.ingredients, { returnObjects: true  })} method={t(detail.method, { returnObjects: true })}/>
        })}
      </section>
      <section id="addRecipie" className="addYours App">
        <div className="centeringContainer">
          <div className="createRecipie">{t("main.create.recipie")}</div>
        </div>
        <FormComponent addRecipie={addRecipie} />
        <RecipiesList recipiesList={recipie} deleteRecipie={deleteRecipie} />
      </section>
    </div>
  );
}

export default Main;
