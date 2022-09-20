import {React} from "react";
import "./Register.css"

export default function Register(){
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
                <a href="/login">Already have an account...?</a>
            </form>
        </div>
    )
}