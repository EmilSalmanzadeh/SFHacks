import Button from '@material-ui/core/Button';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello World and Universe</h1><br/>
      <img src="/imgs/space1.jpeg" class="img" width="1000" height="500"/>
      <h2> Yo</h2> 
      <h6>Kristin and Emil</h6>
      <p>Testing123</p>
      <h2>Start editing to see some magic happen!</h2>
      <hr/>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button>
    </div>
  );
}
