import React from 'react'
import playImg from '@/images/play__button.png';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
        <div className={styles.title}>
            Петербургский <br /> 
            теннисный клуб <br /> 
            имени М.А. Пасечникова
        </div>
        <div className={styles.video}>
                <img src={playImg} alt="play" />
                <div>
                  Посмотрите видео <br /> о нашем клубе
                </div>
        </div>
    </div>
  )
}

export default Main