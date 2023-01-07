import Head from 'next/head';
import Layout from '../../components/Layout';
import NavBar from '../../components/NavBar';
import Style from '../../styles/List.module.css';
import { useEffect } from 'react';
import About from '../../components/about';

export default function Home() {

  useEffect(() => {
    const list = document.querySelectorAll('li');
    list[4].classList.add(Style.active);
   })

    return (
        <Layout>
          <Head>
                <title>People</title>
          </Head>
          <NavBar />
          <About />
        </Layout>
      );
}
