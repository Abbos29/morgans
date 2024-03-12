import React from 'react'
import Card from '../Card/Card'

import s from '../Wrap/Wrap.module.scss'

const WrapSec = () => {
    return (
        <section className={`${s.wrap_2} ${s.wrap}`}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.box}>
                        {/* <b>Онлайн-магазин</b> */}
                        <h3>Аксессуары</h3>
                        {/* <h4>Легендарные помады для укладки</h4> */}
                        <a className="btn" href="">Смотреть аксессуары</a>
                    </div>

                    <div className={s.blank}>
                        <img src="./blank-insta.jpg" alt="instagram" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WrapSec