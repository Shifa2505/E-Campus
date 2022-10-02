import { React } from "react";
import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";
import AddQuestion from "./components/AddQuestion/AddQuestion";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

export default function App(){
    const text = fetch("localhost/8000")
    text.then((request)=>console.log(request))

    return(
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                {/* <Route path="/login" element={<Login/>}></Route> */}
                {/* <Route path="/register" element={<Register/>}></Route> */}
                <Route path="/ask" element={<AddQuestion/>}></Route>
            </Routes>      
        </>
    )
}