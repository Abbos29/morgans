import React from 'react'
import Card from '../Card/Card'

import s from '../Wrap/Wrap.module.scss'
import Link from 'next/link'

const WrapSec = () => {
    return (
        <section className={`${s.wrap_2} ${s.wrap}`}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.box}>
                        {/* <b>Онлайн-магазин</b> */}
                        <h3>Аксессуары</h3>
                        {/* <h4>Легендарные помады для укладки</h4> */}
                        {/* <a className="btn" href="">Смотреть аксессуары</a> */}
                        <Link className='btn' href={'/shop?brandId=2'}>Смотреть продукцию</Link>

                    </div>

                    <div className={s.blank}>
                        <Link target='_blank' href={'https://www.instagram.com/trmn.store/'}>
                        <img src="./blank-insta2.JPG" alt="instagram" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WrapSec