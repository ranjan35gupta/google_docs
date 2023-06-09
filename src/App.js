
import './App.css';
import Home from './components/HomePage/Home';
import { Provider } from 'react-redux';
import store from './Redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Home/>
      </Provider>
    </div>
  );
}

export default App;
