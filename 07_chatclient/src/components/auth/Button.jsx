import Login from "./Login";
import Signup from "./signup/Signup";
import { useState } from "react";

function Button({ updateToken }){
  const[login, notLogin] = useState('true');

  return(
    <div>
    <button onClick={() => notLogin(!login)}>
      {
        login
        ?
        "Create an Account"
        :
        "Login"
      }
    </button>
    {
      login
      ?
      <Login updateToken={updateToken}/>
      :
      <Signup updateToken={updateToken}/>
    }
    </div>
  )
}

export default Button;
