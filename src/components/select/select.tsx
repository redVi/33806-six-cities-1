import React from 'react';

type selectOption = {
  text: string,
  value: string
}

interface Props {
  opened: boolean,
  active: string,
  options: selectOption[],
  handleSelectOption: (option: object) => void
}

const Select = (props: Props) => {
  const {options, opened, active, handleSelectOption} = props;
  const isOpened = opened ? `places__options--opened` : ``;

  return (
    <ul className={`places__options places__options--custom ${isOpened}`}>
      {options.map((option, idx) =>
        <li
          key={`select-item-${idx}`}
          className={`places__option ${active === option.text ? `places__option--active` : ``}`}
          tabIndex={idx}
          onClick={() => handleSelectOption(option)}>
          {option.text}
        </li>
      )}
    </ul>
  );
};

export default Select;
