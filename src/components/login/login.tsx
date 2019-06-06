import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {userActionCreator} from '@/reducer/user/user';
import Auth from '@/api/auth';

interface Props {
  logIn: (form: State) => object
}

interface State {
  email: string,
  password: string
}

class Login extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {email: ``, password: ``};
    this._changeText = this._changeText.bind(this);
    this._sendLogInForm = this._sendLogInForm.bind(this);
  }

  private _changeText(e: React.ChangeEvent<HTMLInputElement>, name: string): void {
    this.setState({
      [name]: e.target.value
    } as Pick<State, keyof State>);
  }

  private _sendLogInForm(e): void {
    e.preventDefault();
    this.props.logIn(this.state);
  }

  render() {
    return (
      <div className="page page--gray page--login">
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
                    required={true} />
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
                    required={true} />
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
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  logIn: (form: State) => {
    Auth.post(form).then((response) => {
      dispatch(userActionCreator.logIn(response.data));
      ownProps.history.push(`/`);
    });
  }
});

export {Login};
export default connect(null, mapDispatchToProps)(Login);
