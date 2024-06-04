import React from 'react'
import s from './Banner.module.scss'
import Link from 'next/link'

const Banner = () => {
  return (
    <section className={s.banner}>
        <div className="container">
            <div className={s.box}>
                <p>Продукция</p>
                <h1>Подарочные <br /> наборы для всех</h1>
                <h4>Выберите наборы для любого повода</h4>
                {/* <a className="btn" href="">Выбрать</a> */}
                <Link className='btn' href={'/brand/3'}>Выбрать</Link>
            </div>
        </div>
    </section>
  )
}

export default Banner