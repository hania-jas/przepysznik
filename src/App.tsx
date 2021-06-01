//@ts-nocheck
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import RecipieCard from './components/RecipieCard';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import data from './data.json';
import { recipiesDetails } from './recipiesDetails';
import { todaysDetails } from './todaysDetails';
import TodaysCard from './components/TodaysCard';
import FormComponent from './components/FormComponent';
import RecipiesList from './components/RecipiesList';
import { carouselDetails } from './carouselDetails';
import logo from './pictures/logo.png';
import './App.css';



function App() {

  const [recipie, setRecipie] = useState(data);

  const saveData = (newRecipies) => {
    localStorage.setItem("recipies", JSON.stringify(newRecipies));
  };

  useEffect(() => {
     //localStorage.removeItem("recipies")
    if (localStorage.getItem("recipies")) {
      setRecipie(JSON.parse(localStorage.getItem("recipies")));
    }
  }, []);

  const addRecipie = (title, label, ingredients, method, src) => {
    if (label === 'sugar free') {
      src = 'images/sugar.png'
    } else if (label === 'gluten free'){
      src = 'images/gluten.png';
    } else if (label === 'vegan') {
      src = './images/vegan.png';
    } else {
      src = './images/everything.png';
    }

    let newRecipiesList = [...recipie];
    newRecipiesList = [...newRecipiesList, {id: newRecipiesList.length +1, title: title, label: label, ingredients: ingredients, src: src, method: method }];
    saveData(newRecipiesList);
    setRecipie(newRecipiesList);
    
    console.log(newRecipiesList)
  }

  const deleteRecipie = (id) => {
    let filteredRecipies = recipie.filter(recipie => recipie.id !== id)
    setRecipie(filteredRecipies);
    console.log(recipie.id);
  }


  return (
    <div className="App">
      <Navbar/>
      <Carousel className='carouselContainer'>
       {carouselDetails.map((detail) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100 pic"
              src={detail.src}
              alt=''
            />
            <Carousel.Caption>
              <h3>PRZEPYSZNIK</h3>
              <img src={logo} alt="" className="logo"/>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
      </Carousel>
      <section className="aboutContent">
        <div className="cards">
          {recipiesDetails.map((detail) => {
          return <RecipieCard {...detail}/>
        })}
        </div>
      </section>
      <section className="todaysContent">
        {todaysDetails.map((detail) => {
          return <TodaysCard {...detail} />
        })}
      </section>
      <section className="addYours">
        <FormComponent addRecipie={addRecipie}/>
        <RecipiesList recipiesList={recipie} deleteRecipie={deleteRecipie}/>
      </section>
    </div>
  );
}

export default App;
