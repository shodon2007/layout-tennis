import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import SwipeLeft from '@/images/arrow-left.png';
import SwipeRight from '@/images/arrow-right.png';
import man1 from '@/images/man_1.png';
import man2 from '@/images/man_2.png';
import man3 from '@/images/man_3.png';
import man4 from '@/images/man_4.png';
import man5 from '@/images/man_5.png';
import man6 from '@/images/man_6.png';

import 'swiper/scss';

import styles from './Treiners.module.scss';

const Treiners = () => {
    console.log('.' + styles.buttonNext)
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
                    slidesPerView={6}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={{
                        nextEl: '.' + styles.buttonNext,
                        prevEl: '.' + styles.buttonPrew,
                    }}
                    allowTouchMove={false}
                >
                    <SwiperSlide>
                        <div className="man__img">
                            <img src={man1} alt="man1" />
                        </div>
                        <div className="man__name">
                            Мерлин Манро
                        </div>
                        <div className="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="man__img">
                            <img src={man2} alt="man2" />
                        </div>
                        <div className="man__name">
                            Претиум Адио
                        </div>
                        <div className="man__text">
                            hello brothers, my name is pretioum adio, vel const to my teacher.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="man__img">
                            <img src={man3} alt="man3" />
                        </div>
                        <div className="man__name">
                            Сэм Джонсон
                        </div>
                        <div className="man__text">
                            I am the best man in the world. Questions?
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="man__img">
                            <img src={man4} alt="man4" />
                        </div>
                        <div className="man__name">
                            Индиана Брозерс
                        </div>
                        <div className="man__text">
                            Hi, i am Indiana Brothers.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="man__img">
                            <img src={man5} alt="man5" />
                        </div>
                        <div className="man__name">
                            Лорем Лакус
                        </div>
                        <div className="man__text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="man__img">
                            <img src={man6} alt="man6" />
                        </div>
                        <div className="man__name">
                            Pulvinar aliquam
                        </div>
                        <div className="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="man__img">
                            <img src={man1} alt="man1" />
                        </div>
                        <div className="man__name">
                            Pulvinar aliquam
                        </div>
                        <div className="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="man__img">
                            <img src={man2} alt="man2" />
                        </div>
                        <div className="man__name">
                            Pulvinar aliquam
                        </div>
                        <div className="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="man__img">
                            <img src={man3} alt="man3" />
                        </div>
                        <div className="man__name">
                            Pulvinar aliquam
                        </div>
                        <div className="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="man__img">
                            <img src={man4} alt="man4" />
                        </div>
                        <div className="man__name">
                            Pulvinar aliquam
                        </div>
                        <div className="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="man__img">
                            <img src={man5} alt="man5" />
                        </div>
                        <div className="man__name">
                            Pulvinar aliquam
                        </div>
                        <div className="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="man__img">
                            <img src={man6} alt="man6" />
                        </div>
                        <div className="man__name">
                            Pulvinar aliquam
                        </div>
                        <div className="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Treiners