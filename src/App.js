import Button from '@material-ui/core/Button';
import "./styles.css";

export default function App() {
  return (
    <body>
    <div className="App">
      <h1>LEARN MATH</h1><br/>
      <img src="https://images-na.ssl-images-amazon.com/images/I/81jcaeqY7EL._AC_SL1050_.jpg" class="img" width="700" height="400"/>
      
      <p>Start the lesson below to begin</p>
      <a href="lesson.html">
        <button>START</button>
      </a>
    </div>

    <div className="Lower">
      <h3>Created by Kristin Stacy and Emil Salmanzadeh. <br/>Team Hack To The Future</h3>
      <button>Contact Us</button>
    </div>

 
    </body>
  );
}
