import { Component, createRef } from "react";

export default class MyTextbox2 extends Component {
  constructor() {
    super();
    //this.state = {liked:false}
    this.handleClick = this.handleClick.bind(this);
    this.myTextInput2 = createRef();
    //creates a pointer for `myTextInput`
  }
  handleClick() {
    this.myTextInput2.current.focus();
    console.log("data: ", this.myTextInput2.current.value);
  }
  /**
   * Never use `id`, instead use react specific
   * keyword like `ref`
   */
  render() {
    return (
      <div>
        <input type="date" ref={this.myTextInput2} />
        <br />
        <input
          type="button"
          value="Bring back focus"
          className="btn btn-warning"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
