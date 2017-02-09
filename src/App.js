import React, { Component } from 'react';
import { Link } from 'react-router';
// import './App.css';
import './css/jasny-bootstrap.min.css'
import Leftbar from './Components/Leftbar'

class App extends Component {
  render() {
    return (
        <div>
        <nav className="navmenu navmenu-default navmenu-fixed-left offcanvas" role="navigation">
         <Leftbar />
        </nav>
        <div className="navbar navbar-default navbar-fixed-top">
          <button type="button" className="navbar-toggle" data-toggle="offcanvas" data-target=".navmenu" data-canvas="body">
            <span classNames="icon-bar"></span>
            <span classNames="icon-bar"></span>
            <span classNames="icon-bar"></span>
          </button>
        </div>
            <div>
            {this.props.children}
            </div>
        </div>
      );
  }
}

export default App;


//
// <div className="nav-pane col-md-3">
//         <Link to="/my-groups">Мои группы</Link>
//         <Link to="/groups-management">Управление группами</Link>
//         <Link to="/trips-management">Управление маршрутами</Link>
//         <Link to="/users-management">Управление участниками</Link>
//         <Link to="/payment">Оплата</Link>
// </div>
