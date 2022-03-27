import CommentBox from "./comment-box/comment-box";
import { MyClass } from "./my-class/my-class";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CommentBox />
      <MyClass />
    </div>
  );
}
