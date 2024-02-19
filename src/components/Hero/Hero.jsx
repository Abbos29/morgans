import React from 'react'
import s from './Hero.module.scss'

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.box}>
                        <p>Добро пожаловать</p>
                        <h1>Онлайн-магазин <br /> Morgan's Pomades UK</h1>
                        <h2>Официальный дистрибьютер премиальной мужской косметики в Узбекистане</h2>
                        <button className="btn">Продукция</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero