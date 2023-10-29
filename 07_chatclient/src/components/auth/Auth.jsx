import Signup from "./signup/Signup";
import Login from "./Login";
import Button from "./Button";

function Auth(props) {
    return (
        <>
        <div style={{ width: '50%', display: 'inline-block' }}>
        <h2>Login</h2>
        <Login setToken={props.setToken} />
        </div>
        <div style={{ width: '50%', display: 'inline-block' }}>
            <Signup setToken={props.setToken} />
        </div>
        </>
    )
}

export default Auth;