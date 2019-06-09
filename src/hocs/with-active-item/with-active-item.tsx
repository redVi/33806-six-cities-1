import React, {PureComponent, ComponentType} from 'react';
import {Subtract} from 'utility-types';

interface State {
  activeItem: object | number | string
}

interface InjectedProps {
  setActiveItem: (current) => void
}

function withActiveItem <T extends InjectedProps>(WrappedComponent: ComponentType<T>) {
  return class WithActiveItem extends PureComponent<Subtract<T, InjectedProps>, State> {
    constructor(props) {
      super(props);
      this.state = {activeItem: undefined};
      this._setActiveItem = this._setActiveItem.bind(this);
    }

    private _setActiveItem(item) {
      this.setState({activeItem: item});
    }

    render() {
      return (
        <WrappedComponent
          {...this.props as T}
          activeItem={this.state.activeItem}
          setActiveItem={this._setActiveItem} />
      );
    }
  };
}

export default withActiveItem;
