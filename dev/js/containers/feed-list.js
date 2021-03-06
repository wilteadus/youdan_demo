import React, { Component } from 'react';
import { render } from 'react-dom';
import 'whatwg-fetch';
import Pager from 'react-pager';
import Feed from '../components/feed';

class FeedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 11,
      current: 7,
      visiblePage: 5,
      feeds: [],
    };
  }

  componentWillMount = () => {
    this.loadFeedsFromServer();
  }

  loadFeedsFromServer = (x) => {
    fetch('http://localhost:4000/topics.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
    .then((data) => {
      this.setState({ feeds: data.nTen });
    });
  }

  handlePageChanged = (newPage) => {
    this.setState({ current: newPage });
  }

  render() {
    const styles = {
      // height: this.props.contentH - 100,
      // width: this.props.contentW,
      // backgroundColor: '#f2f2f2',
      // overflowY: 'scroll',
    };
    const FeedNodes = this.state.feeds.map((feed, i) => (
      <Feed
        key={feed.id}
        i={i}
        id={feed.id}
        postTime={feed.postTime}
        title={feed.title}
        valid={feed.valid}
        statement={feed.statement}
        currPrice={feed.currPrice}
        prevPrice={feed.prevPrice}
      />
    ));
    return (
      <div style={styles}>
        <div className='hot-container'>
          <div className='hot-card'>
            {FeedNodes}
          </div>
        </div>
        <Pager
          total={this.state.total}
          current={this.state.current}
          visiblePages={this.state.visiblePage}
          titles={{ first: '<|', last: '>|' }}
          className="pagination-md"
          onPageChanged={this.handlePageChanged}
        />
      </div>
    );
  }
}

FeedList.propTypes = {

};

export default FeedList;
