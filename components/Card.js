import Image from 'next/image';
import Style from '../styles/card.module.css';
import Pagination from './pagination';
import { CartProvider, useCart } from "react-use-cart";



const Card = ({ data }) => {

  // const { addItem } = useCart();

  return ( 
    <CartProvider>
    <main className={Style.main}>
        {data.map(data => (
          <div key={data.id} className={`card ${Style.card}`} style={{ width: '15rem' }}>
          <Image
          src={`/images/clients/${data.images}`}
          alt={data.nom}
          width={286}
          height={150}
          className="card-img-top"
          />
          <div className={`card-body ${Style.card_body}`}>
            <h4 className="card-title">{data.nom}</h4>
            <h4 className="card-title">{data.prenom}</h4>
            <a href="#" className="btn btn-primary">Plus d'info</a>
            <a href="#" className="btn btn-primary" onClick={() => addItem(1)}>Intéresser</a>
          </div>
          </div>
        ))}

        <Pagination />
    </main>

    </CartProvider>
);
}
export default Card;