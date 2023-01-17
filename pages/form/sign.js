import Head from 'next/head';
import Layout from '../../components/Layout';
import NavBar from '../../components/NavBar';
import Style from '../../styles/List.module.css';
import { useEffect } from 'react';
import Formulaire from '../../components/Formulaire';



export default function Register(){

  useEffect(() => {
    const list = document.querySelectorAll('li');
    list[1].classList.add(Style.active);
   })


    return (
      <Layout>
        <Head>
              <title>Register</title>
        </Head>
        <NavBar />
       <Formulaire/>
      </Layout>
    );

}
