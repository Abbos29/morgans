import React from 'react'
import img from '/public/card-1.jpeg'
import s from './Card.module.scss'
import Image from 'next/image'

const Card = () => {

    return (
        <div className={s.card}>
            <a className={s.card_img} href="">
                <Image src={img.src} fill layout="fill" alt="img" placeholder='blur' blurDataURL={img.blurDataURL} />
            </a>
            <a className={s.card_catalog} href="">ПОМАДЫ ДЛЯ УКЛАДКИ</a>
            <a className={s.card_name} href="">Помада для укладки · Средняя фиксация</a>
            <div className={s.card_box}>
                <b className={s.card_price}>12 000 sum</b>
                <button className={s.card_add}>В корзину</button>
            </div>
        </div>
    )
}

export default Card