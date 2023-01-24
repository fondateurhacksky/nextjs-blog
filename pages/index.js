import App from '../components/App';
import { useEffect } from 'react';
import Style from '../styles/List.module.css';

export default function Home() {

  useEffect(() => {
    const list = document.querySelectorAll('li');
    list[0].classList.add(Style.active);
   })

  return (
      <App/>
  );
}
