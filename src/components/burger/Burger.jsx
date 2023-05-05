import React from 'react'
import logoImg from '@/images/logo.png'
import exitImg from '@/images/burger_exit.png'
import styles from './Burger.module.scss';


function Burger({active, setActive}) {
  return (
    <div className={active ? styles.burgerActive : styles.burgerNotActive}>
        <div className={styles.block}>
            <div className={styles.top}>
                <img src={logoImg} alt="logo" />
                <img className={styles.exitImg} onClick={() => setActive(!active)} src={exitImg} alt="exit" />
            </div>
            <div className={styles.links}>
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
        <div className={styles.blur} onClick={() => setActive(!active)}>
            
        </div>
    </div>
  )
}

export default Burger