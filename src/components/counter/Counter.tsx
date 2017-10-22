import * as React from "react";

interface State {
  count: number;
}

class Counter extends React.Component<{}, State> {
  timerId: any;

  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  componentWillMount() {
    this.timerId = setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        Counter: {this.state.count}
      </div>
    );
  }
}

export default Counter;
