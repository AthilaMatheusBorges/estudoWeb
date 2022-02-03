import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function testandoConexao(){
  return(
  axios.get('/postagens')
    .then(resultado => {
      console.log(resultado)
    })
  )
}

testandoConexao();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <script>
    </script>
    </div>
  );
}

export default App;
