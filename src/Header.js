import React from 'react';
import style from './Header.module.css'

function Header() {
    return (
        <div className={style.header}>
            <div className="nav">
                <a href="" className="link">Главная</a>
                <a href="" className="link">Скиллы</a>
                <a href="" className="link">Мои работы</a>
                <a href="" className="link">Контакты</a>
            </div>
        </div>
    );
}

export default Header;
