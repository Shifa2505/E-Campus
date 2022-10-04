import { Component, React } from "react";
import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";
import AddQuestion from "./components/AddQuestion/AddQuestion";
import Main from "./components/MainFrame/index"
import SingleQuestion from "./components/SingleQuePage/index"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

export default class App extends Component{
    // const text = fetch("localhost/8000")
    // text.then((request)=>console.log(request))
    constructor(props){
        super(props)
        this.props = props
        // this.state = {user : null}
        // this.updateUser = this.updateUser.bind(this)
    }
    
    render(){
        return(
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    {/* <Route path="/login" element={<Login/>}></Route> */}
                    {/* <Route path="/register" element={<Register/>}></Route> */}
                    <Route path="/home" element={<Main/>} ></Route>
                    <Route path="/add-question" element={<AddQuestion/>}></Route>
                    <Route path="/question" element={<SingleQuestion/>}></Route>
                </Routes>      
            </>
        )
    }
}