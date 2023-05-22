import React from 'react'
import logoImg from '@/images/logo.png'
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
  ]
  return (
    <div className={active ? styles.burgerActive : styles.burgerNotActive}>
      <div className={styles.block}>
        <div className={styles.top}>
          <img src={logoImg} alt="logo" />
          <img className={styles.exitImg} onClick={() => setActive(!active)} src={exitImg} alt="exit" />
        </div>
        <div className={styles.links}>
          {linkList.map((name, i) => {
            return <a href="#" key={i}>{name}</a>
          })
          }
        </div>
      </div>
      <div className={styles.blur} onClick={() => setActive(!active)}>

      </div>
    </div>
  )
}

export default Burger