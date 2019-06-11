import React, {PureComponent} from 'react';

const initialState = {form: {}, errors: {}, disabled: true, key: Math.random()};

interface State {
  key: number,
  form: object | {},
  errors: object | {}
  disabled: boolean
}

function withFormData (WrappedComponent) {
  return class FormDataComponent extends PureComponent<any, State> {
    constructor(props) {
      super(props);
      this.state = initialState;
      this.handleChange = this.handleChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleServerError = this.handleServerError.bind(this);
    }

    handleChange(evt) {
      evt.persist();

      this.setState(oldState => ({
        form: Object.assign({}, oldState.form, {
          [evt.target.name]: evt.target.value
        }),
        errors: Object.assign({}, oldState.errors, {
          [evt.target.name]: evt.target.validationMessage
        }),
        disabled: !evt.target.form.checkValidity()
      }));
    }

    handleFormSubmit() {
      this.setState(Object.assign({}, initialState, {key: Math.random()}));
    }

    handleServerError(errors) {
      this.setState(oldState => ({
        errors: Object.assign({}, oldState.errors, errors),
        disabled: false
      }));
    }

    render() {
      const {form, disabled, errors, key} = this.state;

      return (
        <WrappedComponent
          {...this.props}
          form={form}
          errors={errors}
          disabled={disabled}
          key={key}
          onSubmit={this.handleFormSubmit}
          onError={this.handleServerError}
          onChange={this.handleChange} />
      );
    }
  };
}

export default withFormData;
