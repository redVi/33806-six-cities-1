import React, {PureComponent, ComponentType} from 'react';
import {Subtract} from 'utility-types';
import {sortByField} from '@/helpers';

interface State {
  list: any,
  filter: string
}

interface InjectedProps {
  items: any,
  setActiveItem: (current: number) => void
}

function withSorting <T extends InjectedProps>(WrappedComponent: ComponentType<T>, items) {
  return class WithSorting extends PureComponent<Subtract<T, InjectedProps>, State> {
    constructor(props) {
      super(props);
      this.state = {
        filter: 'popular',
        list: [...items]
      };
      this._sortOffersByField = this._sortOffersByField.bind(this);
    }

    private _sortOffersByField({value, field}) {
      if (!field) {
        this.setState({list: [...items], filter: 'popular'});
      } else {
        this.setState({list: [...sortByField(this.state.list, value, field)], filter: field});
      }
    }

    render() {
      return (
        <WrappedComponent
          {...this.props as T}
          items={this.state.list}
          handleChangeOffersFilter={this._sortOffersByField} />
      );
    }
  };
}

export default withSorting;
