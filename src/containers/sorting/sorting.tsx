import React, { Component } from "react";
import { sortByField } from "@/helpers";

interface State {
  list: any[];
  filter: string;
}

export default class Sorting extends Component<any, State> {

  state = { filter: "popular", list: [...this.props.items] };

  componentWillReceiveProps(nextProps) {
    if (nextProps.items.some((elem, idx: number) => elem !== this.state.list[idx])) {
      this.updateList(nextProps.items);
    }
  }

  private sortOffersByField = ( { value, field } ) => {
    if (!field) {
      this.setState({ list: [...this.props.items], filter: "popular" });
    } else {
      this.setState({ list: [...sortByField(this.state.list, value, field)], filter: field });
    }
  };

  private updateList = (list) => {
    this.setState({ list });
  };

  render() {
    return (
      <>
        {...this.props.render(this.state.list, this.sortOffersByField, this.updateList)}
      </>
    );
  }
};
