import {Component, React} from "react";
// import { Link } from "react-router-dom";
import "./Login.css"
// import { useNavigate } from "react-router-dom";

export default class Login extends Component{
    constructor(props){
        super(props)
        this.props = props
        this.state = {isRegistered : false, data:null}
        this.changeRegistered = this.changeRegistered.bind(this)
        // this.getData = this.getData.bind(this)
        
    }
    changeRegistered(){
        if (this.state.isRegistered){
            this.setState({isRegistered:false})
        }
        else{
            this.setState({isRegistered:true})
        }
    }
    // functionLogin(event){
    //     // event.preventDefault()
    // }
    // async getData(){
    //     let data = await fetch("http://localhost:8000/getData")
    //     console.log(data)
    //     data = await data.json()
    //     this.setState({data:data})
    //     // console.log("Data was feched")
    //     console.log(this.state.data)

    //     // return this.data;
    // }
    // componentDidMount(){
    //     this.getData()
    // }
    async tryLogin(event){
        event.preventDefault()
        console.log("sending login credentials.")
        let response = await fetch(`http://localhost:8000/login`,{method:"post",headers:{
            'Content-Type':'application/json'}
            ,body:JSON.stringify({
                username:document.querySelector(".login form input[name='username']").value,
                password:document.querySelector(".login form input[name='password']").value,
            })
        })
        response = await response.json()
        if(response.ok === true){
            window.location.href = "http://localhost:3000/home"
            window.localStorage.setItem("username",document.querySelector(".login form input[name='username']").value)
            window.localStorage.setItem("loginOk","true")

        }
        else{
            window.alert("Enter valid credentials.")
            window.localStorage.setItem("loginOk","false")
        }
    }
    render(){
        // this.getData()
        if(this.state.isRegistered){
            // this.getData()
            return(
                <div className="login" >
                    
                    {/* <p>{this.state.data.name}</p> */}
                    <form action="http://localhost:8000/login" method="post" onSubmit={this.tryLogin}>
                        <p>Username</p>
                        {/* <small>Must be between 8 to 20 chars long and can only contain alphanumeric char, '.' and '_'</small> */}
                        <input type="text" name="username"></input>
                        <p>Password</p>
                        {/* <small>Must be between 8 to 20 chars long</small> */}
                        <input type="text" name="password"></input>
                        <input type="submit" value="Login"></input>
                    </form>
                        <p onClick={this.changeRegistered}>Register...?</p>
                </div>
            )
        }
        
        else{
            return (
                < div className="login">
                    <form action="http://localhost:8000/newUser" method="post" >
                        <p>First Name</p>
                        <input type="text" name="firstname"></input>
                        <p>Last Name</p>
                        <input type="text" name="lastname"></input>
                        <p>Department</p>
                        <input type="text" name="department"></input>
                        <p>Year of Admission</p>
                        <input type="text" name="academicYear"></input>
                        <p>Email</p>
                        <input type="text" name="email"></input>
                        <p>Username</p>
                        <input type="text" name="username"></input>
                        <p>Password</p>
                        <input type="text" name="password"></input>
                        <input type="submit" value="Register"></input>
                    </form>
                        <p onClick={this.changeRegistered}>Already have an account...?</p>
                </div>
            )
        }
    } 
}