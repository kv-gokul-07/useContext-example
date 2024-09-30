import Home from './pages/home/Home';
import "./App.css";
import InputValueProvider from './hooks/useContext/InputValueProvider';

function App() {
  return (
    <InputValueProvider>
      <Home />
    </InputValueProvider>
  );
}

export default App;
