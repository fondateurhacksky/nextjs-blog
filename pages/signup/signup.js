import Head from 'next/head';
import Layout from '../../components/Layout';
import NavBar from '../../components/NavBar';
import Style from '../../styles/List.module.css';
import { useEffect } from 'react';
import Signup from '../../components/Signup';



export default function Home(){

  useEffect(() => {
    const list = document.querySelectorAll('li');
    list[3].classList.add(Style.active);
   })


    return (
      <Layout>
        <Head>
              <title>Singup</title>
        </Head>
        <NavBar />
       <Signup/>
      </Layout>
    );

}
