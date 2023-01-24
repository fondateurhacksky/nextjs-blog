import Image from 'next/image';
import Style from '../styles/card.module.css';
import Pagination from './pagination';
import { useCart } from "react-use-cart";
import { useState } from 'react';


export default function Page({ data }){
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 4;
  const pagesCount = Math.ceil(data.length / articlesPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
};

const currentData = data.slice(currentPage * articlesPerPage, (currentPage + 1) * articlesPerPage);

  
const { addItem } = useCart();

  return ( 
    <>
    <main className={Style.main}>
        {currentData.map((data) => (
          <div key={data.id} className={`card ${Style.card}`} style={{ width: '15rem' }}>
          <Image
          src={`/images/clients/${data.images}`}
          alt={data.nom}
          width={286}
          height={150}
          className="card-img-top"
          />
          <div  className={`card-body ${Style.card_body}`}>
            <h4 className="card-title">{data.nom}</h4>
            <h4 className="card-title">{data.prenom}</h4>
            <a href="#" className="btn btn-primary">Plus d'info</a>
            <button className="btn btn-primary" onClick={() => addItem({id: data.id, name: `${data.nom} ${data.prenom}`, price: data.salaire_proposer})} >Intéresser</button>
          </div>
          </div>
        ))}
    </main>
    <Pagination handlePageClick={handlePageClick} pagesCount={pagesCount}/>
    </>
);
}