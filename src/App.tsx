import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Components/User/LogIn';
import Register from './Components/User/Register';
import GoogleOauth from './Components/User/GoogleOauth';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/oauth2/redirect' element={<GoogleOauth/>}/>

      </Routes>
    </Router>
  )
}

export default App
