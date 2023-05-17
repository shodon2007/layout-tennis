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
import 'swiper/scss/navigation';

import styles from './Treiners.module.scss';


const Treiners = () => {
    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.title}>Тренерский состав</div>
                <div className={styles.nav}>
                    <img src={SwipeLeft} alt="swipe left" />
                    <img src={SwipeRight} alt="swipe right" />
                </div>
            </div>
            <div className="bottom">
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={10}
                    slidesPerView={6}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div class="man__img">
                            <img src={man1} alt="man1" />
                        </div>
                        <div class="man__name">
                            Мерлин Манро
                        </div>
                        <div class="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="man__img">
                            <img src={man2} alt="man2" />
                        </div>
                        <div class="man__name">
                            Претиум Адио
                        </div>
                        <div class="man__text">
                            hello brothers, my name is pretioum adio, vel const to my teacher.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="man__img">
                            <img src={man3} alt="man3" />
                        </div>
                        <div class="man__name">
                            Сэм Джонсон
                        </div>
                        <div class="man__text">
                            I am the best man in the world. Questions?
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="man__img">
                            <img src={man4} alt="man4" />
                        </div>
                        <div class="man__name">
                            Индиана Брозерс
                        </div>
                        <div class="man__text">
                            Hi, i am Indiana Brothers.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="man__img">
                            <img src={man5} alt="man5" />
                        </div>
                        <div class="man__name">
                            Лорем Лакус
                        </div>
                        <div class="man__text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="man__img">
                            <img src={man6} alt="man6" />
                        </div>
                        <div class="man__name">
                            Pulvinar aliquam
                        </div>
                        <div class="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="man__img">
                            <img src={man1} alt="man1" />
                        </div>
                        <div class="man__name">
                            Pulvinar aliquam
                        </div>
                        <div class="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="man__img">
                            <img src={man2} alt="man2" />
                        </div>
                        <div class="man__name">
                            Pulvinar aliquam
                        </div>
                        <div class="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="man__img">
                            <img src={man3} alt="man3" />
                        </div>
                        <div class="man__name">
                            Pulvinar aliquam
                        </div>
                        <div class="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="man__img">
                            <img src={man4} alt="man4" />
                        </div>
                        <div class="man__name">
                            Pulvinar aliquam
                        </div>
                        <div class="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="man__img">
                            <img src={man5} alt="man5" />
                        </div>
                        <div class="man__name">
                            Pulvinar aliquam
                        </div>
                        <div class="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="man__img">
                            <img src={man6} alt="man6" />
                        </div>
                        <div class="man__name">
                            Pulvinar aliquam
                        </div>
                        <div class="man__text">
                            Arcu elit massa amet turpis vel consequat pellentesque sit.
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Treiners