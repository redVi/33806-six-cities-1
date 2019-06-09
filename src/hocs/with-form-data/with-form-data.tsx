import React, {PureComponent} from 'react';

interface State {
  form: object | {},
  isFormReady: boolean
}

function withFormData (WrappedComponent) {
  return class WithSorting extends PureComponent<any, State> {
    constructor(props) {
      super(props);
      this.state = {
        form: {},
        isFormReady: false,
      };
      this._getData = this._getData.bind(this);
    }

    private _getData(e) {
      e.preventDefault();
      const userData = new FormData(e.target);
      const newForm = {};

      for(let pair of userData.entries()) {
        newForm[pair[0]] = pair[1];
      }

      this.setState({form: newForm, isFormReady: true});
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          form={this.state.form}
          isFormReady={this.state.isFormReady}
          handleFormFill={this._getData}
        />
      );
    }
  };
}

export default withFormData;
