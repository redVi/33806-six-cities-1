import React, { PureComponent } from "react";

type itemType = object | number | string | undefined;

interface State {
  activeItem: itemType;
}

export default class ActiveItem extends PureComponent<any, State> {
  state = { activeItem: undefined };

  private onSetActiveItem = (item: any) => {
    this.setState( { activeItem: item } );
  };

  render() {
    return (
      <>
        {...this.props.render(this.state.activeItem, this.onSetActiveItem)}
      </>
    );
  }
};
