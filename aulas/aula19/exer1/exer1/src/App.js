import logo from './logo.svg';
import './App.css';
import Welcome from './componente1';
import Question from './componente2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            bem vindos react!
          </p>
          <Welcome name="Andrew" />
          <Question name = "Andrew?" />
          
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

//name é a declaração
