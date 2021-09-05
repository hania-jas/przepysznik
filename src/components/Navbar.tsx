import React, { useState } from 'react';
// import '../i18n';
import { useTranslation } from "react-i18next";

const Navbar = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [isLanguage, setIsLanguage] = useState('en');

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
        <a href="#recipies">{t("navbar.recipies")}</a>
        <a href="#todays">{t("navbar.todays")}</a>
        <a href="#addRecipie">{t("navbar.add_yours")}</a>
      </div>
    </nav>
  )
}

export default Navbar;