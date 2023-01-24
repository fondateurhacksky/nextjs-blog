import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Style from '../../styles/List.module.css';
import { useEffect, useState } from 'react';
import Person from '../../components/person';



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
