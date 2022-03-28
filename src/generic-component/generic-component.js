import { Component } from "react";

export default class GenericComponent extends Component {
  constructor(props) {
    super(props);
    console.log("Default value: ", this.props.things);
  }
  render() {
    console.log("render: ", this.props.things);
    return <div>{this.props.things}</div>;
  }
}
GenericComponent.defaultProps = { things: "biscuit" };
