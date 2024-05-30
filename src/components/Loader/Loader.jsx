import React from 'react';
import s from './loader.module.scss';

const Loader = () => {
  return (
    <>
      <div className={s.loader}>
        <img className={s.loader_img} src='./assets/loader.webp' alt='' />
      </div>
    </>
  );
};

export default Loader;
