import React from "react";

import styles from './Header.module.css';
import logoImg from '@/images/logo.png';
import vkWhiteImg from '@/images/vk_white.png';
import youtubeWhiteImg from '@/images/youtube_white.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.body}>
                <img src={logoImg} alt="logo" className={styles.title} />
                <nav className="nav">
                    <a href="#">Главная</a>
                    <a href="#">О клубе</a>
                    <a href="#">Турниры</a>
                    <a href="#">Услуги</a>
                    <a href="#">Детский теннис</a>
                    <a href="#">Галерея</a>
                    <a href="#">Цены</a>
                    <a href="#">Контакты</a>
                </nav>
                <div className="buttons">
                    <div className="social">
                        <img src={vkWhiteImg} alt="vk" />
                        <img src={youtubeWhiteImg} alt="youtube" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;