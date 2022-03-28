import CommentBox from "./comment-box/comment-box";
import GenericComponent from "./generic-component/generic-component";
import { MyClass } from "./my-class/my-class";
import MyTextbox from "./my-textbox/my-textbox";
import MyTextbox2 from "./my-textbox/my-textbox2";
import "./styles.css";

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
    </div>
  );
}
