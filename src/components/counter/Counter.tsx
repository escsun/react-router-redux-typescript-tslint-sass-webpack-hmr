import * as React from "react";

interface State {
  count: number;
}

class Counter extends React.Component<{}, State> {
  constructor() {
    super();

    this.state = {
      count: 0
    };

    setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000);
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
