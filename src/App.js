
import './styles/index.css';
import { Provider} from 'react-redux';
import store from './store';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from "./containers/pages/home"

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route> 
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
