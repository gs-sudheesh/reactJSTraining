import { Component } from "react";

export default class MyTextbox extends Component {
  constructor() {
    super();
    //this.state = {liked:false}
    this.handleClick = this.handleClick.bind(this);
    //bind(this) will force React to bind context
    //of this component for the handleClick
  }
  handleClick() {
    this.refs.myTextInput.focus();
    //ref is an react internal object,
    //stores references
  }
  /**
   * Never use `id`, instead use react specific
   * keyword like `ref`
   */
  render() {
    return (
      <div>
        <input type="date" ref="myTextInput" />
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
