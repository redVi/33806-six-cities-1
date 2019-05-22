import React, {PureComponent} from 'react';

const withActiveItem = (WrappedComponent, index) => {
  return class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        current: index
      };
      this._setActiveItem = this._setActiveItem.bind(this);
    }

    _setActiveItem(current) {
      this.setState({current});
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          current={this.state.current}
          setActiveItem={this._setActiveItem} />
      );
    }
  };
};

export default withActiveItem;
