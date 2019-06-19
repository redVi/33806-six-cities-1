import React, { PureComponent } from "react";

type itemType = object | number | string | undefined;

interface State {
  activeItem: itemType;
}

const withActiveItem = WrappedComponent => {
  return class WithActiveItem extends PureComponent<any, State> {
    state = { activeItem: undefined };

    private setActiveItem = (item: any) => {
      this.setState({ activeItem: item });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          activeItem={this.state.activeItem}
          onSetActiveItem={this.setActiveItem} />
      );
    }
  };
}

export default withActiveItem;
