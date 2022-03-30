import { Component } from "react";
import { render } from "react-dom";

export default class UserGistPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      err: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        title: "my http",
        body: "sending a post req."
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ title: data.title, bodu: data.body });
      })
      .catch((errMsg) => {
        console.error(errMsg);
        this.setState({ err: errMsg });
      });
  }
  render() {
    let output = !this.state.err
      ? `title: ` + this.state.title + ` body ` + this.state.body
      : "Error occurred";
    return <div>{output}</div>;
  }
}
