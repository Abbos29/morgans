import React from 'react'
import s from './Beard.module.scss'

const Beard = ({title}) => {
  return (
    <section className={s.beard}>
        <div className="container">
            <div className={s.box}>
                <h1>{title}</h1>
            </div>
        </div>
    </section>
  )
}

export default Beard
