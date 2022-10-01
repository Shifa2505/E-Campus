import {React} from "react";
import { Link } from "react-router-dom";
import "./Register.css"

function Register(){
    return (
        < div className="register">
            <form>
                <p>First Name</p>
                <input type="text" id="fname-input"></input>
                <p>Last Name</p>
                <input type="text" id="lname-input"></input>
                <p>Department</p>
                <input type="text" id="dept-input"></input>
                <p>Year of Admission</p>
                <input type="text" id="year-input"></input>
                <p>Email</p>
                <input type="text" id="uname-input"></input>
                <p>Password</p>
                <input type="text" id="pwd-input"></input>
                <button>Register</button>
                <Link to="/login">Already have an account...?</Link>
            </form>
        </div>
    );
}
export default Register;