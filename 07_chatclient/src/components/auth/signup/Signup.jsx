import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayRoom from '../room/displayRooms';

function Signup(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [userName, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const signupRoute = 'http://127.0.0.1:4000/user/signup'

  return (
    <div>
      <form>
        <input placeholder="email" onChange={ e => setEmail(e.target.value) } />

        <input placeholder="username" onChange={ e => setUser(e.target.value) } />

        <input placeholder="password" onChange={ e => setPassword(e.target.value) } />

        <input placeholder="verify password" onChange={ e => setVerifyPassword(e.target.value) } />

        <button type="submit" onClick={displayInputFields}>Submit</button>
      </form>
    </div>
  )

  async function displayInputFields(e) {
    e.preventDefault();
    console.log('Test Function');
    console.log(userName);
    console.log(email);
    console.log(password);
    if (password === verifyPassword) {
      try {
        let response = await fetch(signupRoute, {
          headers: new Headers({
            'content-type': 'application/json'
          }),
          method: 'POST',
          body: JSON.stringify({
            email: email,
            userName: userName,
            password: password,
          })
        })
  
        let results = await response.json();
        console.log(results);
        props.updateToken(results.token);
        if(response.status === 200)
          navigate(DisplayRoom);
      } catch(error) {
        console.log(error);
      }
    }
  }
}


export default Signup