import NavBar from './NavBar';
import SlideBar from './SlideBar';
import Footer from './Footer';
import Style  from '../styles/App.module.css'

export default function App() {
  return (
    <div className={Style.container}>
      <NavBar/>
      <SlideBar/>
      <Footer/>
    </div>
  );
}