import React, {PureComponent, ReactElement} from 'react';
import {AxiosInstance, AxiosError} from 'axios';

interface Props {
  api: AxiosInstance
}

interface State {
  error: AxiosError
}

export default class ErrorHandler extends PureComponent<Props, State> {
  requestInterceptor: number;
  responseInterceptor: number;

  constructor(props: Props) {
    super(props);
    this.state = {error: null};

    this.requestInterceptor = props.api.interceptors.request.use((req) => {
      this.setState({error: null});
      return req;
    });

    this.responseInterceptor = props.api.interceptors.response.use(
        (res) => res,
        (error) => {
          const status = error.response.status.toString();

          // 5xx errors
          if (status.includes(50)) {
            this.setState({error});
          }
        }
    );
  }

  componentWillUnmount() {
    this.props.api.interceptors.request.eject(this.requestInterceptor);
    this.props.api.interceptors.response.eject(this.responseInterceptor);
  }

  render() {
    const children = React.Children.map(this.props.children, (child: ReactElement) => {
      return React.cloneElement(child, {...this.props});
    });

    return this.state.error ? <div className="error-page">Error {this.state.error.response.status}</div> : children;
  }
}
