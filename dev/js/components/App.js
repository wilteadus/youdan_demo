import React from 'react';
import NavBar from '../components/navbar';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import FeedList from '../containers/feed-list';
require('../../scss/style.scss');

// <h2>User List</h2>
// <UserList />
// <hr />
// <h2>User Details</h2>
// <UserDetails />

const App = () => (
  <div>
    <NavBar />
    <FeedList />
  </div>
);

export default App;
