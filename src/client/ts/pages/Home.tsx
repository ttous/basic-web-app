import * as React from 'react';

export default class Home extends React.Component<
  {},
  {}
  > {
  constructor(props: Home['props']) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>{`Welcome!`}</h1>
      </div>
    );
  }
}
