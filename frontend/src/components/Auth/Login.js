import {React} from "react";
import { Link } from "react-router-dom";
import "./Login.css"

function Login(){
    return (
        < div className="login">
            <form>
                <p>Email</p>
                <small>Must be between 8 to 20 chars long and can only contain alphanumeric char, '.' and '_'</small>
                <input type="text" id="uname-input" pattern="^[A-Za-z][A-Za-z0-9_]{7,29}$"></input>
                <p>Password</p>
                <small>Must be between 8 to 20 chars long</small>
                <input type="password" id="pwd-input"></input>
                <button>Login</button>
                <Link to="/register">Register...?</Link>
            </form>
        </div>
    );
}
export default Login;