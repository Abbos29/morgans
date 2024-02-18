// import React from 'react'
import Link from 'next/link'
import s from './Header.module.scss'
import { useState } from 'react'


const Header = () => {

    const [isMenu, setIsMenu] = useState(false)

    const menuHandle = () => {
        setIsMenu(!isMenu)
    }

    return (
        <header className={s.header}>
            <div className="container">
                <nav className={s.nav}>
                    <Link className={`${s.logo}`} href="/">
                        <img src="./logo.png" alt="logo" />
                    </Link>

                    <div className={`${s.menu} ${isMenu ? 'menu-open' : ''}`}>
                        <a className="link" href="">Главная</a>
                        <a className="link" href="">О нас</a>
                        <a className="link" href="">Продукция</a>
                        <a className="link" href="">Контакты</a>
                    </div>

                    <div className={s.box}>
                        <div className={s.search}>
                            <input placeholder="Поиск.." type="text" />
                        </div>

                        <div className={s.cart}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                                <path d="M95.2 65l-54.6 8c-1.6.2-2.8 1.8-2.5 3.4.2 1.5 1.5 2.6 3 2.6.1 0 .3 0 .4 0l54.6-8c9.4-1.4 16.8-8.2 19-17.4l6.9-28.8c.2-.9 0-1.8-.6-2.6-.6-.7-1.4-1.1-2.4-1.1H21.5C18.8 8.7 11.3 2 11 1.7 9.7.7 7.8.8 6.8 2 5.7 3.3 5.8 5.2 7 6.2c.1.1 7.2 6.5 9 18.2l8.7 57.5c1 6.4 6.4 11.1 12.9 11.1H97c1.7 0 3-1.3 3-3s-1.3-3-3-3H37.6c-3.5 0-6.4-2.5-6.9-6l-8.2-54h92.7l-6 25.1C107.6 58.9 102.1 64 95.2 65zM31 114c0 7.2 5.8 13 13 13s13-5.8 13-13-5.8-13-13-13S31 106.8 31 114zM51 114c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7S51 110.1 51 114zM87 101c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13S94.2 101 87 101zM87 121c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7S90.9 121 87 121z" fill="#000" />
                            </svg>
                        </div>

                        <div className={s.burger} onClick={menuHandle}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 5L2 7L22 7L22 5L2 5 z M 2 11L2 13L22 13L22 11L2 11 z M 2 17L2 19L22 19L22 17L2 17 z" /></svg>
                        </div>
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Header