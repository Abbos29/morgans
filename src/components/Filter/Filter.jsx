import React from 'react'
import s from './Filter.module.scss'

const Filter = () => {
    return (
        <>
            <div className={s.filter}>
                <div className={s.wrap}>

                    <div className={s.card}>
                        <h3>По цене</h3>
                        <div className={s.price}>
                            <label htmlFor="">От</label>
                            <input type="text" />

                            <label htmlFor="">До</label>
                            <input type="text" />

                            <button>Найти</button>
                        </div>
                    </div>

                    <div className={s.card}>
                        <h3>Категории</h3>
                        <div className={s.menu}>
                            <p>Test <span>(0)</span></p>
                            <p>Test <span>(0)</span></p>
                            <p>Test <span>(0)</span></p>
                            <p>Test <span>(0)</span></p>
                        </div>
                    </div>

                    <div className={s.card}>
                        <h3>Бренды</h3>
                        <div className={s.menu}>
                            <p>Test <span>(0)</span></p>
                            <p>Test <span>(0)</span></p>
                            <p>Test <span>(0)</span></p>
                            <p>Test <span>(0)</span></p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Filter