import * as React from "react";

export default class About extends React.Component<
  {},
  {}
  > {
  constructor(props: About["props"]) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <h1>{`About us :-)`}</h1>
      </div>
    );
  }
}
