import { useRouter } from 'next/router';
import NavBar from '../../components/NavBar';
import People from '../../components/people';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Style from '../../styles/List.module.css';
import axios from 'axios';
import useSWR from 'swr'


const fetcher = url => axios.get(url).then(res => res.data)

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  
  // useEffect(() => {
  //   const list = document.querySelectorAll('li');
  //   list[1].classList.add(Style.active);
  //  }, [])

  const { data, error, isLoading } = useSWR(`/api/post/data?id=${id}`, fetcher);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
      <>
        <Head>
              <title>Toure</title>
        </Head>
        <NavBar />
        <People data={data}/>
      </>
    );
}

export default Post