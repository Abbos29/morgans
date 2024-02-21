import React from 'react'
import s from './Product.module.scss'

const Product = () => {
    return (
        <div className={s.product}>
            <div className={s.box}>
                <h3>Уход за лицом и телом</h3>
                <a href=""><h2>Антибактериальное лечебное мыло</h2></a>
                <b>12 000 sum</b>
                <button className="btn">В корзину</button>
            </div>
            <img className={s.img} src="./card-1.jpeg" alt="product-img" />
        </div>
    )
}

export default Product