import React from "react";

import styles from './Header.module.css';
import logoImg from '@/images/logo.png';
import vkWhiteImg from '@/images/vk_white.png';
import youtubeWhiteImg from '@/images/youtube_white.png';
import burgerButtonImg from '@/images/burger.png';

const Header = ({ setActiveBurger }) => {
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
        <header className={styles.header}>
            <div className={styles.body}>
                <img src={logoImg} alt="logo" className={styles.title} />
                <nav className={styles.nav}>
                    {linkList.map((el, i) => {
                        return <a href="#" key={i}>{el}</a>
                    })}
                </nav>
                <div className={styles.buttons}>
                    <div className={styles.social}>
                        <img src={vkWhiteImg} alt="vk" />
                        <img src={youtubeWhiteImg} alt="youtube" />
                    </div>
                    <div className={styles.burgerButton}>
                        <img src={burgerButtonImg} alt="burgerButton" onClick={() => setActiveBurger(true)} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;