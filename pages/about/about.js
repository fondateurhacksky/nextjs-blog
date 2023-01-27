import Head from 'next/head';
import NavBar from '../../components/Layout/NavBar';
import Style from '../../styles/List.module.css';
import { useEffect } from 'react';
import About from '../../components/Layout/about';

export default function Home() {

  useEffect(() => {
    const list = document.querySelectorAll('li');
    list[4].classList.add(Style.active);
   })

    return (
        <>
          <Head>
                <title>About us</title>
          </Head>
          <NavBar />
          <About />
        </>
      );
}
