import React from 'react';
import s from './Article.module.scss';
import { data } from '@/db/data';

const Article = () => {
  return (
    <>
      <section className={s.article}>
        <div className='container'>
          {data?.map((el) => (
            <div className={s.item} key={el?.id}>
              <h1>{el?.title}</h1>
              <img src={el?.image} alt="Morgan's" />
              <div className={s.item__wrapper}>
                <div className={s.left}>
                  <h2>{el?.subTitle}</h2>
                  <p>{el?.desc}</p>
                  <p>{el?.desc2}</p>
                  <p>{el?.desc3}</p>
                </div>
                <ul className={s.right}>
                    <li>{el?.txt1}</li>
                    <li>{el?.txt2}</li>
                    <li>{el?.txt3}</li>
                    <li>{el?.txt4}</li>
                    <li>{el?.txt5}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Article;
