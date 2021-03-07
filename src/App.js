import Button from '@material-ui/core/Button';
import "./styles.css";

export default function App() {
  return (
    <body>
    <div className="App">
      <h1>Hack to the Future</h1><br/>
      <img src="/imgs/space1.jpeg" class="img" width="1000" height="500"/>
      <h2>Educational Text Adventure Game</h2> 
      <h6>Kristin and Emil</h6>
      <p>Start the lesson below to begin</p>
      <a href="lesson.html">
        <button>Start Lesson</button>
      </a>
    </div>
    </body>
  );
}
