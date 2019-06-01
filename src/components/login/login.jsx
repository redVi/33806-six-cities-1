import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {userActionCreator} from '@/reducer/user/user';
import Auth from '@/api/auth';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: ``,
      password: ``,
      isFormWasSubmit: false,
    };
    this._changeText = this._changeText.bind(this);
    this._sendLogInForm = this._sendLogInForm.bind(this);
  }

  _changeText(e, name) {
    this.setState({[name]: e.target.value});
  }

  _sendLogInForm(e) {
    const {email, password} = this.state;
    e.preventDefault();
    this.props.logIn({email, password});
  }

  render() {
    return (
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={this._sendLogInForm}
              className="login__form form"
              action="#"
              method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  value={this.state.email}
                  onChange={(e) => this._changeText(e, `email`)}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required="" />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  value={this.state.password}
                  onChange={(e) => this._changeText(e, `password`)}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required="" />
              </div>

              <button
                disabled={!this.state.email || !this.state.password}
                className="login__submit form__submit button"
                type="submit">
                Sign in
              </button>

            </form>
          </section>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

const _mapDispatchToProps = (dispatch, ownProps) => ({
  logIn: (form) => {
    Auth.post(form).then((response) => {
      dispatch(userActionCreator.logIn(response.data));
      dispatch(userActionCreator.changeAuthorization(false));
      ownProps.history.push(`/`);
    });
  }
});

Login.propTypes = {
  logIn: PropTypes.func,
};

export {Login};

export default connect(null, _mapDispatchToProps)(Login);
