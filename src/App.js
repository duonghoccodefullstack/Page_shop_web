import { Routes,Route,Link} from 'react-router-dom';

import './App.css';
import Login from './Login';
import Homepage from './Homepage';
import SignUp from './SignUp';
function App() {
  return (
    <div className="App">
     <Homepage></Homepage>
      <Routes>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
