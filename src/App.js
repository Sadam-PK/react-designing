import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Login from './components/login';
import Registration from './components/registration';
import './main.css'

function App() {
  return (
    <Router>
      <nav>
        <Link to={'/login'}>Login</Link>
        <Link to={'/registration'}>Register</Link>
      </nav>
      <Routes>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/registration' element={<Registration></Registration>} />
      </Routes>
    </Router>
  );
}

export default App;
