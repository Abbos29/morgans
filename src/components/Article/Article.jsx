import React from 'react';
import s from './Article.module.scss';
import { data } from '@/db/data';

const Article = ({id}) => {
  const findArt = data.find((el) => {
    return id === el?.id
  })
  return (
    <>
      <section className={s.article}>
        <div className='container'>
            <div className={s.item} key={findArt?.id}>
              <h1>{findArt?.title}</h1>
              <img src={findArt?.image} alt="Morgan's" />
              <div className={s.item__wrapper}>
                <div className={s.left}>
                  <h2>{findArt?.subTitle}</h2>
                  <p>{findArt?.desc}</p>
                  <p>{findArt?.desc2}</p>
                  <p>{findArt?.desc3}</p>
                </div>
                <ul className={s.right}>
                    <li>{findArt?.txt1}</li>
                    <li>{findArt?.txt2}</li>
                    <li>{findArt?.txt3}</li>
                    <li>{findArt?.txt4}</li>
                    <li>{findArt?.txt5}</li>
                </ul>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Article;
