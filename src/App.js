import logo from './logo.svg';
import './App.css';
import JeuDe from './composants/JeuDe'

function App() {
  return (
    <div className="App">
     <JeuDe cache={2} />
    </div>
  );
}

export default App;
