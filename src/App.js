import CommentBox from "./comment-box/comment-box";
import GenericComponent from "./generic-component/generic-component";
import { MyClass } from "./my-class/my-class";
import MyTextbox from "./my-textbox/my-textbox";
import MyTextbox2 from "./my-textbox/my-textbox2";
import RepoList from "./repo-list/repo-list";
import "./styles.css";
import $ from "jquery";
import UserGits from "./user-gits/user-gits";
import UserGistPost from "./user-gist-post/user-gist-post";
import FunctionalComponent from "./func-comp/func-comp";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <br />
      Basic react component: CommentBox
      <CommentBox />
      <br />
      Lifecycle component and props example
      <MyClass />
      <br />
      Default behaviour of props in ReactJS
      <GenericComponent />
      <GenericComponent things="cadbury" />
      <br />
      Normal reference creation example
      <MyTextbox />
      createRef example
      <MyTextbox2 />
      <br />
      Parsing URLs example /*commented*/
      {/* <RepoList
        prm={$.getJSON(
          "https://api.github.com/search/repositories?q=javascript&sort=stars"
        )}
      /> */}
      <br />
      Another way of processing URLs /*commented*/
      {/* <UserGits source="https://api.github.com/users/octocat/gists" /> */}
      <br />
      <UserGistPost />
      <br />
      Functional Component example
      <FunctionalComponent name="react" />
    </div>
  );
}
