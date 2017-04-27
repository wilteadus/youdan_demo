import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedDetail extends Component {
  render() {
    if (!this.props.user) {
      return (<div>Select a user...</div>);
    }
    return (
      <div>
        <img src={this.props.user.thumbnail} />
        <h2>{this.props.user.first} {this.props.user.last}</h2>
        <h3>Age: {this.props.user.age}</h3>
        <h3>Description: {this.props.user.description}</h3>
      </div>
    );
  }
}

FeedDetail.propTypes = {
  user: React.PropTypes.string.isRequired,

};

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
  return {
    user: state.activeUser,
  };
}

export default connect(mapStateToProps)(FeedDetail);
