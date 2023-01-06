import Head from 'next/head';
import Layout from '../../components/Layout';
import NavBar from '../../components/NavBar';
import Style from '../../styles/List.module.css';
import { useEffect } from 'react';
import FormHouse from '../../components/FormHouse';



export default function House(){

  useEffect(() => {
    const list = document.querySelectorAll('li');
    list[2].classList.add(Style.active);
   })


    return (
      <Layout>
        <Head>
              <title>People</title>
        </Head>
        <NavBar />
       <FormHouse/>
      </Layout>
    );

}
