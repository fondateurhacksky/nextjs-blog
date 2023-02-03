import Head from 'next/head';
import NavBar from '../../components/Layout/NavBar';
import Style from '../../styles/Nav.module.css';
import { useEffect } from 'react';
import SignupWork from '../../components/SignupWork';
import Popup from '../../components/Popup';


export default function House(){

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
       <SignupWork/>
       <Popup/>
      </>
    );

}
