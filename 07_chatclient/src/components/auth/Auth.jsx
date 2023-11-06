import Signup from "./signup/Signup";
import Login from "./Login";

function Auth(props) {
  console.log("Auth");
  console.log(props);
  return (
    <>
      <div style={{ width: "50%", display: "inline-block" }}>
        <h2>Login</h2>
        <Login updateToken={props.updateToken} />
      </div>
      <div style={{ width: "50%", display: "inline-block" }}>
        <Signup updateToken={props.updateToken} />
      </div>
    </>
  );
}

export default Auth;
