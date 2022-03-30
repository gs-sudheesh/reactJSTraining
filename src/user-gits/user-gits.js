import { Component } from "react";
import $ from "jquery";
export default class UserGits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      lastGitUrls: ""
    };
  }
  componentDidMount() {
    /**
     * using Jquery to fetch the data and
     * then use setState() function
     */
    $.get(this.props.source, (result) => {
      let lastGit = result[0];
      this.setState({
        username: lastGit.owner.login,
        lastGitUrls: lastGit.html_url
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.username}: last git is{" "}
        <a href={this.state.lastGitUrls}>here</a>
      </div>
    );
  }
}
