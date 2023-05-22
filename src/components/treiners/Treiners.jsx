import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import SwipeLeft from '@/images/arrow-left.png';
import SwipeRight from '@/images/arrow-right.png';

import 'swiper/scss';

import man1 from '@/images/man_1.png';
import man2 from '@/images/man_2.png';
import man3 from '@/images/man_3.png';
import man4 from '@/images/man_4.png';
import man5 from '@/images/man_5.png';
import man6 from '@/images/man_6.png';

import styles from './Treiners.module.scss';
import TreinerItem from './treinerItem/TreinerItem.jsx';

const Treiners = () => {
    const treinerList = [
        {
            img: man1,
            name: 'Nicola Men',
            text: 'Arcu elit massa amet turpis vel consequat pellentesque sit.',
        },
        {
            img: man2,
            name: 'Petr Nicolaevich',
            text: 'hello nice my name is very cool very good go bich',
        },
        {
            img: man3,
            name: 'Artur Bashkirow',
            text: 'Behonge hover my mind of heel is very',
        },
        {
            img: man4,
            name: 'Maksim Gorkiy',
            text: 'Absolutly going to school man month',
        },
        {
            img: man5,
            name: 'Nikita Krutanov',
            text: 'I am a good coach with a lot of experience',
        },
        {
            img: man6,
            name: 'Valentina Supermenovna',
            text: 'I was an athlete in the 1999 championship',
        },
        {
            img: man1,
            name: 'Sofia Asrorova',
            text: 'No one will be left behind after me',
        },
        {
            img: man2,
            name: 'Sidjey Borisovna',
            text: 'Never give up because everything is ahead',
        },
        {
            img: man3,
            name: 'Snova EtotChelov',
            text: 'Without tennis, the world is empty for me.',
        },
        {
            img: man4,
            name: 'Micluderon Spawner',
            text: 'If someone asks who is the best coach, he will answer that I am',
        },
    ];
    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.title}>Тренерский состав</div>
                <div className={styles.nav}>
                    <img src={SwipeLeft} alt="swipe left" className={styles.buttonPrew} />
                    <img src={SwipeRight} alt="swipe right" className={styles.buttonNext} />
                </div>
            </div>
            <div className="bottom">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={2}
                    navigation={{
                        nextEl: '.' + styles.buttonNext,
                        prevEl: '.' + styles.buttonPrew,
                    }}
                    allowTouchMove={false}
                    breakpoints={{
                        400: {
                            slidesPerView: 3,
                        },
                        660: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 6,
                        }
                    }}
                >
                    {treinerList.map(trainer => {
                        return <SwiperSlide>
                            <TreinerItem trainer={trainer} />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Treiners