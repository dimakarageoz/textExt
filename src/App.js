import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>

        
            <div className="content col-md-9">{this.props.children}
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
