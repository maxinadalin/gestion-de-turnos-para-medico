
import './styles/index.css';
import { Provider} from 'react-redux';
import store from './store';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from "./containers/pages/home"
import Register from "./containers/pages/auth/signUp"
import Sign_In from "./containers/pages/auth/login"

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route> 

        {/* Auth */}
        <Route path='/SignUp' element = {<Register/>}></Route>
        <Route path='/SignIn' element = {<Sign_In/>}></Route>

      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
