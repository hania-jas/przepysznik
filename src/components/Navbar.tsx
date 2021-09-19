import React, { useState, useContext } from 'react';
import { useTranslation } from "react-i18next";
import { ThemeContext } from './ThemeProvider';

const Navbar = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [isLanguage, setIsLanguage] = useState('en');
  const { toggleBodyTheme } = useContext(ThemeContext);

  const changeLang: (lang: string) => void = (lang: string): void => {
    if (lang === 'en') {
      i18n.changeLanguage('de');
      setIsLanguage('de');
    } else {
      i18n.changeLanguage('en');
      setIsLanguage('en');

    }
  }


  return (
    <nav className='navbar'>
      <div className='leftSide'>
        PRZEPYSZNIK
        <button className='changeLanguage' onClick={() => changeLang(isLanguage)}>{isLanguage === 'en' ? 'EN' : 'PL'}</button>
      </div>
      <div className='rightSide'>
        <button onClick={toggleBodyTheme}>theme</button>
        <a href="#recipies">{t("navbar.recipies")}</a>
        <a href="#todays">{t("navbar.todays")}</a>
        <a href="#addRecipie">{t("navbar.add_yours")}</a>
      </div>
    </nav>
  )
}

export default Navbar;