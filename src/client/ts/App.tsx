import * as React from 'react';
import '../style/app.scss';

export default class App extends React.Component<
  {},
  {}
  > {
  constructor(props: App['props']) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>{`Hello world!`}</h1>
      </div>
    );
  }
}
