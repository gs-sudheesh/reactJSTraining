import { Component } from "react";

export default class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: null
    };
  }
  componentDidMount() {
    //use of fat arrow function
    //takes care of the context
    //binding here
    this.props.prm.then(
      (value) => this.setState({ loading: false, data: value }),
      (error) => this.setState({ loading: false, error: error })
    );
  }
  render() {
    if (this.state.loading) {
      return <span>loading...</span>;
    } else if (this.state.error !== null) {
      return <span> Error: {this.state.error.message}</span>;
    } else {
      let repos = this.state.data.items;
      let repoList = repos.map(function (repo, idx) {
        return (
          /**
           * each li should have a unique key, essential
           * for React. Virtual log is kept by React to find
           * the delta changes. It backs up copy
           * of data before user making any changes.
           * Reconsilaton algorithm us used to identify the changes for
           * the exact rows
           */
          <li key={idx}>
            <a href={repo.html_url}>{repo.name}</a>
            &nbsp;&nbsp;&nbsp;{repo.description}
            <br />
          </li>
        );
      });
      return (
        <section>
          <h4>Most popular JS Projects @ Github</h4>
          <ul>{repoList}</ul>
        </section>
      );
    }
  }
}
