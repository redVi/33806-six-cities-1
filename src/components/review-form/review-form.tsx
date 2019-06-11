import React from 'react';
import {connect} from 'react-redux';

import {STARS} from '@/constants';
import Comments from '@/api/comments';
import {dataActionCreator} from '@/reducer/data/data';
import Input from '@/components/input/input';
import ErrorMessage from '@/components/error-message/error-message';

type formType = {
  rating: number,
  comment: string
}

interface Props {
  id: number,
  key?: number,
  form: formType,
  errors?,
  disabled: boolean,
  comment: formType,
  onChange: (evt: any) => void,
  onSubmit: () => void,
  onError: (error: object) => void,
  onSendForm: (id: number, comment: formType) => void
}

const ReviewForm = (props: Props) => {
  const {onSendForm, onChange, id, form, errors, disabled} = props;

  const submitForm = (evt) => {
    evt.preventDefault();
    props.onSubmit();
    onSendForm(id, form);
  };

  return (
    <form className="reviews__form form" method="post" onSubmit={submitForm} onChange={onChange}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating" key={`${props.key}-rating`}>
        {STARS.map((star) => (
          <React.Fragment key={star.title}>
            <Input
              className="form__rating-input visually-hidden"
              name="rating"
              type="radio"
              value={star.value}
              id={`${star.value}-stars`}
              required={true}
              error={errors.value} />

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

      <Input
        key={`${props.key}-comment`}
        tag="textarea"
        className="reviews__textarea form__textarea"
        placeholder="Tell how was your stay, what you like and what can be improved"
        id="comment"
        name="comment"
        defaultValue={null}
        required={true}
        minLength={50}
        maxLength={300}
        error={errors.comment} />

      <ErrorMessage error={errors.error} />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button className="reviews__submit form__submit button" type="submit" disabled={disabled}>
          Submit
        </button>
      </div>
    </form>
  );
};


const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  onSendForm: (id: number, comment: formType) => {
    Comments.post(id, comment).then((response) => {
      dispatch(dataActionCreator.fetchComments(response.data));
    }).catch((err) => {
      ownProps.onError(err.data);
    })
  }
});

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
