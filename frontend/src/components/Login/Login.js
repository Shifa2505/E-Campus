import {React} from "react";
import { Link } from "react-router-dom";
import "./Login.css"

export default function Login(){
    return (
        < div className="login">
            <form>
                <p>Email</p>
                <input type="text" id="uname-input"></input>
                <p>Password</p>
                <input type="text" id="pwd-input"></input>
                <button>Login</button>
                <a href="/register">Register...?</a>
            </form>
        </div>
    )
}