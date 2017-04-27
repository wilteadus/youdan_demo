import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';

const styles = {
  name: {
    color: '#ff9630',
    fontWeight: '600',
    fontSize: 14,
  },
  feed: {
    margin: '20px',
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#fafafa',
  },
  bottomButton: {
    flex: 1,
    justifyContent: 'center',
    color: '#6D6D78',
    fontWeight: '500',
    alignItems: 'center',
  },
};

class Feed extends Component {
  render() {
    const _fromNow = moment(this.props.created_at).fromNow();

    return (
      <div style={styles.feed}>
        <div
          title={this.props.username}
          titleStyle={styles.name}
          subtitle={_fromNow}
          avatar={this.props.profile_image_url}
        />

        <hr />

        <text>
          {this.props.text}
        </text>

        <hr />

        <div style={styles.bottomContainer}>
          <button
            label="Link"
            style={styles.bottomButton}
          />
          <button
            label="Like"
            style={styles.bottomButton}
          />
        </div>
      </div>
    );
  }
}

export default Feed;
