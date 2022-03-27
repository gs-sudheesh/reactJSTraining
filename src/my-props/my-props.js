import { Component } from "react";
import LifeCycle from "../life-cycle/life-cycle";

export class MyProps extends Component {
  render() {
    return (
      <div>
        JS is {this.props.name}, {this.props.address}
        <LifeCycle name="Created" />
      </div>
    );
  }
}
