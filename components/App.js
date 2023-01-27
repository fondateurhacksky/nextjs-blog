import NavBar from './Layout/NavBar';
import SlideBar from './Layout/SlideBar';
import Footer from './Layout/Footer';
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