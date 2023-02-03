import { Component } from 'react';
import List from './List';
import Style from '../../styles/Nav.module.css';



export default class NavBar extends Component {

  render() {
    return (
    <nav className={`${Style.nav} navbar navbar-expand-lg`}>
        <List />
      </nav>
    );
  }
}
