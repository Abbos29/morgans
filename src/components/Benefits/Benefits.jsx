import React from 'react'
import s from './Benefits.module.scss'

const Benefits = () => {
    return (
        <section className={s.benefits}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.box}>
                        <div className={s.icon}>
                            <img src="./benefits-1.svg" alt="icon" />
                        </div>

                        <h3>Официальный магазин</h3>
                        <p>Мы являемся эксклюзивными дистрибьюторами в Узбекистане.</p>
                    </div>

                    <div className={s.box}>
                        <div className={s.icon}>
                            <img src="./benefits-2.svg" alt="icon" />
                        </div>

                        <h3>Безопасный шопинг</h3>
                        <p>Оплачивайте заказы онлайн — это быстро и безопасно.</p>
                    </div>

                    <div className={s.box}>
                        <div className={s.icon}>
                            <img src="./benefits-3.svg" alt="icon" />
                        </div>

                        <h3>Доставка до двери</h3>
                        <p>Мы доставляем во все города Казахстана. Также возможен самовывоз.</p>
                    </div>

                    <div className={s.box}>
                        <div className={s.icon}>
                            <img src="./benefits-4.svg" alt="icon" />
                        </div>

                        <h3>Есть вопросы?</h3>
                        <p>Напишите или позвоните нам.</p>
                        <a href="">Позвонить</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits