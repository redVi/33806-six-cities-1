import React, { PureComponent, ComponentType } from "react";
import { Subtract } from "utility-types";
import { sortByField } from "@/helpers";

interface State {
  list: any[];
  filter: string;
}

const withSorting = WrappedComponent => {
  return class WithSorting extends PureComponent<any, State> {
    state = { filter: "popular", list: [...this.props.items] }

    private sortOffersByField = ({ value, field }) => {
      if (!field) {
        this.setState({ list: [...this.props.items], filter: "popular" });
      } else {
        this.setState({ list: [...sortByField(this.state.list, value, field)], filter: field });
      }
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          items={this.state.list}
          onChangeOffersFilter={this.sortOffersByField} />
      );
    }
  };
}

export default withSorting;
