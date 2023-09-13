import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LogIn from './Components/User/LogIn';
import Register from './Components/User/Register';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LogIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<LogIn/>}/>
      </Routes>
    </Router>
  )
}

export default App
