import React from 'react'
import s from './Hero.module.scss'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.box}>
                        <p>Добро пожаловать</p>
                        <h1>Онлайн-магазин <br /> Morgan's Pomades UK</h1>
                        <h2>Официальный дистрибьютер премиальной мужской косметики в Узбекистане</h2>
                        <Link href={'/shop'} className="btn">Продукция</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero