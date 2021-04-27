import React, { useState } from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import {auth} from"./firebase"
function Login() {
    const history=useHistory();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
   const login=event=>{
       event.preventDefault();
       auth.signInWithEmailAndPassword(email,password)
           .then((auth)=>{
               history.push("/")
           })
           .catch((e)=>(alert(e.message)))

   }
   const createAccount=event=>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
        history.push("/")
        })
        .catch((e)=>(alert(e.message)))
    }
   
    return (
        <div className="login">
            <Link to="/">
            <img src="https://wallpapercave.com/wp/wp2571379.jpg"/>
            </Link>
             <h3>Sign In</h3>
             <div className="login__container">
            <form>
               
                <h5>Email</h5>
                <input value={email} onChange={event=>setEmail(event.target.value)} type="email" />
                <h5>Password</h5>
                <input value ={password}onChange={event=>setPassword(event.target.value)} type="password"/><br/>
                <button onClick={login}>Log In</button><br/>
                <button onClick={createAccount}>Create your account</button>
            </form>
            </div>
        </div>
    )
}

export default Login
