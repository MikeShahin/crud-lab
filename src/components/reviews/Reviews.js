import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const revs = reviews.filter(r => r.restaurantId === restaurantId);

    const list = revs.map((review, i) => {
      return <Review key={i} review={review} deleteReview={deleteReview} />
    })

    return (
      <ul>
        {list}
      </ul>
    );
  }
};

export default Reviews;