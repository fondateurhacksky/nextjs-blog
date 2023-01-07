import { Component } from 'react';
import List from './List';
import Style from '../styles/nav.module.css';



export default class NavBar extends Component {

  render() {
    return (
      <nav className={Style.nav}>
        <List />
      </nav>
    );
  }
}
