import React from 'react';
import NavBar from '../components/navbar';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
require('../../scss/style.scss');

const App = () => (
  <div>
    <NavBar />
    <h2>User List</h2>
    <UserList />
    <hr />
    <h2>User Details</h2>
    <UserDetails />
  </div>
);

export default App;
