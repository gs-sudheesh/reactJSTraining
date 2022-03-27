import { Component } from "react";

class LifeCycle extends Component {
  //1st lifecycle method is constructor
  constructor(props) {
    //if using props pass to constructor
    super(props);
    console.log("Constructor called");
  }
  //componentWillMount() // method deprecated
  //2nd lifecycle method
  render() {
    console.log("Render called");
    return <div>LifeCycle JS: {this.props.name}</div>;
  }
  //3rd Lifecycle method
  componentDidMount() {
    console.log("ComponentDidMount called");
  }
  //4th Lifecycle method
  componentWillUnmount() {
    console.log("ComponentWillUnmount called");
  }
}
export default LifeCycle;
