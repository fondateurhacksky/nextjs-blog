import Head from 'next/head';
import NavBar from '../../components/Layout/NavBar';
import Style from '../../styles/List.module.css';
import { useEffect } from 'react';
import Home from '../../components/Mobilier/Home';



export default function House(){

  useEffect(() => {
    const list = document.querySelectorAll('li');
    list[2].classList.add(Style.active);
   }, [])


    return (
      <>
        <Head>
              <title>House</title>
        </Head>
        <NavBar />
        <Home />
      </>
    );

}
