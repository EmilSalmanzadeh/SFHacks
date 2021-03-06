import Button from '@material-ui/core/Button';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello World Market</h1><br/>
      <h2> Yo</h2> 
      <h6>Kristin and Emil</h6>
      <p>Testing123</p>
      <h2>Start editing to see some magic happen!</h2>
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
