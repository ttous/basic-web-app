import * as React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

export default class NotFound extends React.Component<
  {},
  {}
  > {
  constructor(props: NotFound['props']) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>{`ERROR 404 :-(`}</h1>
      </div>
    );
  }
}
