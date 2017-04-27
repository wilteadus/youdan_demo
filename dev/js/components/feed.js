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
    const fromNow = moment.unix(this.props.postTime).fromNow();
    const topicUrl = `https://youdan.co/public/topics/${this.props.id}.png`;

    return (
      <div style={styles.feed}>
        <img className="img-responsive" src={topicUrl} />
        {this.props.id}
        {this.props.title}
        {fromNow}
      </div>
    );
  }
}

Feed.propTypes = {

};

export default Feed;
