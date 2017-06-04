import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render () {
    return (
      <nav className="light-blue lighten-1">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" class="brand-logo">Ski Journal</a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Мои тренеровки</Link></li>
            <li><a href="#">Мои отчёты</a></li>
            <li><Link to="/add">Добавить</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;
