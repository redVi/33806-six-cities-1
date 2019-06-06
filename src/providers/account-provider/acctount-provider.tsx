import React, {Component} from 'react';
// @ts-ignore
const AccountContext = React.createContext();
export const AccountConsumer = AccountContext.Consumer;

export default class AccountProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: `Crunchy Crunch`,
      dateJoined: `9/1/18`,
      membershipLevel: `Silver`
    };
  }
  render() {
    return (
      <AccountContext.Provider value={this.state}>
        {/* eslint-disable-next-line react/prop-types */}
        {this.props.children}
      </AccountContext.Provider>
    );
  }
}
