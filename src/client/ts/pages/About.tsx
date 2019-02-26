import * as React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

export default class About extends React.Component<
  {},
  {}
  > {
  constructor(props: About['props']) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>{`About us :-)`}</h1>
      </div>
    );
  }
}
