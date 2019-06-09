import React from 'react';
import {commentType} from '@/types';

import PreviewForm from '@/components/preview-form/preview-form';
import withFormData from '@/hocs/with-form-data/with-form-data';
import ReviewItem from '@/components/review-item/review-item';

const Form = withFormData(PreviewForm);

interface Props {
  id: number,
  comments: commentType[],
  isLoggedIn: boolean
}

const Reviews = (props: Props) => {
  const {comments, isLoggedIn, id} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">
          {comments && comments.length ? comments.length : 0}
        </span>
      </h2>

      <ul className="reviews__list">
        {comments.map((comment) =>
          <ReviewItem comment={comment} key={`comment-${comment.id}`} />
        )}
      </ul>
      {isLoggedIn ? <Form id={id} /> : null}
    </section>
  );
};

export default Reviews;
