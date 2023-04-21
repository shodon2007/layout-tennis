import React from 'react'
import goImg from '@/images/go.png';
import styles from './Footer.module.scss';

function Footer() {
  function createCard(name) {
    return (
      <div className={styles.card}>
        <div>
          <div className={styles.subtitle}>Услуги</div>
          <div className={styles.title}>{name}</div>
        </div>
        <img src={goImg} alt="go" />
      </div>
    )
  };

  return (
    <div className={styles.main}>
      {createCard('Аренда карта')}
      {createCard('Детский теннис')}
      {createCard('Сборы команд')}
      {createCard('Расписание')}
    </div>
  )
}

export default Footer