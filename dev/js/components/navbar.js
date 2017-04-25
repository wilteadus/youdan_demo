import React, { Component } from 'react';
import { render } from 'react-dom';

const styles = {
  navbar: {
    margin: 0,
    padding: 0,
    height: 56,
    backgroundColor: '#F9FAFB',
    borderColor: '#CCCCCC',
  },
};

class NavBar extends Component {
  render() {
    return (
      <nav id="navbar" style={styles.navbar} className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">有蛋淘</div>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  // geocode: React.PropTypes.string.isRequired,
  // channel: React.PropTypes.string.isRequired,
  // setChannelFeeds: React.PropTypes.func.isRequired,
};

export default NavBar;
