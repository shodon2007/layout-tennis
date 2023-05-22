import React from 'react'

import TreinerList from './treinerList/TreinerList.jsx';

import SwipeLeft from '@/images/arrow-left.png';
import SwipeRight from '@/images/arrow-right.png';
import styles from './Treiners.module.scss';


const Treiners = () => {
    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.title}>Тренерский состав</div>
                <div className={styles.nav}>
                    <img src={SwipeLeft} alt="swipe left" className='swiper-navigation-prew' />
                    <img src={SwipeRight} alt="swipe right" className='swiper-navigation-next' />
                </div>
            </div>
            <div className="bottom">
                <TreinerList />
            </div>
        </div>
    )
}

export default Treiners