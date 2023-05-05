import React from 'react'
import styles from './FirstScreen.module.css';
import Header from './header/Header';
import Main from './main/Main.jsx';
import Footer from './footer/Footer.jsx';

function FirstScreen({setActiveBurger}) {
  return (
    <div className={styles.firstScreen}>
          <Header setActiveBurger={setActiveBurger} />
          <Main />
          <Footer />
    </div>
  )
}

export default FirstScreen