import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Auth from "./components/auth/Auth";
import Button from "./components/auth/Button";
import DisplayRoom from "./components/room/DisplayRoom";
import Footer from "./components/footer/Footer";

function App() {
  const [token, setToken] = useState("");

  useEffect(initializeToken, []);

  function initializeToken() {
    setToken(localStorage.token);
    console.log(localStorage.token);
  }

  function updateToken(newToken) {
    setToken(newToken);
    localStorage.token = newToken;
  }

  function clearToken() {
    setToken("");
    localStorage.removeItem("token");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar token={token} clearToken={clearToken} />
        <Routes>
          {/* <Route path="/" element={<Auth updateToken={updateToken} />} /> */}
          <Route path="/" element={<Button updateToken={updateToken} />} />
          <Route path="/room" element={<DisplayRoom updateToken={updateToken} token={token}/>} />
        </Routes>
      </BrowserRouter>
      {token ? "Token is Updated" : null}

      <Footer />
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
