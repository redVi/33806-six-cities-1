import React from 'react';
import {connect} from 'react-redux';
import {userActionCreator} from '@/reducer/user/user';
import Auth from '@/api/auth';

interface Props {
  handleFormFill?: (form: object) => any,
  form?: object | {},
  isFormReady: boolean,
  logIn: (form: Form) => object
}

interface Form {
  email?: string,
  password?: string
}

const Login = (props: Props) => {
  if (props.isFormReady) {
    props.logIn(props.form);
  }

  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={props.handleFormFill}
              className="login__form form"
              action="#"
              method="post">

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  defaultValue={null}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={true} />
              </div>

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  defaultValue={null}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required={true} />
              </div>

              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>

            </form>
          </section>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <div className="locations__item-link">
                <span>Amsterdam</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logIn: (form: Form) => {
    Auth.post(form).then((response) => {
      dispatch(userActionCreator.logIn(response.data));
      ownProps.history.push(`/`);
    });
  }
});

export {Login};
export default connect(null, mapDispatchToProps)(Login);
