import React, {PureComponent} from "react";
import Select from "@/components/select/select";

interface selectOption {
  text: string;
  value: string;
}

interface Props {
  filterOptions: selectOption[];
  onChangeOffersFilter?: (option: selectOption) => void;
}

interface State {
  isSelectOpened: boolean;
  option: selectOption;
}

const ArrowIcon = () =>
  <svg className="places__sorting-arrow" width="7" height="4">
    <use xlinkHref="#icon-arrow-select"/>
  </svg>;

export default class PlacesForm extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isSelectOpened: false,
      option: props.filterOptions[0]
    };
    this._chaneSelectVisibility = this._chaneSelectVisibility.bind(this);
    this._handleSelectOption = this._handleSelectOption.bind(this);
  }

  private _chaneSelectVisibility(): void {
    this.setState({isSelectOpened: !this.state.isSelectOpened});
  }

  private _handleSelectOption(selectedOption) {
    this.props.onChangeOffersFilter(selectedOption);

    this.setState({
      option: selectedOption,
      isSelectOpened: !this.state.isSelectOpened
    });
  }

  render() {
    const {option, isSelectOpened} = this.state;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex={0} onClick={this._chaneSelectVisibility}>
          {option.text}
          <ArrowIcon />
        </span>

        <Select
          options={this.props.filterOptions}
          opened={isSelectOpened}
          active={option.text}
          handleSelectOption={this._handleSelectOption} />
      </form>
    );
  }
}
