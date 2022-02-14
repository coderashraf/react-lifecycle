import React from "react";

class Mounting extends React.Component {
  constructor() {
    super();
    console.log("This is constructor function");
  }

  componentDidMount() {
    console.log("This is componentDidMount function");
  }

  render() {
    console.log("This is render function");
    return <div>Mounting Phase</div>;
  }
}

export default Mounting;
