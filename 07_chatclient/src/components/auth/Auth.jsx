import Signup from "./signup/Signup";
import Login from "./Login";
import displayRoom from "./room/displayRooms";

function Auth(props) {
    return (
        <>
        <div style={{ width: '50%', display: 'inline-block' }}>
        <h2>Login</h2>
        <Login updateToken={props.updateToken} />
        </div>
        <div style={{ width: '50%', display: 'inline-block' }}>
            <Signup updateToken={props.updateToken} />
        </div>
        </>
    )
}

export default Auth;