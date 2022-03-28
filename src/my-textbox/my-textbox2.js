import { Component, createRef } from "react";

export default class MyTextbox2 extends Component {
  constructor() {
    super();
    //this.state = {liked:false}
    this.handleClick = this.handleClick.bind(this);
    this.myTextInput = createRef();
    //creates a pointer for `myTextInput`
  }
  handleClick() {
    this.myTextInput.current.focus();
    console.log("data: ", this.myTextInput.current.value);
  }
  /**
   * Never use `id`, instead use react specific
   * keyword like `ref`
   */
  render() {
    return (
      <div>
        <input type="date" ref={this.myTextInput} />
        <br />
        <input
          type="button"
          value="Bring back focus"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
