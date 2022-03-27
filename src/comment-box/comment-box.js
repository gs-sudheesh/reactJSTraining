import { Component } from "react";

class CommentBox extends Component {
  render() {
    let status = "empty";
    return (
      <div className="myBox">
        This is an info Box, which is currently {status}
      </div>
    );
  }
}

export default CommentBox;
