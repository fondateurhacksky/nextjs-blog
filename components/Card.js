import Image from 'next/image';
import Style from '../styles/card.module.css';
import Pagination from './pagination';
import { CartProvider, useCart } from "react-use-cart";


const Card = () => {

  const { addItem } = useCart();

  return ( 
    <CartProvider>
    <main className={Style.main}>
        <div className={`card ${Style.card}`} style={{ width: '15rem' }}>
        <Image
        src="/images/clients/IMG-20220506-WA0002.jpg"
        alt="Picture of the author"
        width={286}
        height={150}
        className="card-img-top"
        />
        <div className={`card-body ${Style.card_body}`}>
          <h5 className="card-title">Nom Prenom</h5>
          <h5 className="card-title">50 000 F</h5>
          <a href="#" className="btn btn-primary">Plus d'info</a>
          <a href="#" className="btn btn-primary" onClick={() => addItem(1)}>Intéresser</a>
        </div>
        </div>
        <Pagination />
    </main>
    
    </CartProvider>
);
}
export default Card;
