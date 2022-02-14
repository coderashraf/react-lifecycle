import React, { Component } from "react";
class Updating extends Component {
  componentWillUnmount() {
    console.log("Component is going to be unmounted");
  }
  render() {
    return <div>This Component will be removed.</div>;
  }
}
export default Updating;
