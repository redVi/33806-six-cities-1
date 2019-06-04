import React, {PureComponent, ComponentType} from 'react';
import {Subtract} from 'utility-types';

interface State {
  current: number | undefined
}

interface InjectedProps {
  current?: number,
  setActiveItem: (current: number) => void,
  key?: string
}

function withActiveItem <T extends InjectedProps>(WrappedComponent: ComponentType<T>, index?: number) {
  return class WithActiveItem extends PureComponent<Subtract<T, InjectedProps>, State> {
    constructor(props) {
      super(props);
      this.state = {current: index};
      this.setActiveItem = this.setActiveItem.bind(this);
    }

    private setActiveItem(current: number) {
      this.setState({current});
    }

    render() {
      return (
        <WrappedComponent
          {...this.props as T}
          current={this.state.current}
          setActiveItem={this.setActiveItem} />
      );
    }
  };
}

export default withActiveItem;
