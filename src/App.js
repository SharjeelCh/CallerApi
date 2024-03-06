import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Tabbar from './Components/Tabbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {<Tabbar/>}
    </div>
    </BrowserRouter>
  );
}

export default App;
