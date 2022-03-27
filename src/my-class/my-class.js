import { Component } from "react";
import { MyProps } from "../my-props/my-props";

export class MyClass extends Component {
  render() {
    return (
      <div>
        <MyProps name="the best" />
      </div>
    );
  }
}
