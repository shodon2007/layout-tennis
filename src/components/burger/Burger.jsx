import React from 'react'
import exitImg from '@/images/burger_exit.png'
import styles from './Burger.module.scss';


function Burger({ active, setActive }) {
  const linkList = [
    'Главная',
    'О клубе',
    'Турниры',
    'Услуги',
    'Детский теннис',
    'Галерея',
    'Цены',
    'Контакты',
  ];

  function burgerClick() {
    setActive(!active)
  }

  return (
    <div className={`${styles.main} ${active ? styles.burgerActive : ''}`}>
      <div className={styles.block}>
        <div className={styles.top}>
          <img className={styles.exitImg} onClick={burgerClick} src={exitImg} alt="exit" />
        </div>
        <div className={styles.links}>
          {linkList.map((link, index) => {
            return <a href="#" key={index}>{link}</a>
          })}
        </div>
      </div>
      <div className={styles.blur} onClick={burgerClick}>
      </div>
    </div>
  )
}

export default Burger