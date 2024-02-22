import React from 'react'
import Card from '../Card/Card'

import s from './Wrap.module.scss'

const Wrap = () => {
  return (
    <section className={`${s.wrap_1} ${s.wrap}`}>
      <div className="container">
        <div className={s.wrapper}>

          <Card id={3} />

          <div className={s.box}>
            <b>Онлайн-магазин</b>
            <h3>Помады Morgan's</h3>
            <h4>Легендарные помады для укладки</h4>
            <a className="btn" href="">Смотреть продукцию</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wrap