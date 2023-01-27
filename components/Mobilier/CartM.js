import { useCart } from "react-use-cart";
import Style from '../../styles/cart.module.css';
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


  
export default function Cart(){
  const [price, setPrice] = useState(0);
  
  const {
    items,
    removeItem,
  } = useCart();

  const handlePrice = () => {
    let ans = 0;
    items.map((item) => (ans += 5000));
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
              <p>Vous etes Intéresser par  {item.name} Pour un salaire de :</p>
             </div>
            <div>
              <Button sx={{marginRight: '10px', minWidth: '100px', maxWidth: '120px'}} variant="contained">{item.price} F</Button>
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => removeItem(item.id)}>Remove</Button>
            </div>
          </div>
        ))}
        <div className={Style.total}>
          <span>Les Frais Total de prestation sont :</span>
          <span>{price} Fcfa</span>
        </div>
        <Button sx={{marginTop: '20px', float:'right'}} variant="contained" disableElevation>Mettre en Contact</Button>
      </article>
    );
};