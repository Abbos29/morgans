import React from 'react'
import s from './Banner.module.scss'

const Banner = () => {
  return (
    <section className={s.banner}>
        <div className="container">
            <div className={s.box}>
                <p>Продукция</p>
                <h1>Подарочные <br /> наборы для всех</h1>
                <h4>Выберите наборы для любого повода</h4>
                <a className="btn" href="">Выбрать</a>
            </div>
        </div>
    </section>
  )
}

export default Banner