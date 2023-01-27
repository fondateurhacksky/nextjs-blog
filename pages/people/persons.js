import Head from 'next/head';
import NavBar from '../../components/Layout/NavBar';
import Style from '../../styles/List.module.css';
import { useEffect } from 'react';
import Person from '../../components/Personelles/Person';



export default function Persons(){

  useEffect(() => {
    const list = document.querySelectorAll('li');
    list[1].classList.add(Style.active);
   }, [])


    return (
      <>
        <Head>
              <title>Person</title>
        </Head>
        <NavBar />
        <Person />
      </>
    );

}
