import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import displayRoom from "./room/displayRooms";

function Login({ updateToken }) {
  const navigate = useNavigate('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();
  
    // Testing the function and inputs. comment out when done
    console.log("testing this function");
    console.log(email);
    console.log(password);
  
    
      let response = await fetch('http://127.0.0.1:4000/user/login', {
        headers: new Headers({
          "content-type": "application/json",
        }),
        method: "POST",
        body: JSON.stringify({
          email,
          password
        }),
      });
  
      const results = await response.json();
      console.log(response.status);
      updateToken(results.token);

      if(response.status === 200){
        navigate('/home') //! this will need to go to message page
      }
    } 

  return (
    <div>
      <form onSubmit={loginUser}>
        <input
          placeholder="user@email.com"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <br />

        <input
          placeholder="password" type='password'
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button style={{}}type="submit">
          Login
        </button>
      </form>
    </div>
  );

  }

export default Login; 