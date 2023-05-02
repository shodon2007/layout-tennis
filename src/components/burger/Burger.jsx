import React from 'react'
import logoImg from '@/images/logo.png'
import exitImg from '@/images/burger_exit.png'
import styles from './Burger.module.scss';


function Burger() {
  return (
    <div className={styles.burger}>
        <div className={styles.block}>
            <div className={styles.top}>
                <img src={logoImg} alt="logo" />
                <img className={styles.exitImg} src={exitImg} alt="exit" />
            </div>
            <div className="burger__links">
                <a href="#">Главная</a>
                <a href="#">О клубе</a>
                <a href="#">Турниры</a>
                <a href="#">Услуги</a>
                <a href="#">Детский сад</a>
                <a href="#">Галерея</a>
                <a href="#">Цены</a>
                <a href="#">Контакты</a>
            </div>
        </div>
        <div className={styles.blur}>
            
        </div>
    </div>
  )
}

export default Burger