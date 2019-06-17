import React from "react";
import { connect } from "react-redux";
import Auth from "@/api/auth";
import { userActionCreator } from "@/reducer/user/user";
import Input from "@/components/input/input";
import ErrorMessage from "@/components/error-message/error-message";

interface Props {
  form?: object | {};
  errors?: any;
  disabled: boolean;
  onChange: (evt) => void;
  logIn: (form: Form) => object;
}

interface Form {
  email?: string;
  password?: string;
}

const Login = (props: Props) => {
  const { errors, disabled, onChange, form } = props;

  const submitForm = (evt) => {
    evt.preventDefault();
    props.logIn(form);
  };

  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <form method="post" className="login__form form" onSubmit={submitForm} onChange={onChange}>
              <div className="login__input-wrapper form__input-wrapper">
                <Input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  label="E-mail"
                  defaultValue={null}
                  required={true}
                  error={errors.email}
                />
              </div>

              <div className="login__input-wrapper form__input-wrapper">
                <Input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  label="Password"
                  defaultValue={null}
                  required={true}
                  error={errors.password}
                />
              </div>

              <ErrorMessage error={errors.error} />

              <button className="login__submit form__submit button" type="submit" disabled={disabled}>
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
      ownProps.history.push("/");
    }).catch((err) => {
      ownProps.onError(err.data);
    })
  }
});

export { Login };
export default connect(null, mapDispatchToProps)(Login);
