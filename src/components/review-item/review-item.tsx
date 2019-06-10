import React from 'react';
import {commentType} from '@/types';
import Rating from '@/components/rating/rating';

interface Props {
  comment: commentType
}

const ReviewItem = (props: Props) => {
  const {comment} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={comment.user.avatarUrl} width="54" height="54"
            alt="Reviews avatar"/>
        </div>

        <span className="reviews__user-name">{comment.user.name}</span>
      </div>

      <div className="reviews__info">
        <Rating rating={comment.rating} className="reviews" />

        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={comment.date}>
          {new Date(comment.date).toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}
        </time>
      </div>
    </li>
  );
};

export default ReviewItem;
