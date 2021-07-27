import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <Header />

      <InputForm />

      <Results />
    </div>
  );
}

export default App;
