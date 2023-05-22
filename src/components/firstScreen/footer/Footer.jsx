import React from 'react'
import goImg from '@/images/go.png';
import styles from './Footer.module.scss';

function Footer() {
  const cardList = [
    'Аренда карта',
    'Детский теннис',
    'Сборы команд',
    'Расписание',
  ]

  return (
    <div className={styles.main}>
      {cardList.map((name, i) => {
        return <div className={styles.card} key={i}>
          <div>
            <div className={styles.subtitle}>Услуги</div>
            <div className={styles.title}>{name}</div>
          </div>
          <img src={goImg} alt="go" />
        </div>
      })}
    </div>
  )
}

export default Footer