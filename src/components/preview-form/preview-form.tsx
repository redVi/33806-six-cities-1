import React from 'react';
import {connect} from 'react-redux';
import Comments from '@/api/comments';
import {dataActionCreator} from '@/reducer/data/data';

const stars = [
  {value: 5, title: 'perfect'},
  {value: 4, title: 'good'},
  {value: 3, title: 'not bad'},
  {value: 2, title: 'badly'},
  {value: 1, title: 'terribly'},
];

const PreviewForm = (props) => {
  if (props.isFormReady) {
    props.sendForm(props.id, props.form);
  }

  return (
    <form className="reviews__form form" method="post" onSubmit={props.handleFormFill}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star) => (
          <React.Fragment key={star.title}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star.value}
              id={`${star.value}-stars`}
              type="radio" />

            <label
              htmlFor={`${star.value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={star.title}>

              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        defaultValue={null}
        placeholder="Tell how was your stay, what you like and what can be improved" />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button className="reviews__submit form__submit button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};


const mapDispatchToProps = (dispatch) => ({
  sendForm: (id, comment) => {
    Comments.post(id, comment).then((response) => {
      dispatch(dataActionCreator.fetchComments(response.data));
    });
  }
});

export {PreviewForm};
export default connect(null, mapDispatchToProps)(PreviewForm);
