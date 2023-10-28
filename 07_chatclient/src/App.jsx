import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Auth from './components/auth/Auth';
import Auth from './components/auth/Auth'


function App() {
  const [token, setToken] = useState('');

  useEffect(initializeToken, []);

  function initializeToken(){
    setToken(localStorage.token);
    console.log(localStorage.token);
  }

  function updateToken(newToken){
    setToken(newToken);
    localStorage.token = newToken;
  }

  function clearToken() {
    setToken('');
    localStorage.removeItem('token');
  }

  return(
    <div className="App">
      <BrowserRouter>
      <Navbar token={token} clearToken={clearToken} />
      <Footer />
      <Routes>
        <Route path="/" element={<Auth setToken={updateToken} />} />
      </Routes>
      </BrowserRouter>
      {token ? 'Token is Updated' : null}

    </div>
  );
}

export default App;

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );