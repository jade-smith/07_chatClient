import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../App.css";

function Signup({ updateToken }) {
  console.log(updateToken);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const signupRoute = "http://127.0.0.1:4000/user/signup";

  async function displayInputFields(e) {
    e.preventDefault();
    console.log("Test Function");
    console.log(userName);
    console.log(email);
    console.log(password);
    if (password === verifyPassword) {
      try {
        let response = await fetch(signupRoute, {
          headers: new Headers({
            "content-type": "application/json",
          }),
          method: "POST",
          body: JSON.stringify({
            email: email,
            userName: userName,
            password: password,
          }),
        });

        let results = await response.json();
        console.log(results);
        updateToken(results.token);
        if (response.status === 200) navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="container">
      <form className="formContainer">
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />

        <input
          placeholder="username"
          onChange={(e) => setUser(e.target.value)}
          id="username"
        />

        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />

        <input
          placeholder="verify password"
          onChange={(e) => setVerifyPassword(e.target.value)}
          id="vpassword"
        />

        <button type="submit" onClick={displayInputFields} id="button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
