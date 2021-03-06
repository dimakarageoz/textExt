import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Downmanu from './Components/Downmanu';
import Leftbar from './Components/Leftbar';
import TripsManagement from './Components/TripsManagement';
import GroupsManagement from './Components/GroupsManagement';
import GroupsPage from './Components/GroupsPage';
import UserManagement from './Components/UserManagement';
import Payment from './Components/Payment';
import { Router, Route, browserHistory } from 'react-router';
import './mystyle.css';
import './css/jasny-bootstrap.min.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='payment' component={ Payment } />
            <Route path='trips-management' component={ TripsManagement } />
            <Route path='users-management' component={ UserManagement } />
            <Route path='groups-management' component={ GroupsManagement } />
            <Route path='my-groups' component={ GroupsPage } />
        </Route>

    </Router>,
  document.getElementById('root')
);
