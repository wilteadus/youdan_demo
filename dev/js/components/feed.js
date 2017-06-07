import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FeedDetail } from './feed-detail.js';

class Feed extends Component {

  render() {
    const fromNow = moment.unix(this.props.postTime).fromNow();
    const topicUrl = `https://youdan.co/public/topics/${this.props.id}.png`;

    let invalidView;
    let soldOutView;
    if (this.props.valid == false) {
      invalidView = <div className="hot-invalid" />;
      soldOutView = <div className="ribbon-green">折扣</div>;
    } else {
      soldOutView = <div className="ribbon-green">已售完</div>;
    }

    return (
      <div>
        <div>
          { invalidView }
          <img
            id="{ this.props.id }"
            className="img img-responsive hot-image"
            src={topicUrl}
          />
        </div>
        <div className="ribbon-wrapper-green">
          { soldOutView }
        </div>
        <div className="text-and-price">
          <div className="hot-text">
            <div className="{ this.props.valid==='True' ? hot-title : hot-title-invalid }">
              <Link to={`/detail/${this.props.id}`}>{ this.props.title }</Link>
            </div>
            <div className="hot-statement">
              { this.props.statement }
            </div>
          </div>
          <div className="hot-price">
            <div className="curr-price">
              ¥ { this.props.currPrice }
            </div>
            <div className="prev-price">
              ¥ { this.props.prevPrice }
            </div>
          </div>
        </div>
        <div className="like-comment-box">
          <div className="postTime">
            <div>发布于{ fromNow }</div>
          </div>
          <img className="comment" src="/images/views.png" />
          <div className="comment-count">
            { this.props.views }
          </div>
          <img
            id="{ this.props.id }"
            className="like"
            src="/images/liked.png"
          />
          <div className="{ liked[this.props.id] ? 'liked-count' : 'like-count' }">
            { this.props.likes }
          </div>
        </div>
      </div>
    );
  }
}

Feed.propTypes = {

};

export default Feed;
