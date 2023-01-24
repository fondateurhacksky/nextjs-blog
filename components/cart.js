import { useCart } from "react-use-cart";
import Style from '../styles/cart.module.css';
import React, { useState, useEffect } from "react";
  
export default function Cart(){
  const [price, setPrice] = useState(0);
  
  const {
    items,
    removeItem,
  } = useCart();

  const handlePrice = () => {
    let ans = 0;
    items.map((item) => (ans += item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

    return (
      <article className={Style.article}>
        {items.map((item) => (
          <div className={Style.cart_box}key={item.id}>
             <div className={Style.cart}>
              <p>Vous etes Intéresser par : {item.name}</p>
             </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className={Style.total}>
          <span>Les Frais Total de prestation sont :</span>
          <span>{price} Fcfa</span>
        </div>
      </article>
    );
};