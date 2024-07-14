import { useState } from 'react';
import s from './Product.module.scss';

import { useCart } from 'react-use-cart';
import { useIsClient } from 'usehooks-ts';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());


const Product = ({ el }) => {
  const { getItem, addItem, removeItem } = useCart();
  const isClient = useIsClient();

  const [quantity, setQuantity] = useState(1);

  const maxQuantity = el?.quantity || 0;
  const disableIncrease = quantity >= maxQuantity;



 

  return (
    <div className={s.product}>
      <div className={s.box}>
        <h3>{el?.category?.name}</h3>
        <Link href={`/single-product/${el?.id}`}>
          <h2>{el?.name}</h2>
        </Link>
        <b>{el?.price} UZS</b>
        {el?.quantity >= 1 ? (
          isClient && !getItem(el?.id) ? (
            <>
              <div className={s.quantity}>
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  disabled={disableIncrease}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className='btn' onClick={() => addItem(el, quantity)}>
                В корзину
              </button>
            </>
          ) : (
            <button className='btn' onClick={() => removeItem(el?.id)}>
              Отменить
            </button>
          )
        ) : (
          <span className={s.nope}>Нет в наличии</span>
        )}
        {el.peculiarity && <span className={s.nope}>{el.peculiarity}</span>}

        {/* <div className={s.flex}>
          <div className={s.row}>
            <button onClick={() => updateItemQuantity(el.id, el.quantity - 1)}>-</button>
            <p>{el?.quantity}</p>
            <button onClick={() => updateItemQuantity(el.id, el.quantity + 1)}>+</button>
          </div>

          <button onClick={() => removeItem(el?.id)} className={s.remove}>
            Remove
          </button>
        </div> */}
      </div>
      <img className={s.img} src={el?.image} alt={el?.name} />
    </div>
  );
};

export default Product;
