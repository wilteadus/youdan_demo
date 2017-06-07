import React, { Component } from 'react';
import NavBar from '../components/navbar';
import FeedList from '../containers/feed-list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreData: true,
    };
  }

  render() {
    if (this.state.moreData) {
      var loadMoreView =
        (<div className="more-btn">
          <text className="more-text">查看更多</text>
        </div>);
    } else {
      var loadMoreView = <div className="no-more-btn">没有更多拉!</div>;
    }
    return (
      <div>
        <NavBar />
        <div className="container">
          <FeedList />
          { loadMoreView }
        </div>
      </div>
    );
  }
}


export default App;
