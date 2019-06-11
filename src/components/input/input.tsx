import React from 'react';
import ErrorMessage from '@/components/error-message/error-message';

enum Tag {
  input = 'input',
  textarea = 'textarea'
}

interface Props {
  label?: string,
  error?: string,
  tag?: string,
  [x: string] : string | number | boolean
}

const Input = (props: Props) => {
  const {label, error, tag, ...rest} = props;
  const TagName = Tag[tag || 'input'];

  return (
    <>
      {label ? <label className="visually-hidden">{label}</label> : null}
      <TagName {...rest} />
      <ErrorMessage error={error} />
    </>
  );
};

export default Input;
