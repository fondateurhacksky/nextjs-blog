import Head from 'next/head';
import NavBar from '../../components/Layout/NavBar';
import Style from '../../styles/List.module.css';
import { useEffect } from 'react';
import Signup from '../../components/Signup';



export default function Home(){

  useEffect(() => {
    const list = document.querySelectorAll('li');
    list[3].classList.add(Style.active);
   })


    return (
      <>
        <Head>
              <title>Sing up</title>
        </Head>
        <NavBar />
       <Signup/>
      </>
    );

}
