import React from "react";

interface Props {
  error?: string;
}

const ErrorMessage = (props: Props) => (
  <>
    {props.error ? <span className="error error__validation">{props.error}</span> : null}
  </>
);

export default ErrorMessage;
