import './App.css';
import Home from './pages/Home.js';
import { Provider } from "./components/ui/provider";

function App({ Component, pageProps }) {
  return (
    <Provider>
      
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
