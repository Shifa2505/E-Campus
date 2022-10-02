import {Component, React} from "react";
// import { Link } from "react-router-dom";
import "./Login.css"

export default class Login extends Component{
    constructor(props){
        super(props)
        this.props = props
        this.state = {isRegistered : false}
        this.changeRegistered = this.changeRegistered.bind(this)
    }
    changeRegistered(){
        if (this.state.isRegistered){
            this.setState({isRegistered:false})
        }
        else{
            this.setState({isRegistered:true})
        }
    }

    render(){
        if(this.state.isRegistered)
        return(
            < div className="login">
                <form>
                    <p>Email</p>
                    {/* <small>Must be between 8 to 20 chars long and can only contain alphanumeric char, '.' and '_'</small> */}
                    <input type="text" id="uname-input" ></input>
                    <p>Password</p>
                    {/* <small>Must be between 8 to 20 chars long</small> */}
                    <input type="password" id="pwd-input"></input>
                    <button>Login</button>
                </form>
                    <p onClick={this.changeRegistered}>Register...?</p>
            </div>
        )
        else{
            return (
                < div className="login">
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
                    </form>
                        <p onClick={this.changeRegistered}>Already have an account...?</p>
                </div>
            )
        }
    } 
}