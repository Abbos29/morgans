import React from 'react'
import Product from '../Product/Product'
import s from './Products.module.scss'

const Products = () => {

    const productCount = Array.from({ length: 8 }, (_, index) => index + 1);

    return (
        <section className={s.products}>
            <div className="container">
                <div className={s.top}>
                    <div>
                        <h2>Вся продукция Morgan's</h2>
                        <h3>Покупайте товары с доставкой на дом</h3>
                    </div>

                    <a className="btn" href="">Выбрать продукцию</a>
                </div>

                <div className={s.grid}>
                    {productCount.map((el, index) => (
                        <Product key={index}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products