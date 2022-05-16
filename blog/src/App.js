import logo from './logo.svg';
import './App.css';
import {BlackNav} from 'react-bootstrap';
import {useState} from "react";

function App() {
  let [post, setPost] = useState(["남자코트 추천", "강남 우동맛집", "파이썬독학"]);

  const category1_change = () => {
    var newPost = [...post];
    newPost[0] = "여자코트 추천";
    setPost(newPost);
  };

  const category2_change = () => {
    var newPost = [...post];
    newPost[1] = "안암 우동맛집";
    setPost(newPost);
  };

  const category3_change = () => {
    var newPost = [...post];
    newPost[2] = "C언어독학";
    setPost(newPost);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h1>React Blog</h1>
      </div>
      <div className="list">
        <h2>{post[0]}</h2>
        <p>5월 14일 발행</p>
        <button onClick={category1_change}>클릭</button>
      </div>
      <div className="list">
        <h2>{post[1]}</h2>
        <p>5월 14일 발행</p>
        <button onClick={category2_change}>클릭</button>
      </div>
      <div className="list">
        <h2>{post[2]}</h2>
        <p>5월 14일 발행</p>
        <button onClick={category3_change}>클릭</button>
      </div>
    </div>
  );
}

export default App;